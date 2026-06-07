import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StackedBarChart = ({ chartData }) => {
  const optiones = {
    plugins: {
      title: {
        display: true,
        text: 'Result Percentage',

      },
      legend: {
        position: "left",
        textAlign: "left",
        font: {
          size: 25,
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: false,
       
      },
      y: {
        stacked: false,
        min: 0,
        max: 100,
        ticks: {
          beginAtZero: true,
        
        },
      },
    },
  };
  return <Bar options={optiones} data={chartData} />;
};

export default StackedBarChart;
