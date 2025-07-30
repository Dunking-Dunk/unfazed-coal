# Unfazed-Coal 🚚

<p align="center">
  <img src="https://img.shields.io/github/license/Dunking-Dunk/unfazed-coal" alt="License">
  <img src="https://img.shields.io/github/last-commit/Dunking-Dunk/unfazed-coal" alt="Last Commit">
  <img src="https://img.shields.io/github/stars/Dunking-Dunk/unfazed-coal?style=social" alt="GitHub Stars">
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white" alt="MongoDB">
</p>

<p align="center">
  <strong>A digital platform for multi-modal visibility of coal transportation, designed to bring transparency and efficiency to the logistics network.</strong>
</p>

## 📖 Overview

The coal industry faces significant inefficiencies in its transportation network, including a lack of transparency and timely information. This affects coal producers, transport companies, and end-users, making it difficult for them to optimize their logistics operations. 

**Unfazed-Coal** is a comprehensive digital platform that provides real-time visibility of coal transportation across various modes (trucks, trains, and ships), enabling stakeholders to monitor the entire journey from source to destination with enhanced safety and operational efficiency.

## ✨ Key Features

### 🔍 **Real-time Tracking & Monitoring**
- Live visibility tools for effective management of coal shipments across all transportation modes
- Real-time location tracking and status updates
- Comprehensive shipment lifecycle monitoring

### 🚀 **Logistics Optimization**
- Advanced route optimization algorithms
- Delay prediction and prevention systems
- Cost reduction through efficient resource allocation
- Streamlined operations management

### 🛡️ **Safety & Security**
- AI-powered driver behavior monitoring and analysis
- Integrated safety technologies for enhanced transportation security
- Real-time alerts for safety violations and incidents
- Comprehensive safety reporting and analytics

### 🤖 **AI-Powered Analytics**
- Machine learning algorithms for predictive analysis of delays
- Operational pattern recognition and optimization suggestions
- Automated anomaly detection in transportation processes
- Data-driven insights for decision making

### 🔗 **Multi-Modal Integration**
- Seamless tracking across trucks, trains, and ships
- Unified platform for all transportation modes
- IoT integration with telematic systems (TCU)
- Cross-platform data synchronization

## 🏗️ System Architecture

Unfazed-Coal utilizes a **microservices architecture** designed to handle large data flows without downtime, allowing the application to scale efficiently as demand grows.

### Core Components:

- **🖥️ Admin Panel**: Web-based dashboard (Next.js) for comprehensive monitoring and management
- **📱 Worker Mobile App**: React Native application for drivers and workers to receive real-time notifications and updates
- **⚙️ Backend Services**: Independent microservices handling specific functionalities:
  - Authentication and authorization
  - Real-time tracking and analytics
  - Notification systems
  - Data processing and storage
- **🌐 IoT Integration**: Direct integration with telematic control units (TCU) in vehicles and vessels

## 💻 Technology Stack

<table>
  <tr>
    <th align="center">Frontend</th>
    <th align="center">Backend</th>
    <th align="center">AI & Analytics</th>
    <th align="center">Mobile</th>
  </tr>
  <tr>
    <td align="center">
      <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"><br>
      <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js"><br>
      <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux"><br>
      <img src="https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chart.js&logoColor=white" alt="Chart.js">
    </td>
    <td align="center">
      <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"><br>
      <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js"><br>
      <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"><br>
      <img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white" alt="Socket.io">
    </td>
    <td align="center">
      <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" alt="TensorFlow"><br>
      <img src="https://img.shields.io/badge/Keras-D00000?style=for-the-badge&logo=keras&logoColor=white" alt="Keras"><br>
      <img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white" alt="OpenCV"><br>
      <img src="https://img.shields.io/badge/YOLO-00FFFF?style=for-the-badge&logo=yolo&logoColor=black" alt="YOLO">
    </td>
    <td align="center">
      <img src="https://img.shields.io/badge/React_Native-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Native"><br>
      <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo">
    </td>
  </tr>
</table>

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system:
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (v4.4 or higher)
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dunking-Dunk/unfazed-coal.git
   cd unfazed-coal
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables**
   
   Create a `.env` file in the `server` directory:
   ```env
   # Database
   MONGO_URI=mongodb://localhost:27017/unfazed-coal
   
   # Authentication
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRE=30d
   
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   
   # External APIs (if applicable)
   MAPS_API_KEY=your_maps_api_key
   ```

5. **Start the development servers**
   
   Terminal 1 (Backend):
   ```bash
   cd server
   npm run dev
   ```
   
   Terminal 2 (Frontend):
   ```bash
   cd client
   npm start
   ```

6. **Access the application**
   - Admin Panel: `http://localhost:3000`
   - API Server: `http://localhost:5000`

## 🎮 Usage

### Admin Dashboard
- Access comprehensive analytics and reporting
- Monitor real-time shipment status across all modes
- Manage user roles and permissions
- Configure system settings and notifications

### Mobile App
- Real-time notifications for drivers and workers
- Update shipment status and location
- Access route information and safety guidelines
- Report incidents and issues

### API Integration
- RESTful APIs for third-party integrations
- Real-time WebSocket connections for live updates
- Comprehensive documentation available at `/api/docs`

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style and conventions
- Write clear, concise commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 📋 Roadmap

- [ ] Enhanced AI analytics with advanced ML models
- [ ] Integration with additional IoT devices and sensors
- [ ] Mobile app for iOS and Android
- [ ] Advanced reporting and business intelligence features
- [ ] API marketplace for third-party integrations
- [ ] Blockchain integration for supply chain transparency

## 🐛 Issues & Support

If you encounter any issues or have questions:
- Check the [existing issues](https://github.com/Dunking-Dunk/unfazed-coal/issues)
- Create a [new issue](https://github.com/Dunking-Dunk/unfazed-coal/issues/new) with detailed information
- Contact our support team for enterprise inquiries

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to all contributors who have helped shape this project
- Special recognition to the coal industry professionals who provided domain expertise
- Open source libraries and frameworks that made this project possible

---

<p align="center">
  Made with ❤️ for the coal transportation industry
</p>

<p align="center">
  <a href="#top">⬆️ Back to Top</a>
</p>
