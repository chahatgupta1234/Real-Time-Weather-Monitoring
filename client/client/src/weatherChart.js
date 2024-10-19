import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Register the required components from Chart.js
Chart.register(...registerables);

const WeatherChart = ({ weatherData }) => {
  // Prepare data for Chart.js
  const labels = weatherData.map(data => new Date(data.timestamp).toLocaleTimeString());
  const temperatures = weatherData.map(data => data.temp);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: temperatures,
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: 'Temperature (°C)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
    },
  };

  return (
    <div>
      <h2>Temperature Over Time</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default WeatherChart;
