import React, { useState } from "react";
import { Line, Chart } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js"; // Import the Chart class and registerables from the chart.js library

ChartJS.register(...registerables); 

const UserData = [
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
  const [userInputFemale, setUserInputFemale] = useState(UserData.map((data) => data.paramValue));
  const [userInputMale, setUserInputMale] = useState(UserData.map((data) => data.paramValue));

  const handleInputChange = (index, value, gender) => {
    if (gender === "female") {
      const newUserInput = [...userInputFemale];
      newUserInput[index] = value;
      setUserInputFemale(newUserInput);
    } else if (gender === "male") {
      const newUserInput = [...userInputMale];
      newUserInput[index] = value;
      setUserInputMale(newUserInput);
    }
  };

  const param = UserData.map((data) => data.param);

  const chartData = {
    labels: param,
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
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)", // Adjust shadow values here
        marginLeft: "20px", // Add left margin here
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
          {param.map((p, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <label htmlFor={`paramInput${selectedGender}${index}`} style={{ color: "#444" }}>{p} Puanı: </label>
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
