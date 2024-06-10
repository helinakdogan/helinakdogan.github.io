import React, { useReducer, useRef } from "react";
import { Line } from "react-chartjs-2";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Chart as ChartJS, registerables } from "chart.js";
import { wQuestionValues, wLValues, wFValues, wKValues, wHsValues, wDValues, wHyValues, wPdValues, wMfValues, wPaValues, wPtValues, wScValues, wMaValues, wSiValues } from "../values/WomanValues";

ChartJS.register(...registerables);

// Initial data
const params = ["?", "L", "F", "K", "1-Hs", "2-D", "3-Hy", "4-Pd", "5-Mf", "6-Pa", "7-Pt", "8-Sc", "9-Ma", "0-Si"];
const initialUserData = params.map(param => ({ param, paramValue: 0 }));

// useReducer
const inputTypes = [ "QUESTION", "L","F","K","HS","D","HY","PD","MF","PA","PT","SC","MA","SI"];

const updateInput = (state, action, inputType) => {
  const inputKey = `${inputType.toLowerCase()}Input`;
  const inputTextKey = `${inputType.toLowerCase()}InputText`;

  if (action.type === `UPDATE_${inputType}_INPUT`) {
    return { ...state, [inputKey]: action.payload };
  } 
  if (action.type === `UPDATE_${inputType}_INPUT_TEXT`) {
    return { ...state, [inputTextKey]: action.payload };
  }
  
  return state;
};

const reducer = (state, action) => {
  for (const inputType of inputTypes) {
    state = updateInput(state, action, inputType);
  }

  if (action.type === "UPDATE_CHART_DATA") {
    return { ...state, chartData: action.payload };
  }

  return state;
};

