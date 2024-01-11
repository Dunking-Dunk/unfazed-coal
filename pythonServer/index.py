from ultralytics import YOLO
import util
from sort.sort import *
from util import get_car, read_license_plate, write_csv

import cv2
import numpy
from flask import Flask, render_template, Response, stream_with_context, request, jsonify
from flask_cors import CORS
import pickle

results = {}

mot_tracker = Sort()

coco_model = YOLO('Files/yolov8n.pt')
license_plate_detector = YOLO('Files/license_plate_detector.pt')

#video = cv2.VideoCapture(0)

video = cv2.VideoCapture('Files/sample.mp4')

app = Flask('__name__')
CORS(app)

plate_text_list = []

model1 = pickle.load(open("truck_time_taken.pkl", "rb"))
model2 = pickle.load(open("truck_fuel_efficiency.pkl", "rb"))
model3 = pickle.load(open("truck_engine_health.pkl", "rb"))
# model4 = pickle.load(open("truck_co2_status.pkl", "rb"))


def video_stream():
    vehicles = [2, 3, 5, 7]
    frame_nmr = -1
    ret = True
    while True:
        ret, frame = video.read()
        if not ret:
            break;
        else:
            ret, buffer = cv2.imencode('.jpeg',frame)
            frame1 = buffer.tobytes()
            yield (b' --frame\r\n' b'Content-type: imgae/jpeg\r\n\r\n' + frame1 +b'\r\n')

number_plate_list = []
def number_check():
    vehicles = [2, 3, 5, 7]
    frame_nmr = -1
    ret = True
    #print('working')
    while ret:
        frame_nmr += 1
        ret, frame = video.read()
        if ret:
            results[frame_nmr] = {}
            detections = coco_model(frame)[0]
            detections_ = []
            for detection in detections.boxes.data.tolist():
                x1, y1, x2, y2, score, class_id = detection
                if int(class_id) in vehicles:
                    detections_.append([x1, y1, x2, y2, score])

            track_ids = mot_tracker.update(np.asarray(detections_))

            license_plates = license_plate_detector(frame)[0]
            for license_plate in license_plates.boxes.data.tolist():
                x1, y1, x2, y2, score, class_id = license_plate

                xcar1, ycar1, xcar2, ycar2, car_id = get_car(license_plate, track_ids)

                if car_id != -1:

                    license_plate_crop = frame[int(y1):int(y2), int(x1): int(x2), :]

                    license_plate_crop_gray = cv2.cvtColor(license_plate_crop, cv2.COLOR_BGR2GRAY)
                    _, license_plate_crop_thresh = cv2.threshold(license_plate_crop_gray, 64, 255, cv2.THRESH_BINARY_INV)

                    license_plate_text, license_plate_text_score = read_license_plate(license_plate_crop_thresh)

                    if license_plate_text is not None:
                        results[frame_nmr][car_id] = {'car': {'bbox': [xcar1, ycar1, xcar2, ycar2]},
                                                      'license_plate': {'bbox': [x1, y1, x2, y2],
                                                                        'text': license_plate_text,
                                                                        'bbox_score': score,
                                                                        'text_score': license_plate_text_score}}

                        if license_plate_text_score > 0.5:
                            number_plate_list.append(license_plate_text)
                    
                    return number_plate_list

# number_check()

# @app.route('/video_feed')
# def video_feed():
#     return Response(video_stream(), mimetype='multipart/x-mixed-replace; boundary=frame')

# @app.route('/number', methods = ['GET'])
# def number():
#     return jsonify({'value': number_plate_list})

@app.route("/time", methods=["GET"])
def predict_time():
    # Retrieve query parameters from the request
    param_names = ["Speed", "Distance"]
    float_features = [float(request.args.get(param, 0.0)) for param in param_names]
    features = [np.array(float_features)]

    prediction = model1.predict(features)

    return jsonify({"Time Taken": prediction.tolist()})

@app.route("/fuel", methods=["GET"])
def predict_fuel():
    # Retrieve query parameters from the request
    param_names = ["Distance", "Fuel Consumed"]
    float_features = [float(request.args.get(param, 0.0)) for param in param_names]
    features = [np.array(float_features)]

    prediction = model2.predict(features)

    return jsonify({"Fuel Efficiency": prediction.tolist()})

@app.route("/health", methods=["GET"])
def predict_health():
    # Retrieve query parameters from the request
    param_names = ["Engine Temp", "Exhaust Gas Temp"]
    float_features = [float(request.args.get(param, 0.0)) for param in param_names]
    features = [np.array(float_features)]

    prediction = model3.predict(features)

    return jsonify({"Engine Health": prediction.tolist()})

# @app.route("/co2", methods=["GET"])
# def predict_co2():
#     # Retrieve query parameters from the request
#     param_names = ["CO2 Emission", "Exhaust Gas Temp"]
#     float_features = [float(request.args.get(param, 0.0)) for param in param_names]
#     features = [np.array(float_features)]

#     prediction = model4.predict(features)

#     return jsonify({"C02 Status": prediction.tolist()})
    

app.run(host='0.0.0.0', port='5000', debug=False)