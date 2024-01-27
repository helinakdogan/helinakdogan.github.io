import React, { useReducer } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

const initialUserData = [
  // 2 3 5 6 si
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
    param: "0-Si",
    paramValue: 60,
  },
];


//useReducer
const inputTypes = [
  "QUESTION_MARK",
  "L",
  "F",
  "K",
  "HS",
  "D",
  "HY",
  "PD",
  "MF",
  "PA",
  "PT",
  "SC",
  "MA",
  "SI"
];
const updateInput = (state, action, inputType) => {
  const inputKey = `${inputType.toLowerCase()}Input`;
  const inputTextKey = `${inputType.toLowerCase()}InputText`;

  switch (action.type) {
    case `UPDATE_${inputType}_INPUT`:
      return { ...state, [inputKey]: action.payload };
    case `UPDATE_${inputType}_INPUT_TEXT`:
      return { ...state, [inputTextKey]: action.payload };
    default:
      return state;
  }
};
const reducer = (state, action) => {
  for (const inputType of inputTypes) {
    const updatedState = updateInput(state, action, inputType);
    if (updatedState !== state) {
      return updatedState;
    }
  }

  switch (action.type) {
    case "UPDATE_CHART_DATA":
      return { ...state, chartData: action.payload };
    default:
      return state;
  }
};

//LineChart
const LineChart = ({ chartData }) => {
  const options = {
    scales: {
      y: {
        max: 120,
        min: 0,
      },
    },
  };
  return (
    <Line
      data={chartData}
      options={options}
      style={{ width: "850px", height: "2000px", marginRight: "60px",}}
    />
  );
};