//LineChart
const LineChart = ({ chartData }) => {
  const options = {
    scales: {
      y: {
        max: 120,
        min: 0,
        ticks: {
          stepSize: 10,
          callback: function (value) {
            return value % 10 === 0 ? value.toString() : ''; 
          },
        },
      },
    },
  };

  return (
    <Line
      data={chartData}
      options={options}
      style={{ width: "850px", height: "2000px", marginRight: "60px" }}
    />
  );
};
const WomanGraph = () => {
  const chartRef = useRef(null);
  const [state, dispatch] = useReducer(reducer, {
    // Input values
    questionInput: initialUserData.find((data) => data.param === "?").paramValue,
    lInput: initialUserData.find((data) => data.param === "L").paramValue,
    fInput: initialUserData.find((data) => data.param === "F").paramValue,
    kInput: initialUserData.find((data) => data.param === "K").paramValue,
    hsInput: initialUserData.find((data) => data.param === "1-Hs").paramValue,
    dInput: initialUserData.find((data) => data.param === "2-D").paramValue,
    hyInput: initialUserData.find((data) => data.param === "3-Hy").paramValue,
    pdInput: initialUserData.find((data) => data.param === "4-Pd").paramValue,
    mfInput: initialUserData.find((data) => data.param === "5-Mf").paramValue,
    paInput: initialUserData.find((data) => data.param === "6-Pa").paramValue,
    ptInput: initialUserData.find((data) => data.param === "7-Pt").paramValue,
    scInput: initialUserData.find((data) => data.param === "8-Sc").paramValue,
    maInput: initialUserData.find((data) => data.param === "9-Ma").paramValue,
    siInput: initialUserData.find((data) => data.param === "0-Si").paramValue,
    // Input text values
    questionInputText: String(
      initialUserData.find((data) => data.param === "?").paramValue
    ),
    lInputText: String(
      initialUserData.find((data) => data.param === "L").paramValue
    ),
    fInputText: String(
      initialUserData.find((data) => data.param === "F").paramValue
    ),
    kInputText: String(
      initialUserData.find((data) => data.param === "K").paramValue
    ),
    hsInputText: String(
      initialUserData.find((data) => data.param === "1-Hs").paramValue
    ),
    dInputText: String(
      initialUserData.find((data) => data.param === "2-D").paramValue
    ),
    hyInputText: String(
      initialUserData.find((data) => data.param === "3-Hy").paramValue
    ),
    pdInputText: String(
      initialUserData.find((data) => data.param === "4-Pd").paramValue
    ),
    mfInputText: String(
      initialUserData.find((data) => data.param === "5-Mf").paramValue
    ),
    paInputText: String(
      initialUserData.find((data) => data.param === "6-Pa").paramValue
    ),
    ptInputText: String(
      initialUserData.find((data) => data.param === "7-Pt").paramValue
    ),
    scInputText: String(
      initialUserData.find((data) => data.param === "8-Sc").paramValue
    ),
    maInputText: String(
      initialUserData.find((data) => data.param === "9-Ma").paramValue
    ),
    siInputText: String(
      initialUserData.find((data) => data.param === "0-Si").paramValue
    ),

    chartData: {
      labels: initialUserData.map((data) => data.param),
      datasets: [
        {
          label: "MMPI Hesaplanmış Sonuçlar Grafiği (Kadın)",
          data: [
            initialUserData.find((data) => data.param === "?").paramValue,
            initialUserData.find((data) => data.param === "L").paramValue,
            initialUserData.find((data) => data.param === "F").paramValue,
            initialUserData.find((data) => data.param === "K").paramValue,
            initialUserData.find((data) => data.param === "1-Hs").paramValue,
            initialUserData.find((data) => data.param === "2-D").paramValue,
            initialUserData.find((data) => data.param === "3-Hy").paramValue,
            initialUserData.find((data) => data.param === "4-Pd").paramValue,
            initialUserData.find((data) => data.param === "5-Mf").paramValue,
            initialUserData.find((data) => data.param === "6-Pa").paramValue,
            initialUserData.find((data) => data.param === "7-Pt").paramValue,
            initialUserData.find((data) => data.param === "8-Sc").paramValue,
            initialUserData.find((data) => data.param === "9-Ma").paramValue,
            initialUserData.find((data) => data.param === "0-Si").paramValue,
          ],
          borderColor: "#5c5470",
          borderWidth: 2,
          fill: false,
          tension: 0.1,
        },
      ],
    },
  });

  // Handlechange
  const handleQuestionInputChange = (value) => {
    dispatch({ type: "UPDATE_QUESTION_INPUT_TEXT", payload: value });
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      const updatedQuestionValue = getUpdatedQuestionValue(parsedValue);
      dispatch({
        type: "UPDATE_QUESTION_INPUT",
        payload: updatedQuestionValue,
      });
      updateChartData(
        updatedQuestionValue,
        state.lInput,
        state.fInput,
        state.kInput,
        state.hsInput,
        state.dInput,
        state.hyInput,
        state.pdInput,
        state.mfInput,
        state.paInput,
        state.ptInput,
        state.scInput,
        state.maInput,
        state.siInput
      );
    }
  };

  const handleLInputChange = (value) => {
    dispatch({ type: "UPDATE_L_INPUT_TEXT", payload: value });
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      const updatedLValue = getUpdatedLValue(parsedValue);
      dispatch({ type: "UPDATE_L_INPUT", payload: updatedLValue });
      updateChartData(
        state.questionInput,
        updatedLValue,
        state.fInput,
        state.kInput,
        state.hsInput,
        state.dInput,
        state.hyInput,
        state.pdInput,
        state.mfInput,
        state.paInput,
        state.ptInput,
        state.scInput,
        state.maInput,
        state.siInput
      );
    }
  };

  const handleFInputChange = (value) => {
    dispatch({ type: "UPDATE_F_INPUT_TEXT", payload: value });
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      const updatedFValue = getUpdatedFValue(parsedValue);
      dispatch({ type: "UPDATE_F_INPUT", payload: updatedFValue });
      updateChartData(
        state.questionInput,
        state.lInput,
        updatedFValue,
        state.kInput,
        state.hsInput,
        state.dInput,
        state.hyInput,
        state.pdInput,
        state.mfInput,
        state.paInput,
        state.ptInput,
        state.scInput,
        state.maInput,
        state.siInput
      );
    }
  };

  const handleKInputChange = (value) => {
    dispatch({ type: "UPDATE_K_INPUT_TEXT", payload: value });
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      const updatedKValue = getUpdatedKValue(parsedValue);
      dispatch({ type: "UPDATE_K_INPUT", payload: updatedKValue });

      // Güncellenen K değerine göre HS'i hesapla ve güncelle
      const updatedHsValue = getUpdatedHsValue(value, state.hsInputText);
      dispatch({ type: "UPDATE_HS_INPUT", payload: updatedHsValue });
    
      const updatedPdValue = getUpdatedPdValue(value, state.pdInputText);
      dispatch({ type: "UPDATE_PD_INPUT", payload: updatedPdValue });

      const updatedPtValue = getUpdatedPtValue(value, state.ptInputText);
      dispatch({ type: "UPDATE_PT_INPUT", payload: updatedPtValue });
     
      const updatedScValue = getUpdatedScValue(value, state.scInputText);
      dispatch({ type: "UPDATE_SC_INPUT", payload: updatedScValue });
  
      const updatedMaValue = getUpdatedMaValue(value, state.maInputText);
      dispatch({ type: "UPDATE_MA_INPUT", payload: updatedMaValue });

      // Grafik verilerini güncelle
      updateChartData(
        state.questionInput,
        state.lInput,
        state.fInput,
        updatedKValue,
        updatedHsValue,
        state.dInput,
        state.hyInput,
        updatedPdValue,
        state.mfInput,
        state.paInput,
        updatedPtValue,
        updatedScValue,
        updatedMaValue,
        state.siInput
      );
    }
  };

  const handleHsInputChange = (value) => {
    dispatch({ type: "UPDATE_HS_INPUT_TEXT", payload: value });
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      const updatedHsValue = getUpdatedHsValue(state.kInputText, value);
      dispatch({ type: "UPDATE_HS_INPUT", payload: updatedHsValue });
      updateChartData(
        state.questionInput,
        state.lInput,
        state.fInput,
        state.kInput,
        updatedHsValue,
        state.dInput,
        state.hyInput,
        state.pdInput,
        state.mfInput,
        state.paInput,
        state.ptInput,
        state.scInput,
        state.maInput,
        state.siInput
      );
    }
  };

  const handleDInputChange = (value) => {
    dispatch({ type: "UPDATE_D_INPUT_TEXT", payload: value });
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      const updatedDValue = getUpdatedDValue(parsedValue);
      dispatch({
        type: "UPDATE_D_INPUT",
        payload: updatedDValue,
      });
      updateChartData(
        state.questionInput,
        state.lInput,
        state.fInput,
        state.kInput,
        state.hsInput,
        updatedDValue,
        state.hyInput,
        state.pdInput,
        state.mfInput,
        state.paInput,
        state.ptInput,
        state.scInput,
        state.maInput,
        state.siInput
      );
    }
  };

  const handleHyInputChange = (value) => {
    dispatch({ type: "UPDATE_HY_INPUT_TEXT", payload: value });
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      const updatedHyValue = getUpdatedHyValue(parsedValue);
      dispatch({
        type: "UPDATE_HY_INPUT",
        payload: updatedHyValue,
      });
      updateChartData(
        state.questionInput,
        state.lInput,
        state.fInput,
        state.kInput,
        state.hsInput,
        state.dInput,
        updatedHyValue,
        state.pdInput,
        state.mfInput,
        state.paInput,
        state.ptInput,
        state.scInput,
        state.maInput,
        state.siInput
      );
    }
  };

  const handlePdInputChange = (value) => {
    dispatch({ type: "UPDATE_PD_INPUT_TEXT", payload: value });
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      const updatedPdValue = getUpdatedPdValue(state.kInputText, value);
      dispatch({ type: "UPDATE_PD_INPUT", payload: updatedPdValue });
      updateChartData(
        state.questionInput,
        state.lInput,
        state.fInput,
        state.kInput,
        state.hsInput,
        state.dInput,
        state.hyInput,
        updatedPdValue,
        state.mfInput,
        state.paInput,
        state.ptInput,
        state.scInput,
        state.maInput,
        state.siInput
      );
    }
  };

  const handleMfInputChange = (value) => {
    dispatch({ type: "UPDATE_MF_INPUT_TEXT", payload: value });
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      const updatedMfValue = getUpdatedMfValue(parsedValue);
      dispatch({
        type: "UPDATE_MF_INPUT",
        payload: updatedMfValue,
      });
      updateChartData(
        state.questionInput,
        state.lInput,
        state.fInput,
        state.kInput,
        state.hsInput,
        state.dInput,
        state.hyInput,
        state.pdInput,
        updatedMfValue,
        state.paInput,
        state.ptInput,
        state.scInput,
        state.maInput,
        state.siInput
      );
    }
  };

  const handlePaInputChange = (value) => {
    dispatch({ type: "UPDATE_PA_INPUT_TEXT", payload: value });
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      const updatedPaValue = getUpdatedPaValue(parsedValue);
      dispatch({
        type: "UPDATE_PA_INPUT",
        payload: updatedPaValue,
      });
      updateChartData(
        state.questionInput,
        state.lInput,
        state.fInput,
        state.kInput,
        state.hsInput,
        state.dInput,
        state.hyInput,
        state.pdInput,
        state.mfInput,
        updatedPaValue,
        state.ptInput,
        state.scInput,
        state.maInput,
        state.siInput
      );
    }
  };

  const handlePtInputChange = (value) => {
    dispatch({ type: "UPDATE_PT_INPUT_TEXT", payload: value });
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      const updatedPtValue = getUpdatedPtValue(state.kInputText, value);
      dispatch({ type: "UPDATE_PT_INPUT", payload: updatedPtValue });
      updateChartData(
        state.questionInput,
        state.lInput,
        state.fInput,
        state.kInput,
        state.hsInput,
        state.dInput,
        state.hyInput,
        state.pdInput,
        state.mfInput,
        state.paInput,
        updatedPtValue,
        state.scInput,
        state.maInput,
        state.siInput
      );
    }
  };

  const handleScInputChange = (value) => {
    dispatch({ type: "UPDATE_SC_INPUT_TEXT", payload: value });
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      const updatedScValue = getUpdatedScValue(state.kInputText, value);
      dispatch({ type: "UPDATE_SC_INPUT", payload: updatedScValue });
      updateChartData(
        state.questionInput,
        state.lInput,
        state.fInput,
        state.kInput,
        state.hsInput,
        state.dInput,
        state.hyInput,
        state.pdInput,
        state.mfInput,
        state.paInput,
        state.ptInput,
        updatedScValue,
        state.maInput,
        state.siInput
      );
    }
  };

  const handleMaInputChange = (value) => {
    dispatch({ type: "UPDATE_MA_INPUT_TEXT", payload: value });
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      const updatedMaValue = getUpdatedMaValue(state.kInputText, value);
      dispatch({ type: "UPDATE_MA_INPUT", payload: updatedMaValue });
      updateChartData(
        state.questionInput,
        state.lInput,
        state.fInput,
        state.kInput,
        state.hsInput,
        state.dInput,
        state.hyInput,
        state.pdInput,
        state.mfInput,
        state.paInput,
        state.ptInput,
        state.scInput,
        updatedMaValue,
        state.siInput
      );
    }
  };

  const handleSiInputChange = (value) => {
    dispatch({ type: "UPDATE_SI_INPUT_TEXT", payload: value });
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      const updatedSiValue = getUpdatedSiValue(parsedValue);
      dispatch({
        type: "UPDATE_SI_INPUT",
        payload: updatedSiValue,
      });
      updateChartData(
        state.questionInput,
        state.lInput,
        state.fInput,
        state.kInput,
        state.hsInput,
        state.dInput,
        state.hyInput,
        state.pdInput,
        state.mfInput,
        state.paInput,
        state.ptInput,
        state.scInput,
        state.maInput,
        updatedSiValue
      );
    }
  };

  // update functions
  const getUpdatedQuestionValue = (parsedValue) => {
    return wQuestionValues[parsedValue] || 0;
  };
  
  const getUpdatedLValue = (parsedValue) => {
    return wLValues[parsedValue] || 0;
  };
  
  const getUpdatedFValue = (parsedValue) => {
    return wFValues[parsedValue] || 0;
  };
  
  const getUpdatedKValue = (parsedValue) => {
    return wKValues[parsedValue] || 0;
  };
  
  const mapUpdatedHsToGraphValue = (updatedHsValue) => {
    return wHsValues[updatedHsValue] || 0;
  };
  
  const getUpdatedHsValue = (kText, hsText) => {
    const kTextValue = parseFloat(kText);
    const hsTextValue = parseFloat(hsText);
  
    if (!isNaN(kTextValue) && !isNaN(hsTextValue)) {
      const step = Math.floor((kTextValue - 1) / 2) + 1;
      const updatedHsValue = hsTextValue + step;
  
      return mapUpdatedHsToGraphValue(updatedHsValue);
    } else {
      return 0;
    }
  };
  
  const getUpdatedDValue = (parsedValue) => {
    return wDValues[parsedValue] || 0;
  };
  
  const getUpdatedHyValue = (parsedValue) => {
    return wHyValues[parsedValue] || parsedValue;
  };
  
  const mapUpdatedPdToGraphValue = (updatedPdValue) => {
    return wPdValues[updatedPdValue] || updatedPdValue;
  };

  const getUpdatedPdValue = (kText, pdText) => {
    const kTextValue = parseFloat(kText);
    const pdTextValue = parseFloat(pdText);
  
    const offsets = {
      29: 12, 28: 11, 27: 11, 26: 10, 25: 10, 24: 10, 23: 9, 22: 9,
      21: 8, 20: 8, 19: 8, 18: 7, 17: 7, 16: 6, 15: 6, 14: 6,
      13: 5, 12: 5, 11: 4, 10: 4, 9: 4, 8: 3, 7: 3, 6: 2, 5: 2,
      4: 2, 3: 2, 2: 1, 1: 1
    };
  
    const updatedPdValue = pdTextValue + (offsets[kTextValue] || 0);
    return !isNaN(kTextValue) && !isNaN(pdTextValue) ? mapUpdatedPdToGraphValue(updatedPdValue) : 0;
  };   

  const getUpdatedMfValue = (parsedValue) => {
    return wMfValues[parsedValue] || parsedValue;
  };
  
  const getUpdatedPaValue = (parsedValue) => {
    return wPaValues[parsedValue] || parsedValue;
  };

  const mapUpdatedPtToGraphValue = (updatedPtValue) => {
    return wPtValues[  updatedPtValue] || updatedPtValue;
  };

  const getUpdatedPtValue = (kText, ptText) => {
    const kTextValue = parseFloat(kText);
    const ptTextValue = parseFloat(ptText);

    if (!isNaN(kTextValue) && !isNaN(ptTextValue)) {
      let updatedPtValue;
      updatedPtValue = ptTextValue + kTextValue;

      const mappedValue = mapUpdatedPtToGraphValue(updatedPtValue);
      return mappedValue;
    } else {
      return 0;
    }
  };

  const mapUpdatedScToGraphValue = (updatedScValue) => {
    return wScValues[  updatedScValue] || updatedScValue;
  };

  const getUpdatedScValue = (kText, scText) => {
    const kTextValue = parseFloat(kText);
    const scTextValue = parseFloat(scText);

    if (!isNaN(kTextValue) && !isNaN(scTextValue)) {
      let updatedScValue;
      updatedScValue = scTextValue + kTextValue;

      const mappedValue = mapUpdatedScToGraphValue(updatedScValue);
      return mappedValue;
    } else {
      return 0;
    }
  };

  const mapUpdatedMaToGraphValue = (updatedMaValue) => {
    return wMaValues[  updatedMaValue] || updatedMaValue;
  };

  const getUpdatedMaValue = (kText, maText) => {
    const kTextValue = parseFloat(kText);
    const maTextValue = parseFloat(maText);
  
    if (isNaN(kTextValue) || isNaN(maTextValue)) {
      return 0;
    }
  
    const kValues = [30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const updatedMaValue = maTextValue + Math.min(6, Math.floor((kValues.indexOf(Math.floor(kTextValue)) + 1) / 3));
    
    return mapUpdatedMaToGraphValue(updatedMaValue);
  };
  
  const getUpdatedSiValue = (parsedValue) => {
    return wSiValues[  parsedValue] || parsedValue;
  };

  const updateChartData = (
    questionValue,
    lValue,
    fValue,
    kValue,
    hsValue,
    dValue,
    hyValue,
    pdValue,
    mfValue,
    paValue,
    ptValue,
    scValue,
    maValue,
    siValue
  ) => {
    const updatedChartData = {
      labels: initialUserData.map((data) => data.param),
      datasets: [
        {
          label: "MMPI Hesaplanmış Sonuçlar Grafiği (Kadın)",
          data: [
            questionValue,
            lValue,
            fValue,
            kValue,
            hsValue,
            dValue,
            hyValue,
            pdValue,
            mfValue,
            paValue,
            ptValue,
            scValue,
            maValue,
            siValue,
          ],
          borderColor: "#5c5470",
          borderWidth: 2,
          fill: false,
          tension: 0.1,
        },
      ],
    };
    dispatch({ type: "UPDATE_CHART_DATA", payload: updatedChartData });
  };

  const handleDownloadPdf = () => {
    const input = chartRef.current;

    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("landscape");
        pdf.addImage(imgData, "PNG", 10, 10);
        pdf.save("chart.pdf");
      })
      .catch((err) => console.error("Error generating PDF:", err));
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gap: "50px",
        padding: "10px",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
      }}
    >
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: "10px",
        width: "300px",
        background: "linear-gradient(to top, #79a8a9 0%, #79a8a9 100%)",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
        marginLeft: "70px", 
        textAlign: "center", 
      }}
    >
      <h2 style={{ color: "white", marginBottom: "20px", fontWeight: "bold", fontFamily: "Didot, serif", fontSize: "21px" }}>MMPI Ham Puan Tablosu</h2>
    <div style={{ marginBottom: "10px" }}>
      {initialUserData.map((data) => (
    <div
      key={data.param}
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
      }}
    >
      <label
        htmlFor={`paramInput${data.param}`}
        style={{
          color: "white",
          fontFamily: "Didot, serif",
          position: "relative",
          left: "70px",
        }}
      >
        {data.param} Ham Puanı:
      </label>
      <input
        type="text"
        id={`paramInput${data.param}`}
        value={
          data.param === "?"
            ? state.questionInputText
            : data.param === "L"
            ? state.lInputText
            : data.param === "F"
            ? state.fInputText
            : data.param === "K"
            ? state.kInputText
            : data.param === "1-Hs"
            ? state.hsInputText
            : data.param === "2-D"
            ? state.dInputText
            : data.param === "3-Hy"
            ? state.hyInputText
            : data.param === "4-Pd"
            ? state.pdInputText
            : data.param === "5-Mf"
            ? state.mfInputText
            : data.param === "6-Pa"
            ? state.paInputText
            : data.param === "7-Pt"
            ? state.ptInputText
            : data.param === "8-Sc"
            ? state.scInputText
            : data.param === "9-Ma"
            ? state.maInputText
            : data.param === "0-Si"
            ? state.siInputText
            : ""
        }
        onChange={(e) =>
          data.param === "?"
            ? handleQuestionInputChange(e.target.value)
            : data.param === "L"
            ? handleLInputChange(e.target.value)
            : data.param === "F"
            ? handleFInputChange(e.target.value)
            : data.param === "K"
            ? handleKInputChange(e.target.value)
            : data.param === "1-Hs"
            ? handleHsInputChange(e.target.value)
            : data.param === "2-D"
            ? handleDInputChange(e.target.value)
            : data.param === "3-Hy"
            ? handleHyInputChange(e.target.value)
            : data.param === "4-Pd"
            ? handlePdInputChange(e.target.value)
            : data.param === "5-Mf"
            ? handleMfInputChange(e.target.value)
            : data.param === "6-Pa"
            ? handlePaInputChange(e.target.value)
            : data.param === "7-Pt"
            ? handlePtInputChange(e.target.value)
            : data.param === "8-Sc"
            ? handleScInputChange(e.target.value)
            : data.param === "9-Ma"
            ? handleMaInputChange(e.target.value)
            : data.param === "0-Si"
            ? handleSiInputChange(e.target.value)
            : null
        }
        style={{
          width: "35px",
          borderRadius: "5px",
          padding: "3px",
          border: "1px solid #ccc",
          position: "relative",
          right: "70px",
        }}
      />
    </div>
  ))}
</div>
  </div>
    <div ref={chartRef}>
      <LineChart chartData={state.chartData} />
    </div>
    <button onClick={handleDownloadPdf}>Grafiği PDF olarak indir</button>
  </div>
  );  
};

export default WomanGraph;
