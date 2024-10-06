import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Chart as ChartJS, registerables } from "chart.js";
import {
  mQuestionValues,
  mLValues,
  mFValues,
  mKValues,
  mHsValues,
  mDValues,
  mHyValues,
  mPdValues,
  mMfValues,
  mPaValues,
  mPtValues,
  mScValues,
  mMaValues,
  mSiValues,
} from "../values/ManValues";

ChartJS.register(...registerables);

const LineChart = ({ chartData }) => {
  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: "MMPI Hesaplanmış Puanlar Grafiği (Erkek)",
        data: chartData.dataValues,
        borderColor: "black",
        backgroundColor: "lightgrey",
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
      y: {
        min: 0,
        max: 120,
        ticks: {
          stepSize: 10,
        },
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

const ManGraph = () => {
  const [values, setValues] = useState({
    "?": "",
    L: "",
    F: "",
    K: "",
    HS: "",
    D: "",
    HY: "",
    PD: "",
    MF: "",
    PA: "",
    PT: "",
    SC: "",
    MA: "",
    SI: "",
  });

  const [showScores, setShowScores] = useState(false);
  const [chartData, setChartData] = useState({
    labels: [
      "?",
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
      "SI",
    ],
    dataValues: Array(14).fill(0),
  });
  const [name, setName] = useState("");
  const [showName, setShowName] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value === "" ? "" : parseInt(value, 10) || 0,
    }));
  };

  // Mapping functions
  const mapUpdatedQuestionToGraphValue = (updatedQuestionValue) => {
    return mQuestionValues[updatedQuestionValue] || updatedQuestionValue;
  };

  const mapUpdatedLToGraphValue = (updatedLValue) => {
    return mLValues[updatedLValue] || updatedLValue;
  };

  const mapUpdatedFToGraphValue = (updatedFValue) => {
    return mFValues[updatedFValue] || updatedFValue;
  };

  const mapUpdatedKToGraphValue = (updatedKValue) => {
    return mKValues[updatedKValue] || updatedKValue;
  };

  const mapUpdatedDToGraphValue = (updatedDValue) => {
    return mDValues[updatedDValue] || updatedDValue;
  };

  const mapUpdatedHyToGraphValue = (updatedHyValue) => {
    return mHyValues[updatedHyValue] || updatedHyValue;
  };

  const mapUpdatedMfToGraphValue = (updatedMfValue) => {
    return mMfValues[updatedMfValue] || updatedMfValue;
  };

  const mapUpdatedPaToGraphValue = (updatedPaValue) => {
    return mPaValues[updatedPaValue] || updatedPaValue;
  };

  const mapUpdatedSiToGraphValue = (updatedSiValue) => {
    return mSiValues[updatedSiValue] || updatedSiValue;
  };

  const offset5k = {
    30: 15,
    29: 15,
    28: 14,
    27: 14,
    26: 13,
    25: 13,
    24: 12,
    23: 12,
    22: 11,
    21: 11,
    20: 10,
    19: 10,
    18: 9,
    17: 9,
    16: 8,
    15: 8,
    14: 7,
    13: 7,
    12: 6,
    11: 6,
    10: 5,
    9: 5,
    8: 4,
    7: 4,
    6: 3,
    5: 3,
    4: 2,
    3: 2,
    2: 1,
    1: 1,
    0: 0,
  };

  const offset4k = {
    30: 12,
    29: 12,
    28: 11,
    27: 11,
    26: 10,
    25: 10,
    24: 10,
    23: 9,
    22: 9,
    21: 8,
    20: 8,
    19: 8,
    18: 7,
    17: 7,
    16: 6,
    15: 6,
    14: 6,
    13: 5,
    12: 5,
    11: 4,
    10: 4,
    9: 4,
    8: 3,
    7: 3,
    6: 2,
    5: 2,
    4: 2,
    3: 2,
    2: 1,
    1: 1,
    0: 0,
  };

  const offset2k = {
    30: 6,
    29: 6,
    28: 6,
    27: 5,
    26: 5,
    25: 5,
    24: 5,
    23: 5,
    22: 4,
    21: 4,
    20: 4,
    19: 4,
    18: 4,
    17: 3,
    16: 3,
    15: 3,
    14: 3,
    13: 3,
    12: 2,
    11: 2,
    10: 2,
    9: 2,
    8: 2,
    7: 1,
    6: 1,
    5: 1,
    4: 1,
    3: 1,
    2: 0,
    1: 0,
    0: 0,
  };

  const mapUpdatedHsToGraphValue = (updatedHsValue) => {
    return mHsValues[updatedHsValue] || updatedHsValue;
  };

  const getUpdatedHsValue = (kValue, hsValue) => {
    const offsetHs = offset5k[Math.round(kValue)];
    return offsetHs ? hsValue + offsetHs : hsValue;
  };

  const mapUpdatedPdToGraphValue = (updatedPdValue) => {
    return mPdValues[updatedPdValue] || updatedPdValue;
  };

  const getUpdatedPdValue = (kValue, pdValue) => {
    const offsetPd = offset4k[Math.round(kValue)];
    return offsetPd ? pdValue + offsetPd : pdValue;
  };

  const mapUpdatedPtToGraphValue = (updatedPtValue) => {
    return mPtValues[updatedPtValue] || updatedPtValue;
  };

  const getUpdatedPtValue = (kValue, ptValue) => {
    return ptValue + kValue;
  };

  const mapUpdatedScToGraphValue = (updatedScValue) => {
    return mScValues[updatedScValue] || updatedScValue;
  };

  const getUpdatedScValue = (kValue, scValue) => {
    return scValue + kValue;
  };

  const mapUpdatedMaToGraphValue = (updatedMaValue) => {
    return mMaValues[updatedMaValue] || updatedMaValue;
  };

  const getUpdatedMaValue = (kValue, maValue) => {
    const offsetMa = offset2k[Math.round(kValue)];
    return offsetMa ? maValue + offsetMa : maValue;
  };

  const handleCalculate = () => {
    const updatedValues = { ...values };

    Object.keys(updatedValues).forEach((key) => {
      if (updatedValues[key] === "") {
        updatedValues[key] = 0; 
      } else {
        updatedValues[key] = parseInt(updatedValues[key], 10) || 0;
      }
    });

    // Map and calculate values
    updatedValues["?"] = mapUpdatedQuestionToGraphValue(updatedValues["?"]);
    updatedValues.L = mapUpdatedLToGraphValue(updatedValues.L);
    updatedValues.F = mapUpdatedFToGraphValue(updatedValues.F);
    updatedValues.D = mapUpdatedDToGraphValue(updatedValues.D);
    updatedValues.HY = mapUpdatedHyToGraphValue(updatedValues.HY);
    updatedValues.MF = mapUpdatedMfToGraphValue(updatedValues.MF);
    updatedValues.PA = mapUpdatedPaToGraphValue(updatedValues.PA);
    updatedValues.SI = mapUpdatedSiToGraphValue(updatedValues.SI);

    updatedValues.HS = getUpdatedHsValue(updatedValues.K, updatedValues.HS);
    updatedValues.HS = mapUpdatedHsToGraphValue(updatedValues.HS);
    updatedValues.PD = getUpdatedPdValue(updatedValues.K, updatedValues.PD);
    updatedValues.PD = mapUpdatedPdToGraphValue(updatedValues.PD);
    updatedValues.PT = getUpdatedPtValue(updatedValues.K, updatedValues.PT);
    updatedValues.PT = mapUpdatedPtToGraphValue(updatedValues.PT);
    updatedValues.SC = getUpdatedScValue(updatedValues.K, updatedValues.SC);
    updatedValues.SC = mapUpdatedScToGraphValue(updatedValues.SC);
    updatedValues.MA = getUpdatedMaValue(updatedValues.K, updatedValues.MA);
    updatedValues.MA = mapUpdatedMaToGraphValue(updatedValues.MA);

    updatedValues.K = mapUpdatedKToGraphValue(updatedValues.K);

    // Güncel değerleri grafikte göstermek için chartData state'ini güncelle
    const dataValues = Object.keys(updatedValues).map(
      (key) => updatedValues[key]
    );
    setChartData({
      labels: Object.keys(updatedValues),
      dataValues: dataValues,
    });
    setShowScores(updatedValues);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDownloadPDF = () => {
    const input = document.getElementById("pdfContent");
    if (!input) {
      console.error("Element with id 'pdfContent' not found.");
      return;
    }

    html2canvas(input, { scale: 7 })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();

        const imgWidth = pdf.internal.pageSize.getWidth() - 4;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        const pageHeight = pdf.internal.pageSize.getHeight() - 4;
        const heightRatio = imgHeight > pageHeight ? pageHeight / imgHeight : 1;
        const finalWidth = imgWidth * heightRatio;
        const finalHeight = imgHeight * heightRatio;

        const x = (pdf.internal.pageSize.getWidth() - finalWidth) / 2;
        const y = 1;

        pdf.addImage(imgData, "PNG", x, y, finalWidth, finalHeight);
        pdf.save(`${name || "grafik"}.pdf`);
      })
      .catch((err) => {
        console.error("Error generating PDF:", err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center mx-3 my-8 font-sans">
      <div className="p-4 bg-gradient-to-r from-blue-200 to-green-200 rounded-md shadow-md w-full max-w-3xl mb-8 overflow-y-auto max-h-[500px]">
        <div className="bg-purple-300 bg-opacity-50 rounded-md py-1 my-3 mx-auto w-fit p-2">
          <strong className="text-xs">Uyarı:</strong> Bu sayfa test
          aşamasındadır.
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          MMPI Ham Puan Tablosu (Erkek)
        </h2>
        <div className="bg-gray-200 bg-opacity-50 rounded-md p-2 text-gray-700 w-4/5 mx-auto mb-4">
          <h6 className="text-xs">
            Erkek için K değerleri eklenmemiş ham puanları giriniz.
          </h6>
        </div>
        <div className="flex flex-col items-center gap-2 mt-4">
          {Object.keys(values).map((key) => (
            <div
              key={key}
              className="flex justify-center items-center p-2 bg-white border border-gray-300 rounded-md w-5/6 md:w-3/4 overflow-hidden"
            >
              <label className="mr-2 font-medium text-gray-800 text-sm">
                {key} Ham Puanı
              </label>
              <input
                type="number"
                name={key}
                value={values[key]}
                onChange={handleInputChange}
                className="w-12 border rounded-md p-1 text-gray-700 bg-gray-100 focus:outline-none"
                style={{ WebkitAppearance: "none", MozAppearance: "textfield" }}
              />
            </div>
          ))}
        </div>
        {/* Ad Soyad Giriş Kutusu */}
        <div className="bg-white border border-gray-300 rounded-md p-2 mt-5 flex flex-col items-center w-4/5 md:w-2/3 mx-auto">
          <span className="text-gray-800 font-medium text-base">Ad Soyad</span>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="w-full max-w-xs border rounded-md p-1 mt-2 text-gray-700 bg-gray-100 focus:outline-none"
          />
        </div>
        <div className="flex flex-col items-center gap-4 mt-5">
          <button
            onClick={() => {
              handleCalculate();
              setShowName(true);
            }}
            className="w-3/4 md:w-2/3 py-1.5 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 transition duration-300"
          >
            Hesapla
          </button>
          <button
            onClick={handleDownloadPDF}
            className="w-3/4 md:w-2/3 py-1.5 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 transition duration-300"
          >
            Grafiği PDF Olarak İndir
          </button>
        </div>
      </div>

      <div className="w-full max-w-5xl flex flex-col items-center gap-6 mb-16">
  {/* Grafik Box */}
  <div
    id="pdfContent"
    className="p-4 w-full mx-auto rounded-md shadow-md"
    style={{ backgroundColor: "rgba(240, 240, 240, 0.3)" }}
  >
    <h5 className="text-lg font-semibold text-gray-800 mb-3">Ad Soyad: {name}</h5>

    {/* Sarı Arka Plan Kutusu ve Grafik Div'i */}
    <div className="relative w-full h-[400px] md:h-[450px]">
      <div
        className="absolute"
        style={{
          backgroundColor: "rgba(255, 215, 0, 0.4)",
          zIndex: 0,
          top: "43.2%", 
          height: "28.8%", 
          width: "100%",
        }}
      ></div>

      {/* LineChart Bileşeni */}
      <div className="relative w-full h-full">
        <LineChart chartData={chartData} />
      </div>
    </div>

    {/* K Eklenmiş Puanlar Tablosu */}
    {showName && (
      <div
        className="p-4 bg-purple-50 rounded-md shadow-md w-full flex flex-col items-center"
        style={{ marginTop: "24px" }} // Tablo üzerine boşluk eklemek için marginTop eklendi
      >
        <h5 className="text-lg font-semibold text-gray-800 mb-3">K Eklenmiş Puanlar</h5>
        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(showScores).map(([key, value]) => (
            <div
              key={key}
              className="flex items-center justify-center space-x-0.5 p-1 bg-white border border-gray-300 rounded-md shadow-sm"
            >
              <span className="font-semibold text-gray-700">{key}:</span>
              <span className="text-gray-600">{value}</span>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
</div>


      {/* Sayfanın Alt Kısmında Boşluk Bırakma */}
      <div className="h-20" />
    </div>
  );
};

export default ManGraph;