const MyChartComponent = () => {
  const [state, dispatch] = useReducer(reducer, {
    // Input values
    questionMarkInput: initialUserData.find((data) => data.param === "?")
      .paramValue,
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
    questionMarkInputText: String(
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
  const handleQuestionMarkInputChange = (value) => {
    dispatch({ type: "UPDATE_QUESTION_MARK_INPUT_TEXT", payload: value });
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      const updatedQuestionMarkValue = getUpdatedQuestionMarkValue(parsedValue);
      dispatch({
        type: "UPDATE_QUESTION_MARK_INPUT",
        payload: updatedQuestionMarkValue,
      });
      updateChartData(
        updatedQuestionMarkValue,
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
        state.questionMarkInput,
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
        state.questionMarkInput,
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
        state.questionMarkInput,
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
        state.questionMarkInput,
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
        state.questionMarkInput,
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
        state.questionMarkInput,
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
        state.questionMarkInput,
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
        state.questionMarkInput,
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
        state.questionMarkInput,
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
        state.questionMarkInput,
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
        state.questionMarkInput,
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
        state.questionMarkInput,
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
        state.questionMarkInput,
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
  const getUpdatedQuestionMarkValue = (parsedValue) => {
    const values = {
      30: 50, 40: 53, 50: 56.1, 60: 58, 70: 61, 80: 63.8, 90: 66, 100: 68.7,
      110: 72, 120: 76, 130: 80
    };
  
    return values[parsedValue] || parsedValue;
  };
  
  const getUpdatedLValue = (parsedValue) => {
    const values = {
      1: 28.2, 2: 36.3, 3: 38.5, 4: 40, 5: 42.4, 6: 50, 7: 55.5, 8: 59.3,
      9: 64, 10: 68.1, 11: 73, 12: 77, 13: 82, 14: 86.1, 15: 90
    };
  
    return values[parsedValue] || 0;
  };
  
  const getUpdatedFValue = (parsedValue) => {
    const values = {
      1: 32.5, 2: 36.2, 3: 38.1, 4: 40, 5: 42.2, 6: 44.1, 7: 45.5, 8: 47.3,
      9: 49.4, 10: 51.2, 11: 53.2, 12: 55.1, 13: 57.2, 14: 59, 15: 61.1,
      16: 63.1, 17: 65.4, 18: 66.1, 19: 68.1, 20: 70, 21: 72.1, 22: 74.1,
      23: 76.1, 24: 78.1, 25: 80, 26: 82.1, 27: 84.1, 28: 86.1, 29: 87.1,
      30: 89, 31: 91, 32: 93.1, 33: 95.2, 34: 97, 35: 99
    };
  
    return values[parsedValue] || 0;
  };
  
  const getUpdatedKValue = (parsedValue) => {
    const values = {
      1: 22.5, 2: 24.5, 3: 27.5, 4: 30, 5: 32, 6: 35, 7: 38.5, 8: 40,
      9: 43.5, 10: 45.5, 11: 48.2, 12: 51.2, 13: 53.5, 14: 56.6, 15: 58.3,
      16: 61.2, 17: 64.5, 18: 66.5, 19: 69, 20: 71.9, 21: 74.1, 22: 77.3,
      23: 79.2, 24: 82.2, 25: 84.1, 26: 87, 27: 90, 28: 92, 29: 95.4,
      30: 98.1
    };
  
    return values[parsedValue] || 0;
  };
  

  const mapUpdatedHsToGraphValue = (updatedHsValue) => {
    const values = {
      2: 21.2, 3: 23.2, 4: 25.5, 5: 27.2, 6: 29, 7: 31.1, 8: 33.4, 9: 35.5,
      10: 37.1, 11: 39.1, 12: 41.2, 13: 43.2, 14: 45.5, 15: 48.4, 16: 50, 17: 52.2,
      18: 54.2, 19: 56.3, 20: 58.1, 21: 60, 22: 62, 23: 64.1, 24: 66, 25: 68,
      26: 70, 27: 72.2, 28: 74, 29: 76, 30: 78, 31: 78, 32: 83.1, 33: 85.2
    };
  
    return values[updatedHsValue] || 0;
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
    const values = {
      7: 21, 8: 23, 9: 25.2, 10: 26.1, 11: 29, 12: 30, 13: 32, 14: 33, 15: 35,
      16: 37.2, 17: 39, 18: 40, 19: 42, 20: 44.2, 21: 45.3, 22: 47.1, 23: 49.2,
      24: 51, 25: 52, 26: 54.2, 27: 56.2, 28: 58.5, 29: 59.2, 30: 61, 31: 62.9,
      32: 65.2, 33: 66.2, 34: 68.5, 35: 70, 36: 72.5, 37: 74.2, 38: 75.2, 39: 77.5,
      40: 79.1, 41: 80, 42: 82, 43: 84.5, 44: 85.2, 45: 87, 46: 89.9, 47: 91.2,
      48: 92, 49: 94, 50: 96.2, 51: 98, 52: 99, 53: 101, 54: 103.6, 55: 105.2,
      56: 106.2, 57: 108.2, 58: 110, 59: 112, 60: 113.2
    };
  
    return values[parsedValue] || 0;
  };
  
  const getUpdatedHyValue = (parsedValue) => {
    const values = {
      7: 21.1, 8: 23.2, 9: 25.1, 10: 27.2, 11: 30, 12: 31, 13: 33, 14: 34.5,
      15: 36.5, 16: 38.1, 17: 40, 18: 42, 19: 44.2, 20: 46.6, 21: 48.5,
      22: 49, 23: 51, 24: 53.3, 25: 55.5, 26: 57.4, 27: 59, 28: 61,
      29: 62, 30: 64, 31: 66.2, 32: 68.2, 33: 70, 34: 72.1, 35: 74.2,
      36: 76.4, 37: 77.3, 38: 79.5, 39: 81, 40: 83, 41: 85.2, 42: 87,
      43: 89, 44: 91, 45: 94.3, 46: 93.8, 47: 96, 48: 98, 49: 100,
      50: 102, 51: 104, 52: 106, 53: 107.2, 54: 109, 55: 111
    };
  
    return values[parsedValue] || parsedValue;
  };
  
  const mapUpdatedPdToGraphValue = (updatedPdValue) => {
    const values = {
      9: 21, 10: 23, 11: 25, 12: 27, 13: 29, 14: 31, 15: 34, 16: 36.2,
      17: 38.3, 18: 40, 19: 42, 20: 44.2, 21: 46.1, 22: 48.1, 23: 50,
      24: 52, 25: 55.8, 26: 57, 27: 59, 28: 61, 29: 63.3, 30: 65.1,
      31: 66.5, 32: 68.1, 33: 71.5, 34: 73, 35: 75.5, 36: 78, 37: 80,
      38: 82, 39: 84.2, 40: 86, 41: 88, 42: 90, 43: 92, 44: 94,
      45: 96, 46: 99, 47: 101, 48: 103.2, 49: 105.5, 50: 107
    };
  
    return values[updatedPdValue] || updatedPdValue;
  };
  

  const getUpdatedPdValue = (kText, pdText) => {
    const kTextValue = parseFloat(kText);
    const pdTextValue = parseFloat(pdText);

    if (!isNaN(kTextValue) && !isNaN(pdTextValue)) {
      let updatedPdValue;
      switch (kTextValue) {
        case 30:
        case 29:
          updatedPdValue = pdTextValue + 15;
          break;

        default:
          updatedPdValue = pdTextValue;
          break;
      }

      const mappedValue = mapUpdatedPdToGraphValue(updatedPdValue);
      return mappedValue;
    } else {
      return 0;
    }
  };

  const getUpdatedMfValue = (parsedValue) => {
    const values = {
      1: 100, 2: 99, 3:97, 4:96.4, 5:95, 6:93, 7:92, 8:91, 9: 89, 10: 88, 11: 87.2, 12: 85, 13: 84, 14: 83, 15: 81,
      16: 80, 17: 79, 18: 77, 19: 76, 20: 75.5, 21: 73, 22: 72.1, 23: 71,
      24: 69, 25: 68.2, 26: 67.3, 27: 65.5, 28: 64, 29: 63, 30: 61, 31: 60,
      32: 58, 33: 55, 34: 53, 35: 51, 36: 49.2, 37: 46.2, 38: 44, 39: 42.5,
      40: 40, 41: 38.2, 42: 36, 43: 33, 44: 31, 45: 29, 46: 27.5, 47: 25.1, 48: 24.2,
      49: 22
    };
  
    return values[parsedValue] || parsedValue;
  };
  
  const getUpdatedPaValue = (parsedValue) => {
    const values = {
      1: 24, 2: 27, 3: 29, 4: 31, 5: 33.6, 6: 36, 7: 38, 8: 41, 9: 43.2, 10: 45, 11: 48, 12: 50, 13: 52, 14: 55,
      15: 56.8, 16: 59, 17: 62, 18: 64, 19: 66, 20: 68, 21: 71,
      22: 72.8, 23: 75, 24: 77.8, 25: 80, 26: 82, 27: 85, 28: 87,
      29: 89, 30: 92, 31: 94, 32: 96, 33: 99, 34: 101, 35: 103,
      36: 106, 37: 108, 38: 110, 39: 113, 40: 114.9
    };
  
    return values[parsedValue] || parsedValue;
  };

  const mapUpdatedPtToGraphValue = (updatedPtValue) => {
    const values = {
      10: 20, 11: 21, 12: 23, 13: 24, 14: 24.1,
      15: 27, 16: 29, 17: 30, 18: 32, 19: 33, 20: 35, 21: 36,
      22: 38.2, 23: 39, 24: 41, 25: 42, 26: 44, 27: 45, 28: 47,
      29: 49, 30: 50, 31: 52, 32: 53, 33: 55, 34: 56, 35: 57.8,
      36: 58.9, 37: 61, 38: 62, 39: 63.7, 40: 65, 41: 67, 42: 68,
      43: 70, 44: 71, 45: 73, 46: 74, 47: 76, 48: 77, 49: 79,
      50: 81, 51: 82, 52: 84, 53: 85, 54: 87, 55: 88, 56: 90, 57: 91, 58: 93
    };
  
    return values[  updatedPtValue] || updatedPtValue;
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
    switch (updatedScValue) {
      case 25:
        return 100;
      case 15:
        return 48.5;
      case 30:
        return 110;
      // Diğer durumlar için de gerekirse ekleyebilirsiniz.
      default:
        return updatedScValue;
    }
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
    switch (updatedMaValue) {
      case 70:
        return 68.2;
      case 15:
        return 48.5;
      case 10:
        return 37.5;
      // Diğer durumlar için de gerekirse ekleyebilirsiniz.
      default:
        return updatedMaValue;
    }
  };

  const getUpdatedMaValue = (kText, maText) => {
    const kTextValue = parseFloat(kText);
    const maTextValue = parseFloat(maText);

    if (!isNaN(kTextValue) && !isNaN(maTextValue)) {
      let updatedMaValue;
      switch (kTextValue) {
        case 10:
          updatedMaValue = maTextValue + 2;
          break;
        default:
          updatedMaValue = maTextValue;
          break;
      }

      const mappedValue = mapUpdatedMaToGraphValue(updatedMaValue);
      return mappedValue;
    } else {
      return 0;
    }
  };

  const getUpdatedSiValue = (parsedValue) => {
    switch (parsedValue) {
      case 30:
        return 50;
      case 130:
        return 80;
      case 60:
        return 58;
      case 100:
        return 68.9;
      default:
        return parsedValue;
    }
  };

  const updateChartData = (
    questionMarkValue,
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
            questionMarkValue,
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
        <h2 style={{ color: "white", marginBottom: "20px", fontWeight: "bold", fontFamily: "Didot, serif" }}>
          MMPI Ham Puan Tablosu
        </h2>
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
            ? state.questionMarkInputText
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
            ? handleQuestionMarkInputChange(e.target.value)
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
      <div>
        <LineChart chartData={state.chartData} />
      </div>
    </div>
  );
  
  
  
};

export default MyChartComponent;
