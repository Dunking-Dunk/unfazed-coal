<h1 align="center">
  Unfazed-Coal 🚚
</h1>

<p align="center">
  A digital platform for multi-modal visibility of coal transportation, designed to bring transparency and efficiency to the logistics network.
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/Dunking-Dunk/unfazed-coal" alt="License">
  <img src="https://img.shields.io/github/last-commit/Dunking-Dunk/unfazed-coal" alt="Last Commit">
  <img src="https://img.shields.io/github/stars/Dunking-Dunk/unfazed-coal?style=social" alt="GitHub Stars">
</p>

---

### **TABLE OF CONTENTS**

* [**Introduction**](#introduction-📖)
* [**Features**](#features-✨)
* [**Architecture**](#architecture-🏗️)
* [**Technology Stack**](#technology-stack-💻)
* [**Getting Started**](#getting-started-🚀)
* [**Usage**](#usage-🎮)
* [**Contributing**](#contributing-🤝)
* [**License**](#license-📄)

---

## **Introduction** 📖

The coal industry faces significant inefficiencies in its transportation network, including a lack of transparency and timely information. This affects coal producers, transport companies, and end-users, making it difficult for them to optimize their logistics operations. **Unfazed-Coal** is a digital platform that provides a comprehensive view of coal transportation across various modes, enabling stakeholders to monitor the entire journey from source to destination.

---

## **Features** ✨

* [cite_start]**Real-time Tracking**: Provides real-time visibility tools for effective management of coal shipments. [cite: 28]
* [cite_start]**Logistics Optimization**: Includes features to streamline operations, helping to minimize delays and reduce costs. [cite: 27]
* [cite_start]**Safety Technologies**: Integrates technologies that prioritize safety in coal transportation. [cite: 29]
* [cite_start]**Predictive Analysis**: Uses machine learning for predictive analysis of delays and other operational issues. [cite: 598]
* [cite_start]**Multi-Modal Integration**: Seamlessly tracks coal across trucks, trains, and ships. [cite: 13]
* [cite_start]**Driver Behavior Monitoring**: Utilizes AI to monitor driver behavior for enhanced safety. [cite: 985, 992]

---

## **Architecture** 🏗️

[cite_start]Unfazed-Coal uses a **microservices architecture** to handle large data flows without downtime, allowing the application to scale as needed. [cite: 52, 114] The system includes:

* [cite_start]**Admin Panel**: A web-based dashboard (built with Next.js) for monitoring and managing the transportation process. [cite: 84, 136]
* [cite_start]**Worker Mobile App**: A mobile app (built with React Native) for drivers and workers to receive notifications and updates. [cite: 99, 201]
* [cite_start]**Back-end Services**: Independent services handle specific functionalities like tracking, authentication, and analytics. [cite: 77]
* [cite_start]**IoT Integration**: The platform integrates with telematic systems (TCU) in trucks, ships, and trains to collect real-time data. [cite: 481, 503]

---

## **Technology Stack** 💻

<table>
  <tr>
    <td align="center"><strong>Frontend</strong></td>
    <td align="center"><strong>Backend</strong></td>
    <td align="center"><strong>AI & Data</strong></td>
  </tr>
  <tr>
    <td>
      <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
      <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
      <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux">
      <img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white" alt="Socket.io">
      <img src="https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chart.js&logoColor=white" alt="Chart.js">
    </td>
    <td>
      <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
      <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
      <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
       <img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white" alt="Socket.io">
    </td>
    <td>
      <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" alt="TensorFlow">
      <img src="https://img.shields.io/badge/Keras-D00000?style=for-the-badge&logo=keras&logoColor=white" alt="Keras">
      <img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white" alt="OpenCV">
      <img src="https://img.shields.io/badge/YOLO-00FFFF?style=for-the-badge&logo=yolo&logoColor=black" alt="YOLO">
    </td>
  </tr>
</table>

---

## **Getting Started** 🚀

### **Prerequisites**

* Node.js
* npm (or yarn)
* MongoDB

### **Installation**

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/Dunking-Dunk/unfazed-coal.git](https://github.com/Dunking-Dunk/unfazed-coal.git)
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd unfazed-coal
    ```
3.  **Install server dependencies:**
    ```sh
    cd server
    npm install
    ```
4.  **Install client dependencies:**
    ```sh
    cd ../client
    npm install
    ```
5.  **Set up environment variables:**
    * Create a `.env` file in the `server` directory.
    * Add the necessary environment variables (e.g., `MONGO_URI`, `JWT_SECRET`).

---

## **Usage** 🎮

1.  **Start the backend server:**
    ```sh
    cd server
    npm start
    ```
2.  **Start the frontend client:**
    ```sh
    cd client
    npm start
    ```
Once the server and client are running, you can access the admin panel at `http://localhost:3000`.

---

## **Contributing** 🤝

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.

---

## **License** 📄

This project is licensed under the MIT License. See the [LICENSE](https://github.com/Dunking-Dunk/unfazed-coal/blob/main/LICENSE) file for details.
