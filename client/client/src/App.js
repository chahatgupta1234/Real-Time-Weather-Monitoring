import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherChart from './weatherChart';
import './App.css'; // Import the CSS file

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState(null);
  const [tempUnit, setTempUnit] = useState('C'); // State for temperature unit

  // Function to fetch weather data from the backend API
  const fetchWeatherData = async () => {
    try {
      console.log('Fetching weather data');
      const response = await axios.get(`http://localhost:5000/api/weather?unit=${tempUnit}`); // Pass the selected unit as a query parameter
      setWeatherData(response.data); // Set the weather data in state
      setError(null);
    } catch (err) {
      setError('Error fetching weather data.'); // Error handling
      console.error(err);
    }
  };

  // useEffect to fetch data when the component mounts and set up an interval for continuous updates
  useEffect(() => {
    fetchWeatherData(); // Fetch weather data initially
    const intervalId = setInterval(fetchWeatherData, 300000); // Fetch data every 5 minutes (300000 ms)

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [tempUnit]); // Include tempUnit in dependencies to refetch when it changes

  return (
    <div className="app">
      <h1 className="title">Real-Time Weather Monitoring</h1>
      {error && <p className="error">{error}</p>} {/* Display error if any */}
      
      {/* Dropdown for temperature unit selection */}
      <div className="unit-selection">
        <label htmlFor="tempUnit" className="label">Select Temperature Unit: </label>
        <select id="tempUnit" className="dropdown" value={tempUnit} onChange={(e) => setTempUnit(e.target.value)}>
          <option value="C">Celsius</option>
          <option value="F">Fahrenheit</option>
        </select>
      </div>
      
      <div className="weather-container">
        {weatherData.length > 0 ? (
          weatherData.map((data, index) => (
            <div key={index} className="weather-card">
              <h2 className="city-name">{data.city}</h2>
              <p>Temperature: {data.temp} °{tempUnit}</p>
              <p>Feels Like: {data.feels_like} °{tempUnit}</p>
              <p>Weather Condition: {data.condition}</p>
              <p>Last Updated: {new Date(data.timestamp).toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p className="no-data">No weather data available.</p>
        )}
      </div>
      <WeatherChart weatherData={weatherData} /> {/* Pass the weather data to the chart */}
    </div>
  );
};

export default App;
