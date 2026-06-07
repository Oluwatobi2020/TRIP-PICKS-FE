import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ pieData, piesData }) => {

  const datas = {
    labels: [
      "Percentage Of Correct Questions Answered" + ": " + pieData,
      "Percentage Of  Incorrect Questions Answered" + ": " + piesData,
    ],
    datasets: [
      {
        data: [pieData, piesData],
        backgroundColor: ["rgb(217,37,80)", "blue"],
        borderColor: ["rgb(217,112,137)"],
        borderWidth: 1,
      },
    ],
  };
  const option = {
    responsive: true,
    maintainAspectRatio: true,

    plugins: {
      legend: {
        position: "right",
        textAlign: "left",
        color: "red",
        font: {
          size: "50px",
        },
      },
      title: {
        display: false,
        color: "black",
        font: {
          size: "205px",
        },
      },
      labels: {
        render: "label",
      },

    },
    borderWidth: 1,
  };
  return <Doughnut data={datas} options={option} />;
};

export default PieChart;
