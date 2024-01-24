import React, { useState, useReducer } from "react";
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

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_L_INPUT":
      return { ...state, lInput: action.payload };
    case "UPDATE_F_INPUT":
      return { ...state, fInput: action.payload };
    case "UPDATE_K_INPUT":
      return { ...state, kInput: action.payload };
    case "UPDATE_HS_INPUT":
      return { ...state, hsInput: action.payload };
    case "UPDATE_L_INPUT_TEXT":
      return { ...state, lInputText: action.payload };
    case "UPDATE_F_INPUT_TEXT":
      return { ...state, fInputText: action.payload };
    case "UPDATE_K_INPUT_TEXT":
      return { ...state, kInputText: action.payload };
    case "UPDATE_HS_INPUT_TEXT":
      return { ...state, hsInputText: action.payload };
    case "UPDATE_CHART_DATA":
      return { ...state, chartData: action.payload };
    default:
      return state;
  }
};

const LineChart = ({ chartData }) => {
  return <Line data={chartData} style={{ width: "850px", height: "1200px" }} />;
};

const MyChartComponent = () => {
  const [state, dispatch] = useReducer(reducer, {
    lInput: initialUserData.find((data) => data.param === "L").paramValue,
    fInput: initialUserData.find((data) => data.param === "F").paramValue,
    kInput: initialUserData.find((data) => data.param === "K").paramValue,
    //initialKInput: initialUserData.find((data) => data.param === "K").paramValue,
    hsInput: initialUserData.find((data) => data.param === "1-Hs").paramValue,
    lInputText: String(initialUserData.find((data) => data.param === "L").paramValue),
    fInputText: String(initialUserData.find((data) => data.param === "F").paramValue),
    kInputText: String(initialUserData.find((data) => data.param === "K").paramValue),
    hsInputText: String(initialUserData.find((data) => data.param === "1-Hs").paramValue),
    chartData: {
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
    },
  });

  const handleLInputChange = (value) => {
    dispatch({ type: "UPDATE_L_INPUT_TEXT", payload: value });
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      dispatch({ type: "UPDATE_L_INPUT", payload: parsedValue });
      updateChartData(parsedValue, state.fInput, state.kInput, state.hsInput);
    }
  };

  const handleFInputChange = (value) => {
    dispatch({ type: "UPDATE_F_INPUT_TEXT", payload: value });
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      const updatedFValue = getUpdatedFValue(parsedValue);
      dispatch({ type: "UPDATE_F_INPUT", payload: updatedFValue });
      updateChartData(state.lInput, updatedFValue, state.kInput, state.hsInput);
    }
  };

  const handleKInputChange = (value) => {
    dispatch({ type: "UPDATE_K_INPUT_TEXT", payload: value });
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      const updatedKValue = getUpdatedKValue(parsedValue);
      dispatch({ type: "UPDATE_K_INPUT", payload: updatedKValue });
  
      // Güncellenen K değerine göre HS'i hesapla ve güncelle
      const updatedHsValue = getUpdatedHsValue(state.hsInput, parsedValue);
      dispatch({ type: "UPDATE_HS_INPUT", payload: updatedHsValue });
  
      // Grafik verilerini güncelle
      updateChartData(state.lInput, state.fInput, updatedKValue, updatedHsValue);
    }
  };
  
  
  
  
  const handleHsInputChange = (value) => {
    dispatch({ type: "UPDATE_HS_INPUT_TEXT", payload: value });
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      const updatedHsValue = getUpdatedHsValue(parsedValue, state.kInputText);
      dispatch({ type: "UPDATE_HS_INPUT", payload: updatedHsValue });
      updateChartData(state.lInput, state.fInput, state.kInput, updatedHsValue);
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

  const getUpdatedHsValue = (currentHsValue, kText) => {
    const kTextValue = parseFloat(kText);
    if (!isNaN(kTextValue)) {
      switch (kTextValue) {
        case 30:
        case 29:
          return currentHsValue + 15;
        case 28:
          return currentHsValue + 14;
        case 10:
          return currentHsValue + 5;
        default:
          return currentHsValue;
      }
    } else {
      return currentHsValue;
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
    dispatch({ type: "UPDATE_CHART_DATA", payload: updatedChartData });
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
                    ? state.lInputText
                    : data.param === "F"
                    ? state.fInputText
                    : data.param === "K"
                    ? state.kInputText
                    : data.param === "1-Hs"
                    ? state.hsInputText
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
        <LineChart chartData={state.chartData} />
      </div>
    </div>
  );
};

export default MyChartComponent;
