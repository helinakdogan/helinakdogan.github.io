import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

const initialUserData = [
  {
    param: "K",
    paramValue: 60,
  },
  {
    param: "L",
    paramValue: 60,
  },
];

const LineChart = ({ chartData }) => {
  return <Line data={chartData} style={{ width: "850px", height: "1200px" }} />;
};

const MyChartComponent = () => {
  const [kInput, setKInput] = useState(initialUserData.find((data) => data.param === "K").paramValue);
  const [lInput, setLInput] = useState(initialUserData.find((data) => data.param === "L").paramValue);

  const [chartData, setChartData] = useState({
    labels: initialUserData.map((data) => data.param),
    datasets: [
      {
        label: "MMPI Grafiği",
        data: [kInput, lInput],
        borderColor: "green",
        borderWidth: 2,
        fill: false,
        tension: 0.1,
      },
    ],
  });

  const handleKInputChange = (value) => {
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      setKInput(parsedValue);
      updateChartData(parsedValue, lInput);
    }
  };

  const handleLInputChange = (value) => {
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      setLInput(parsedValue);
      updateChartData(kInput, parsedValue);
    }
  };

  const updateChartData = (kValue, lValue) => {
    const updatedChartData = {
      labels: initialUserData.map((data) => data.param),
      datasets: [
        {
          label: "MMPI Grafiği",
          data: [kValue, lValue],
          borderColor: "green",
          borderWidth: 2,
          fill: false,
          tension: 0.1,
        },
      ],
    };
    setChartData(updatedChartData);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gap: "50px",
        padding: "10px",
      }}
    >
      <div
        style={{
          border: "1px solid #ddd",
          padding: "10px",
          borderRadius: "10px",
          width: "400px",
          background: "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
          marginLeft: "20px",
        }}
      >
        <h2 style={{ color: "#444", marginBottom: "10px", fontWeight: "bold" }}>
          MMPI Puan Tablosu
        </h2>
        <div style={{ marginBottom: "10px" }}>
          {initialUserData.map((data) => (
            <div key={data.param} style={{ marginBottom: "10px" }}>
              <label htmlFor={`paramInput${data.param}`} style={{ color: "#444" }}>
                {data.param} Puanı:{" "}
              </label>
              <input
                type="number"
                id={`paramInput${data.param}`}
                value={data.param === "K" ? kInput : lInput}
                onChange={(e) => (data.param === "K" ? handleKInputChange(e.target.value) : handleLInputChange(e.target.value))}
                style={{
                  width: "50px",
                  borderRadius: "5px",
                  padding: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 style={{ color: "#444", marginBottom: "10px", fontWeight: "bold" }}>
          MMPI Grafiği
        </h2>
        <LineChart chartData={chartData} />
      </div>
    </div>
  );
};

export default MyChartComponent;
