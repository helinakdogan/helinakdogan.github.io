import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

const initialUserData = [
  {
    param: "L",
    paramValue: 60,
  },
  {
    param: "F",
    paramValue: 60,
  },
  {
    param: "K",
    paramValue: 60,
  },
  {
    param: "1-Hs",
    paramValue: 60,
  },
];

const LineChart = ({ chartData }) => {
  return <Line data={chartData} style={{ width: "850px", height: "1200px" }} />;
};

const MyChartComponent = () => {
  const [lInput, setLInput] = useState(
    initialUserData.find((data) => data.param === "L").paramValue
  );
  const [fInput, setFInput] = useState(
    initialUserData.find((data) => data.param === "F").paramValue
  );
  const [kInput, setKInput] = useState(
    initialUserData.find((data) => data.param === "K").paramValue
  );
  const [initialKInput, setInitialKInput] = useState(
    initialUserData.find((data) => data.param === "K").paramValue
  );

  const [hsInput, setHsInput] = useState(
    initialUserData.find((data) => data.param === "1-Hs").paramValue
  );

  const [lInputText, setLInputText] = useState(
    String(initialUserData.find((data) => data.param === "L").paramValue)
  );
  const [fInputText, setFInputText] = useState(
    String(initialUserData.find((data) => data.param === "F").paramValue)
  );
  const [kInputText, setKInputText] = useState(
    String(initialUserData.find((data) => data.param === "K").paramValue)
  );
  const [hsInputText, setHsInputText] = useState(
    String(initialUserData.find((data) => data.param === "1-Hs").paramValue)
  );

  const [chartData, setChartData] = useState({
    labels: initialUserData.map((data) => data.param),
    datasets: [
      {
        label: "Kadın",
        data: [
          initialUserData.find((data) => data.param === "L").paramValue,
          initialUserData.find((data) => data.param === "F").paramValue,
          initialUserData.find((data) => data.param === "K").paramValue,
          initialUserData.find((data) => data.param === "1-Hs").paramValue,
        ],
        borderColor: "green",
        borderWidth: 2,
        fill: false,
        tension: 0.1,
      },
    ],
  });

  const handleLInputChange = (value) => {
    setLInputText(value); // Update local state for typed text
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      setLInput(parsedValue);
      updateChartData(parsedValue, fInput, kInput, hsInput);
    }
  };

  const handleFInputChange = (value) => {
    setFInputText(value); // Update local state for typed text
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      const updatedFValue = getUpdatedFValue(parsedValue);
      setFInput(updatedFValue);
      updateChartData(lInput, updatedFValue, kInput, hsInput);
    }
  };

  const handleKInputChange = (value) => {
    setKInputText(value); // Update local state for typed text
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      const updatedKValue = getUpdatedKValue(parsedValue);
      setKInput(updatedKValue);
      setInitialKInput(parsedValue); // Set the initial K value
      updateChartData(lInput, fInput, updatedKValue, hsInput);
    }
  };

  const handleHsInputChange = (value) => {
    setHsInputText(value); // Update local state for typed text
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      const updatedHsValue = getUpdatedHsValue(parsedValue, kInput);
      setHsInput(updatedHsValue);
      updateChartData(lInput, fInput, kInput, updatedHsValue);
    }
  };

  const getUpdatedFValue = (parsedValue) => {
    switch (parsedValue) {
      case 6:
        return 70;
      case 7:
        return 38.5;
      case 8:
        return 40;
      case 9:
        return 100;
      case 10:
        return 45.5;
      case 11:
        return 48.2;
      case 12:
        return 51.2;
      case 13:
        return 53.5;
      default:
        return 0;
    }
  };

  const getUpdatedKValue = (parsedValue) => {
    switch (parsedValue) {
      case 1:
        return 22.5;
      case 2:
        return 24.5;
      case 3:
        return 27.5;
      case 4:
        return 30;
      case 5:
        return 32;
      case 6:
        return 35;
      case 7:
        return 38.5;
      case 8:
        return 40;
      case 9:
        return 43.5;
      case 10:
        return 45.5;
     
      default:
        return 0; 
    }
    
  };

  const getUpdatedHsValue = (parsedValue) => {
    switch (initialKInput) {
      case 30:
      case 29:
        return parsedValue + 15;
      case 28:
        return parsedValue + 14;
      case 10:
        return parsedValue + 5;
      default:
        return 0;
    }
  };

  const updateChartData = (lValue, fValue, kValue, hsValue) => {
    const updatedChartData = {
      labels: initialUserData.map((data) => data.param),
      datasets: [
        {
          label: "Kadın",
          data: [lValue, fValue, kValue, hsValue],
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
              <label
                htmlFor={`paramInput${data.param}`}
                style={{ color: "#444" }}
              >
                {data.param} Puanı:{" "}
              </label>
              <input
                type="text"
                id={`paramInput${data.param}`}
                value={
                  data.param === "L"
                    ? lInputText
                    : data.param === "F"
                    ? fInputText
                    : data.param === "K"
                    ? kInputText
                    : data.param === "1-Hs"
                    ? hsInputText
                    : ""
                }
                onChange={(e) =>
                  data.param === "L"
                    ? handleLInputChange(e.target.value)
                    : data.param === "F"
                    ? handleFInputChange(e.target.value)
                    : data.param === "K"
                    ? handleKInputChange(e.target.value)
                    : data.param === "1-Hs"
                    ? handleHsInputChange(e.target.value)
                    : null
                }
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
