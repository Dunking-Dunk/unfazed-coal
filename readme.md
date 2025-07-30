Unfazed-Coal
Unfazed-Coal is a digital platform for multi-modal visibility of coal transportation. It is designed to address the challenges in the coal transportation network by providing a comprehensive, real-time view of the entire process.

Table of Contents
Unfazed-Coal

Table of Contents

Introduction

Features

Architecture

Technology Stack

Getting Started

Prerequisites

Installation

Usage

Contributing

License

Introduction
The coal industry faces significant inefficiencies in its transportation network, including a lack of transparency and timely information. This affects coal producers, transport companies, and end-users, making it difficult for them to optimize their logistics operations. Unfazed-Coal is a digital platform that provides a comprehensive view of coal transportation across various modes, enabling stakeholders to monitor the entire journey from source to destination. 

Features

Real-time Tracking: The platform provides real-time visibility tools for effective management of coal shipments. 


Logistics Optimization: It includes features to streamline operations, which helps in minimizing delays and reducing costs. 


Safety Technologies: The platform integrates technologies that prioritize safety in coal transportation. 


Predictive Analysis: The platform uses machine learning for predictive analysis of delays and other issues. 

Architecture
Unfazed-Coal uses a microservices architecture to handle large data flow without any downtime. This allows the application to handle more workload as needed.  The architecture includes a front-end admin panel and a worker mobile app, a back-end with multiple microservices, and integration with IoT devices for data collection.

The platform's architecture consists of the following components:


Admin Panel: A web-based dashboard for monitoring and managing the transportation process. 


Worker Mobile App: A mobile app for drivers and other workers to receive notifications and updates. 


Back-end Server: The server is built with a choice of either a monolith or microservices architecture. 


IoT Integration: The platform integrates with telematic systems in trucks, ships, and trains to collect real-time data. 

Technology Stack
Frontend:

React

Redux

Socket.IO

Chart.js

Google Maps API

Backend:

Node.js

Express.js

MongoDB

Socket.io

TensorFlow

Keras

OpenCV

Getting Started
Prerequisites
Node.js

npm

MongoDB

Installation
Clone the repository:

Bash

git clone https://github.com/Dunking-Dunk/unfazed-coal.git
Install the dependencies:

Bash

npm install
Start the server:

Bash

npm start
Usage
Once the server is running, you can access the admin panel at http://localhost:3000. The worker mobile app can be built and run on a mobile device.

Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License.
