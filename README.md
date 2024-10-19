# 🌦️ Real-Time Weather Monitoring System

A real-time weather monitoring system built using **React** and **Node.js**. This app retrieves and processes weather data from the **OpenWeatherMap API**, displaying current weather conditions in real-time and updating data every 5 minutes. Users can switch between temperature units (Celsius or Fahrenheit) and visualize data using charts.

---

## ✨ Features
- **Real-time Weather Updates**: Weather data is fetched every 5 minutes for multiple cities.
- **Temperature Unit Conversion**: Users can switch between Celsius and Fahrenheit.
- **City Weather Details**: Displays temperature, feels-like temperature, weather condition, and last updated timestamp.
- **Chart Visualization**: Visualizes weather data trends using charts.

---

## 🛠️ Technologies Used
- **Frontend**: React.js, Axios, CSS (for basic styling)
- **Backend**: Node.js, Express.js
- **Data Source**: OpenWeatherMap API
- **Visualization**: Custom weather chart (using a chart library)

---

## 🚀 Running the Application

### Prerequisites
- **Node.js** and **npm** (to run the backend and frontend).
- **OpenWeatherMap API Key**: Get your free API key from [OpenWeatherMap](https://openweathermap.org/).

### Installation Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/chahatgupta1234/Real-Time-Weather-Monitoring.git
   cd weather-monitoring-app


## 🖥️ Backend Setup

1. Navigate to the `server` directory:

   ```bash
   cd server

Install dependencies:

   npm install
Create a .env file in the server folder and add your OpenWeatherMap API Key:

   OPENWEATHER_API_KEY=your-api-key-here
Start the backend server:

   npm start
🖥️ Frontend Setup
Navigate to the client directory:

   cd client
Install dependencies:

   npm install
Start the frontend development server:
   
   npm start
Open your browser and visit http://localhost:3000 to view the app.


📈 Data Flow and Functionality
Weather Data Fetching:

The backend fetches weather data every 5 minutes from the OpenWeatherMap API for multiple cities (like Delhi, Mumbai, Chennai, and more).
The frontend displays this data in real-time with options to toggle between Celsius and Fahrenheit.
Temperature Conversion:

Users can switch between Celsius and Fahrenheit, which will trigger a re-fetch of weather data using the selected unit.
Chart Visualization:

Weather data is visualized in charts to show trends for temperature and conditions over time.

For any questions or contributions, feel free to reach out at chahatnit@gmail.com
