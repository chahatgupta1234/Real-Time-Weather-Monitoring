🌦️ Real-Time Weather Monitoring System
A real-time weather monitoring system built using React and Node.js. This app retrieves and processes weather data from the OpenWeatherMap API, displaying current weather conditions in real-time and updating data every 5 minutes. Users can switch between temperature units (Celsius or Fahrenheit) and visualize data using charts.

Features
Real-time Weather Updates: Weather data is fetched every 5 minutes for multiple cities.
Temperature Unit Conversion: Users can switch between Celsius and Fahrenheit.
City Weather Details: Displays temperature, feels-like temperature, weather condition, and last updated timestamp.
Chart Visualization: Visualizes weather data trends using charts.
🛠️ Technologies Used
Frontend: React.js, Axios, CSS (for basic styling)
Backend: Node.js, Express.js
Data Source: OpenWeatherMap API
Visualization: Custom weather chart
🚀 Running the Application
Prerequisites
Node.js and npm (to run the backend and frontend).
OpenWeatherMap API Key: Get your free API key from OpenWeatherMap.
Installation Steps
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/weather-monitoring-app.git
cd weather-monitoring-app
Set up the backend:

Navigate to the server directory:
bash
Copy code
cd server
Install dependencies:
bash
Copy code
npm install
Create a .env file in the server folder and add your OpenWeatherMap API Key:
bash
Copy code
OPENWEATHER_API_KEY=your-api-key-here
Start the backend server:
bash
Copy code
npm start
Set up the frontend:

Navigate to the client directory:
bash
Copy code
cd client
Install dependencies:
bash
Copy code
npm install
Start the frontend development server:
bash
Copy code
npm start
Open your browser and visit http://localhost:3000 to view the app.

📈 Data Flow and Functionality
Weather Data Fetching:

The backend fetches weather data every 5 minutes from the OpenWeatherMap API for multiple cities like Delhi, Mumbai, Chennai, and more.
The frontend displays this data in real-time, with options to toggle between Celsius and Fahrenheit.
Temperature Conversion:

Users can switch between Celsius and Fahrenheit, which will trigger a re-fetch of weather data using the chosen unit.
Chart Visualization:

Weather data is visualized in charts to show trends for temperature and conditions over time.
📂 Project Structure
bash
Copy code
weather-monitoring-app/
├── client/                    # Frontend (React.js)
│   ├── src/
│   ├── public/
│   ├── App.js                 # Main React component
│   ├── weatherChart.js         # Chart.js component for visualizing weather
│   └── App.css                # Styling for the frontend
│
├── server/                    # Backend (Node.js, Express.js)
│   ├── server.js              # Main server file
│   └── .env                   # Environment variables for OpenWeather API
│
└── README.md                  # This README file
📞 Contact
For any questions or contributions, feel free to reach out at [your-email@example.com].

