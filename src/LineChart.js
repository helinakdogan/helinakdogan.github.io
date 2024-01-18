import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const UserData = [
  {
    param: "T",
    paramValue: 60,
  },
  {
    param: "?",
    paramValue: 70,

  },


];

const LineChart = ({ chartData }) => {
  return <Line data={chartData} />;
};

const MyChartComponent = () => {
  // Extracting years, userGains, and userLosts from UserData
  const param = UserData.map((data) => data.param);
  const paramValue = UserData.map((data) => data.paramValue);

  // Creating chartData object
  const chartData = {
    labels: param,
    datasets: [
      {
        label: "Kadın",
        data: paramValue,
        borderColor: "green",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  return <LineChart chartData={chartData} />;
};

export default MyChartComponent;