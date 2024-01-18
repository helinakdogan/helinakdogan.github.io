import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const UserData = [
  {
    param_T: 2016,
    param_qMark: 80000,
    param_L: 823,
    param_F: 823,
  },
  {
    param_T: 2016,
    param_qMark: 70000,
    param_L: 823,
    param_F: 823,
  },
  {
    param_T: 2016,
    param_qMark: 80000,
    param_L: 823,
    param_F: 823,
  },
  {
    param_T: 2016,
    param_qMark: 80000,
    param_L: 823,
    param_F: 823,
  },
  {
    param_T: 2016,
    param_qMark: 80000,
    param_L: 823,
    param_F: 823,
  },
];

const LineChart = ({ chartData }) => {
  return <Line data={chartData} />;
};

const MyChartComponent = () => {
  // Extracting years, userGains, and userLosts from UserData
  const params_T = UserData.map((data) => data.param_T);
  const params_qMark = UserData.map((data) => data.param_qMark);
  const params_L = UserData.map((data) => data.param_L);

  // Creating chartData object
  const chartData = {
    labels: params_T,
    datasets: [
      {
        label: "Kadın",
        data: params_qMark,
        borderColor: "green",
        borderWidth: 2,
        fill: false,
      },
      {
        label: "Erkek",
        data: params_qMark,
        borderColor: "red",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  return <LineChart chartData={chartData} />;
};

export default MyChartComponent;