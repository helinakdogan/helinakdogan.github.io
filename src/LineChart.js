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

const reducer = (state, action) => {
  switch (action.type) {
    // Input cases
    case "UPDATE_QUESTION_MARK_INPUT":
      return { ...state, questionMarkInput: action.payload };
    case "UPDATE_L_INPUT":
      return { ...state, lInput: action.payload };
    case "UPDATE_F_INPUT":
      return { ...state, fInput: action.payload };
    case "UPDATE_K_INPUT":
      return { ...state, kInput: action.payload };
    case "UPDATE_HS_INPUT":
      return { ...state, hsInput: action.payload };
    case "UPDATE_D_INPUT":
      return { ...state, dInput: action.payload };
    case "UPDATE_HY_INPUT":
      return { ...state, hyInput: action.payload };
    case "UPDATE_PD_INPUT":
      return { ...state, pdInput: action.payload };
    case "UPDATE_MF_INPUT":
      return { ...state, mfInput: action.payload };
    case "UPDATE_PA_INPUT":
      return { ...state, paInput: action.payload };
    case "UPDATE_PT_INPUT":
      return { ...state, ptInput: action.payload };
    case "UPDATE_SC_INPUT":
      return { ...state, scInput: action.payload };
    case "UPDATE_MA_INPUT":
      return { ...state, maInput: action.payload };
    case "UPDATE_SI_INPUT":
      return { ...state, siInput: action.payload };
    //Input text cases
    case "UPDATE_QUESTION_MARK_INPUT_TEXT":
      return { ...state, questionMarkInputText: action.payload };
    case "UPDATE_L_INPUT_TEXT":
      return { ...state, lInputText: action.payload };
    case "UPDATE_F_INPUT_TEXT":
      return { ...state, fInputText: action.payload };
    case "UPDATE_K_INPUT_TEXT":
      return { ...state, kInputText: action.payload };
    case "UPDATE_HS_INPUT_TEXT":
      return { ...state, hsInputText: action.payload };
    case "UPDATE_D_INPUT_TEXT":
      return { ...state, dInputText: action.payload };
    case "UPDATE_HY_INPUT_TEXT":
      return { ...state, hyInputText: action.payload };
    case "UPDATE_PD_INPUT_TEXT":
      return { ...state, pdInputText: action.payload };
    case "UPDATE_MF_INPUT_TEXT":
      return { ...state, mfInputText: action.payload };
    case "UPDATE_PA_INPUT_TEXT":
      return { ...state, paInputText: action.payload };
    case "UPDATE_PT_INPUT_TEXT":
      return { ...state, ptInputText: action.payload };
    case "UPDATE_SC_INPUT_TEXT":
      return { ...state, scInputText: action.payload };
    case "UPDATE_MA_INPUT_TEXT":
      return { ...state, maInputText: action.payload };
    case "UPDATE_SI_INPUT_TEXT":
      return { ...state, siInputText: action.payload };
    //---------
    case "UPDATE_CHART_DATA":
      return { ...state, chartData: action.payload };
    default:
      return state;
  }
};

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
    switch (parsedValue) {
      case 30:
        return 50;
      case 40:
        return 53;
      case 50:
        return 56.1;
      case 60:
        return 58;
      case 70:
        return 61;
      case 80:
        return 63.8;
      case 90:
        return 66;
      case 100:
        return 68.7;
      case 110:
        return 72;
      case 120:
        return 76;
      case 130:
        return 80;
      default:
        return parsedValue;
    }
  };

  const getUpdatedLValue = (parsedValue) => {
    switch (parsedValue) {
      case 1:
        return 28.2;
      case 2:
        return 36.3;
      case 3:
        return 38.5;
      case 4:
        return 40;
      case 5:
        return 42.4;
      case 6:
        return 50;
      case 7:
        return 55.5;
      case 8:
        return 59.3;
      case 9:
        return 64;
      case 10:
        return 68.1;
      case 11:
        return 73;
      case 12:
        return 77;
      case 13:
        return 82;
      case 14:
        return 86.1;
      case 15:
        return 90;
      default:
        return 0;
    }
  };

  const getUpdatedFValue = (parsedValue) => {
    switch (parsedValue) {
      case 1:
        return 32.5;
      case 2:
        return 36.2;
      case 3:
        return 38.1;
      case 4:
        return 40;
      case 5:
        return 42.2;
      case 6:
        return 44.1;
      case 7:
        return 45.5;
      case 8:
        return 47.3;
      case 9:
        return 49.4;
      case 10:
        return 51.2;
      case 11:
        return 53.2;
      case 12:
        return 55.1;
      case 13:
        return 57.2;
      case 14:
        return 59;
      case 15:
        return 61.1;
      case 16:
        return 63.1;
      case 17:
        return 65.4;
      case 18:
        return 66.1;
      case 19:
        return 68.1;
      case 20:
        return 70;
      case 21:
        return 72.1;
      case 22:
        return 74.1;
      case 23:
        return 76.1;
      case 24:
        return 78.1;
      case 25:
        return 80;
      case 26:
        return 82.1;
      case 27:
        return 84.1;
      case 28:
        return 86.1;
      case 29:
        return 87.1;
      case 30:
        return 89;
      case 31:
        return 91;
      case 32:
        return 93.1;
      case 33:
        return 95.2;
      case 34:
        return 97;
      case 35:
        return 99;
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
      case 11:
        return 48.2;
      case 12:
        return 51.2;
      case 13:
        return 53.5;
      case 14:
        return 56.6;
      case 15:
        return 58.3;
      case 16:
        return 61.2;
      case 17:
        return 64.5;
      case 18:
        return 66.5;
      case 19:
        return 69;
      case 20:
        return 71.9;
      case 21:
        return 74.1;
      case 22:
        return 77.3;
      case 23:
        return 79.2;
      case 24:
        return 82.2;
      case 25:
        return 84.1;
      case 26:
        return 87;
      case 27:
        return 90;
      case 28:
        return 92;
      case 29:
        return 95.4;
      case 30:
        return 98.1;
      default:
        return 0;
    }
  };

  const mapUpdatedHsToGraphValue = (updatedHsValue) => {
    switch (updatedHsValue) {
      case 2:
        return 21.2;
      case 3:
        return 23.2;
      case 4:
        return 25.5;
      case 5:
        return 27.2;
      case 6:
        return 29;
      case 7:
        return 31.1;
      case 8:
        return 33.4;
      case 9:
        return 35.5;
      case 10:
        return 37.1;
      case 11:
        return 39.1;
      case 12:
        return 41.2;
      case 13:
        return 43.2;
      case 14:
        return 45.5;
      case 15:
        return 48.4;
      case 16:
        return 50;
      case 17:
        return 52.2;
      case 18:
        return 54.2;
      case 19:
        return 56.3;
      case 20:
        return 58.1;
      case 21:
        return 60;
      case 22:
        return 62;
      case 23:
        return 64.1;
      case 24:
        return 66;
      case 25:
        return 68;
      case 26:
        return 70;
      case 27:
        return 72.2;
      case 28:
        return 74;
      case 29:
        return 76;
      case 30:
        return 78;
      case 31:
        return 78;
      case 32:
        return 83.1;
      case 33:
        return 85.2;           
      default:
        return 0;
    }
  };

  const getUpdatedHsValue = (kText, hsText) => {
    const kTextValue = parseFloat(kText);
    const hsTextValue = parseFloat(hsText);

    if (!isNaN(kTextValue) && !isNaN(hsTextValue)) {
      let updatedHsValue;
      switch (kTextValue) {
        case 30:
        case 29:
          updatedHsValue = hsTextValue + 15;
          break;
        case 28:
        case 27:
          updatedHsValue = hsTextValue + 14;
          break;
        case 26:
        case 25:
          updatedHsValue = hsTextValue + 13;
          break;
        case 24:
        case 23:
          updatedHsValue = hsTextValue + 12;
          break;
        case 22:
        case 21:
          updatedHsValue = hsTextValue + 11;
          break;
        case 20:
        case 19:
          updatedHsValue = hsTextValue + 10;
          break;
        case 18:
        case 17:
          updatedHsValue = hsTextValue + 9;
          break;
        case 16:  
        case 15:
          updatedHsValue = hsTextValue + 8;
          break;
        case 14:  
        case 13:
          updatedHsValue = hsTextValue + 7;
          break;
        case 12:  
        case 11:
          updatedHsValue = hsTextValue + 6;
          break;
        case 10:
        case 9:
          updatedHsValue = hsTextValue + 5;
          break;
        case 8:
        case 7:
          updatedHsValue = hsTextValue + 4;
          break;
        case 6: 
        case 5:
          updatedHsValue = hsTextValue + 3;
          break;
        case 4:
        case 3:
          updatedHsValue = hsTextValue + 2;
          break;
        case 2:
        case 1:
          updatedHsValue = hsTextValue + 1;
          break;
        default:
          updatedHsValue = hsTextValue;
          break;
      }

      const mappedValue = mapUpdatedHsToGraphValue(updatedHsValue);
      return mappedValue;
    } else {
      return 0;
    }
  };



  const getUpdatedDValue = (parsedValue) => {
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
      case 11:
        return 48.2;
      case 12:
        return 51.2;
      case 13:
        return 53.5;
      case 14:
        return 56.6;
      case 15:
        return 58.3;
      case 16:
        return 61.2;
      case 17:
        return 64.5;
      case 18:
        return 66.5;
      case 19:
        return 69;
      case 20:
        return 71.9;
      case 21:
        return 74.1;
      case 22:
        return 77.3;
      case 23:
        return 79.2;
      case 24:
        return 82.2;
      case 25:
        return 84.1;
      case 26:
        return 87;
      case 27:
        return 90;
      case 28:
        return 92;
      case 29:
        return 95.4;
      case 30:
        return 98.1;
      default:
        return 0;
    }
  };

  const getUpdatedHyValue = (parsedValue) => {
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

  const mapUpdatedPdToGraphValue = (updatedPdValue) => {
    switch (updatedPdValue) {
      case 70:
        return 68.2;
      case 15:
        return 48.5;
      case 10:
        return 37.5;
      // Diğer durumlar için de gerekirse ekleyebilirsiniz.
      default:
        return updatedPdValue;
    }
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

  const getUpdatedPaValue = (parsedValue) => {
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

  const mapUpdatedPtToGraphValue = (updatedPtValue) => {
    switch (updatedPtValue) {
      case 25:
        return 100;
      case 15:
        return 48.5;
      case 30:
        return 110;
      // Diğer durumlar için de gerekirse ekleyebilirsiniz.
      default:
        return updatedPtValue;
    }
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
