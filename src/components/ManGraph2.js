import React, { useState, useRef } from "react";
import { Line } from "react-chartjs-2";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Chart as ChartJS, registerables } from "chart.js";
import mQNumbers from "../values/ManQNumbers";
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

const ManGraph2 = () => {
  const [responses, setResponses] = useState(Array(566).fill(null));
  const [scores, setScores] = useState({
    "?": 0,
    L: 0,
    F: 0,
    K: 0,
    HS: 0,
    D: 0,
    HY: 0,
    PD: 0,
    MF: 0,
    PA: 0,
    PT: 0,
    SC: 0,
    MA: 0,
    SI: 0,
  });
  const [name, setName] = useState("");
  const [showName, setShowName] = useState(false);

  const handleKeyDown = (event) => {
    const index = event.target.dataset.index;
    if (index !== undefined) {
      if (event.key === "1" || event.key === "D") {
        handleChange(index, "D");
        focusNextInput(Number(index) + 1);
      } else if (event.key === "2" || event.key === "Y") {
        handleChange(index, "Y");
        focusNextInput(Number(index) + 1);
      } else if (event.key === "0") {
        handleChange(index, null);
        focusNextInput(Number(index) + 1);
      }
    }
  };

  const handleChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  const focusNextInput = (nextIndex) => {
    const nextInput = document.querySelector(
      `input[data-index="${nextIndex}"]`
    );
    if (nextInput) {
      nextInput.focus();
    }
  };

  const handleInputFocus = (index) => {
    const currentInput = document.querySelector(`input[data-index="${index}"]`);
    currentInput.value = "";
  };

  const handleInputChange = (event) => {
    const index = event.target.dataset.index;
    const value = event.target.value.toUpperCase(); 
    if (index !== undefined && (value === "D" || value === "Y" || value === "")) {
      handleChange(index, value === "" ? null : value);
      focusNextInput(Number(index) + 1);
    }
  };

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

  const calculateScores = (responses) => {
    if (responses.length !== 566) {
      console.error("Responses array length mismatch.");
      return;
    }
  
    const newScores = {}; // Yeni puanları saklamak için bir nesne
  
    // Her soru için puanları hesapla
    for (const [key, value] of Object.entries(mQNumbers)) {
      newScores[key] = value.questions.reduce((total, qObj) => {
        const response = responses[qObj.question - 1]; // Sıfırdan başlayarak erişim
  
        if (qObj.condition === "0" && response === "0") {
          return total + 1;
        }
        if (qObj.condition === "Y" && response === "Y") {
          return total + 1;
        }
        if (qObj.condition === "D" && response === "D") {
          return total + 1;
        }
        return total; // Hiçbir koşul sağlanmazsa toplamı değiştirme
      }, 0);
    }
  
    // Boş yanıtların sayısını hesapla ve kaydet
    newScores["?"] = mapUpdatedQuestionToGraphValue(
      responses.filter((response) => response === null).length
    );
  
    // Diğer puanları haritalama
    newScores["L"] = mapUpdatedLToGraphValue(newScores.L);
    newScores["F"] = mapUpdatedFToGraphValue(newScores.F);
    newScores["D"] = mapUpdatedDToGraphValue(newScores.D);
    newScores["HY"] = mapUpdatedHyToGraphValue(newScores.HY);
    newScores["MF"] = mapUpdatedMfToGraphValue(newScores.MF);
    newScores["PA"] = mapUpdatedPaToGraphValue(newScores.PA);
    newScores["SI"] = mapUpdatedSiToGraphValue(newScores.SI);
  
    // HS, PD, PT, SC, MA ve K için güncellemeleri hesapla
    const updatedHsValue = getUpdatedHsValue(newScores["K"], newScores["HS"]);
    newScores["HS"] = mapUpdatedHsToGraphValue(updatedHsValue);
    const updatedPdValue = getUpdatedPdValue(newScores["K"], newScores["PD"]);
    newScores["PD"] = mapUpdatedPdToGraphValue(updatedPdValue);
    const updatedPtValue = getUpdatedPtValue(newScores["K"], newScores["PT"]);
    newScores["PT"] = mapUpdatedPtToGraphValue(updatedPtValue);
    const updatedScValue = getUpdatedScValue(newScores["K"], newScores["SC"]);
    newScores["SC"] = mapUpdatedScToGraphValue(updatedScValue);
    const updatedMaValue = getUpdatedMaValue(newScores["K"], newScores["MA"]);
    newScores["MA"] = mapUpdatedMaToGraphValue(updatedMaValue);
    newScores["K"] = mapUpdatedKToGraphValue(newScores.K);
  
    // Sonuçları sıralayarak "?" en başta olacak şekilde düzenleme
    const sortedScores = Object.keys(newScores)
      .sort((a, b) => (a === "?" ? -1 : b === "?" ? 1 : 0))
      .reduce((acc, key) => {
        acc[key] = newScores[key];
        return acc;
      }, {});
  
    // Sonuçları ayarla
    setScores(sortedScores);
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

  const handleReset = () => {
    setScores({
      "?": 0,
      L: 0,
      F: 0,
      K: 0,
      HS: 0,
      D: 0,
      HY: 0,
      PD: 0,
      MF: 0,
      PA: 0,
      PT: 0,
      SC: 0,
      MA: 0,
      SI: 0,
    });
    setResponses(Array(566).fill(null));
  };

  const LineChart = () => {
    const chartRef = useRef(null);
  
    const labels = [
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
    ];
  
    const dataValues = labels.map((label) => scores[label]);
  
    const data = {
      labels: labels,
      datasets: [
        {
          label: "MMPI Hesaplanmış Puanlar Grafiği (Erkek)",
          data: dataValues,
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
  
    return (
      <div className="chart-container" style={{ width: "100%", height: "100%" }}>
        <div
          className="yellow-background"
          style={{ backgroundColor: "rgba(255, 255, 0, 0.8)" }}
        ></div>
        <Line ref={chartRef} data={data} options={options} />
      </div>
    );
  };
  

  return (
    <div className="flex flex-col items-center justify-center mx-3 my-8 font-sans">
      {/* Bilgilendirme Kutusu */}
<div className="bg-purple-100 border-l-4 border-purple-500 text-purple-700 p-4 mb-4 rounded-md max-w-3xl">
  <h6 className="font-semibold">Nasıl Kullanılır?</h6>
  <p className="text-xs">
    MMPI (Minnesota Çok Yönlü Kişilik Envanteri), kişilik özelliklerini ve psikolojik durumları değerlendirmek için kullanılan bir psikolojik testtir. Bu site aracılığıyla MMPI testi yanıtlarına dayanarak hesaplamalar gerçekleştirebilir, grafiklerini oluşturabilir ve PDF olarak indirebilirsiniz.
  </p>
  <p className="text-xs">
    Bu site üzerinden yapılan tüm hesaplamalar, Türkiye standartlarına göre yapılmaktadır.
  </p>
</div>
      {/* Test Cevapları Kutusu (En Üste Alındı) */}
      <div className="p-4 bg-gradient-to-r from-purple-200 to-yellow-200 rounded-md overflow-y-scroll h-[450px] md:h-[500px] w-full max-w-3xl text-center text-gray-900 shadow-md mb-8">
        <div className="bg-purple-300 bg-opacity-50 rounded-md py-1 my-3 mx-auto w-fit p-2">
          <strong className="text-xs">Uyarı:</strong> Bu sayfa test
          aşamasındadır.
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          MMPI Test Cevapları (Erkek)
        </h2>
        <div className="bg-gray-200 bg-opacity-50 rounded-md p-2 text-gray-700 w-4/5 mx-auto mb-4">
        <h6 className="text-xs">DOĞRU (D) cevaplar için D veya 1,</h6>
          <h6 className="text-xs">YANLIŞ (Y) cevaplar için Y veya 2,</h6>
          <h6 className="text-xs">BOŞ cevaplar için soruyu atlayın veya 0 giriniz.</h6>
        </div>
        <div className="bg-gray-200 bg-opacity-50 rounded-md p-2 text-gray-700 w-4/5 mx-auto mb-4">
          <h6 className="text-xs">Boş soru sayısı (?) test aşamasındadır.</h6>
        </div>

        {/* Soru Kutuları */}
        <div className="flex flex-col items-center gap-2 mt-4">
          {responses.map((response, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-2 bg-white border border-gray-300 rounded-md w-4/5 md:w-2/3"
            >
              <label className="mr-2 font-medium text-gray-800 text-base">
                Soru {index + 1}
              </label>
              <input
                type="text"
                data-index={index}
                value={response || ""}
                onFocus={() => handleInputFocus(index)}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="w-8 text-center text-gray-700 bg-gray-100 border rounded-md focus:outline-none"
                maxLength={1}
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

        {/* Butonlar */}
        <div className="flex flex-col items-center gap-4 mt-5">
          {/* Hesapla Butonu */}
          <button
            onClick={() => {
              calculateScores(responses);
              setShowName(true);
            }}
            className="w-3/4 md:w-2/3 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md transition duration-200 hover:opacity-90 "
          >
            Hesapla
          </button>
  
          {/* Değerleri Sıfırla Butonu */}
          <button
            onClick={handleReset}
            className="w-3/4 md:w-2/3 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md transition duration-200 hover:opacity-90"
          >
            Değerleri Sıfırla
          </button>
  
          {/* PDF İndir Butonu */}
          <button
            onClick={handleDownloadPDF}
            className="w-3/4 md:w-2/3 py-2 bg-gradient-to-r from-rose-400 to-pink-600 text-white rounded-md transition duration-200 hover:opacity-90"
          >
            Grafiği PDF Olarak İndir
          </button>
        </div>
      </div>

      {/* Grafik ve K Eklenmiş Puanlar (Alt Kısma Taşındı) */}
      <div className="w-full max-w-5xl flex flex-col items-center gap-6 mb-16">
        {/* Grafik Box */}
        <div
          id="pdfContent"
          className="p-4 w-full mx-auto rounded-md shadow-md"
          style={{ backgroundColor: "rgba(240, 240, 240, 0.3)" }}
        >
          <h5 className="text-lg font-semibold text-gray-800 mb-3">
            Ad Soyad: {name}
         </h5>

          {/* Sarı Arkaplan Kutusu ve Grafik Div'i */}
          <div className="relative w-full h-[400px] md:h-[450px]">
            <div
              className="absolute"
              style={{
                backgroundColor: "rgba(255, 215, 0, 0.4)",
                zIndex: 0,
                top: "43%", 
                height: "29%", 
                width: "100%",
              }}
            ></div>
            {/* LineChart Bileşeni */}
            <div className="relative w-full h-full">
              <LineChart />
            </div>
          </div>

          {/* K Eklenmiş Puanlar Tablosu */}
          {showName && (
            <div
            className="p-4 bg-purple-50 rounded-md shadow-md w-full flex flex-col items-center"
            style={{ marginTop: "24px" }} 
          >
            <h5 className="text-lg font-semibold text-gray-800 mb-3">Hesaplanmış Puanlar</h5>
            <div className="flex flex-wrap justify-center gap-4">
                {Object.entries(scores).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-center justify-center  space-x-0.5 p-1 bg-white border border-gray-300 rounded-md shadow-sm"
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

export default ManGraph2;
