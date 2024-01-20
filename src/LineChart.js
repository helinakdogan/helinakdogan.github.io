import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

const initialUserData = [
  {
    param: "?",
    paramValue: 60,
  },
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
  {
    param: "2-D",
    paramValue: 60,
  },
  {
    param: "3-Hy",
    paramValue: 60,
  },
  {
    param: "4-Pd",
    paramValue: 60,
  },
  {
    param: "5-Mf",
    paramValue: 60,
  },
  {
    param: "6-Pa",
    paramValue: 60,
  },
  {
    param: "7-Pt",
    paramValue: 60,
  },
  {
    param: "8-Sc",
    paramValue: 60,
  },
  {
    param: "9-Ma",
    paramValue: 60,
  },
  {
    param: "Si",
    paramValue: 60,
  },
];

const LineChart = ({ chartData }) => {
  return <Line data={chartData} style={{ width: "850px", height: "1200px" }} />;
};

const MyChartComponent = () => {
  const [selectedGender, setSelectedGender] = useState("female");
  const [userInputFemale, setUserInputFemale] = useState(initialUserData.map((data) => data.paramValue));
  const [userInputMale, setUserInputMale] = useState(initialUserData.map((data) => data.paramValue));
  const [chartData, setChartData] = useState({
    labels: initialUserData.map((data) => data.param),
    datasets: [
      {
        label: "Kadın",
        data: userInputFemale,
        borderColor: "green",
        borderWidth: 2,
        fill: false,
        hidden: selectedGender !== "female",
      },
      {
        label: "Erkek",
        data: userInputMale,
        borderColor: "blue",
        borderWidth: 2,
        fill: false,
        hidden: selectedGender !== "male",
      },
    ],
  });

  const handleInputChange = (index, value, gender) => {
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue)) {
      return;
    }

    if (gender === "female") {
      const newUserInput = [...userInputFemale];
      newUserInput[index] = parsedValue;
      setUserInputFemale(newUserInput);
    } else if (gender === "male") {
      const newUserInput = [...userInputMale];
      newUserInput[index] = parsedValue;
      setUserInputMale(newUserInput);
    }

    const updatedUserData = initialUserData.map((data, dataIndex) => {
      let modifiedValue = data.paramValue;

      switch (parsedValue) {
        case 1:
          modifiedValue = 22.5;
          break;
        case 2:
          modifiedValue = 24.5;
          break;
        case 3:
          modifiedValue = 27.5;
          break;
        case 4:
          modifiedValue = 30;
          break;
        case 5:
          modifiedValue = 32;
          break;
        // Add more cases if needed for other values
        default:
          modifiedValue = parsedValue; // or any other default value
          break;
      }

      return { ...data, paramValue: modifiedValue };
    });

    const updatedChartData = {
      labels: updatedUserData.map((data) => data.param),
      datasets: [
        {
          label: "Kadın",
          data: updatedUserData.map((data, dataIndex) => (data.param === "K" ? data.paramValue : userInputFemale[dataIndex])),
          borderColor: "green",
          borderWidth: 2,
          fill: false,
          hidden: selectedGender !== "female",
        },
        {
          label: "Erkek",
          data: updatedUserData.map((data, dataIndex) => (data.param === "K" ? data.paramValue : userInputMale[dataIndex])),
          borderColor: "blue",
          borderWidth: 2,
          fill: false,
          hidden: selectedGender !== "male",
        },
      ],
    };

    setChartData(updatedChartData);
  };

  return (
    <div style={{ 
      display: "grid", 
      gridTemplateColumns: "1fr 2fr", 
      gap: "50px", 
      padding: "10px",
    }}>
      <div style={{ 
        border: "1px solid #ddd", 
        padding: "10px", 
        borderRadius: "10px", 
        width: "400px",
        background: "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
        marginLeft: "20px",
      }}>
        <h2 style={{ color: "#444", marginBottom: "10px", fontWeight: "bold" }}>MMPI Puan Tablosu</h2>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ color: "#444" }}>Cinsiyet Seçimi: </label>
          <select 
            value={selectedGender} 
            onChange={(e) => setSelectedGender(e.target.value)}
            style={{ 
              borderRadius: "5px", 
              padding: "5px", 
              border: "1px solid #ccc",
              color: "#444",
            }}
          >
            <option value="female">Kadın</option>
            <option value="male">Erkek</option>
          </select>
        </div>
        <div style={{ marginBottom: "10px" }}>
          {initialUserData.map((data, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <label htmlFor={`paramInput${selectedGender}${index}`} style={{ color: "#444" }}>{data.param} Puanı: </label>
              <input
                type="number"
                id={`paramInput${selectedGender}${index}`}
                value={selectedGender === "female" ? userInputFemale[index] : userInputMale[index]}
                onChange={(e) => handleInputChange(index, e.target.value, selectedGender)}
                style={{ width: "50px", borderRadius: "5px", padding: "5px", border: "1px solid #ccc" }}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 style={{ color: "#444", marginBottom: "10px", fontWeight: "bold" }}>MMPI Grafiği</h2>
        <LineChart chartData={chartData} />
      </div>
    </div>
  );
};

export default MyChartComponent;
