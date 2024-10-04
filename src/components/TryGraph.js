import React, { useState } from "react";
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

const TryGraph = () => {
  const [responses, setResponses] = useState(Array(566).fill(null));
  const [scores, setScores] = useState({
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
      if (event.key === "1") {
        handleChange(index, "D");
        focusNextInput(Number(index) + 1);
      } else if (event.key === "2") {
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

  const offsetk = {
    30: 30,
    29: 29,
    28: 28,
    27: 27,
    26: 26,
    25: 25,
    24: 24,
    23: 23,
    22: 22,
    21: 21,
    20: 20,
    19: 19,
    18: 18,
    17: 17,
    16: 16,
    15: 15,
    14: 14,
    13: 13,
    12: 12,
    11: 11,
    10: 10,
    9: 9,
    8: 8,
    7: 7,
    6: 6,
    5: 5,
    4: 4,
    3: 3,
    2: 2,
    1: 1,
    0: 0,
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
    const newScores = {};
    for (const [key, value] of Object.entries(mQNumbers)) {
      newScores[key] = value.questions.reduce((total, qObj) => {
        const response = responses[qObj.question - 1]; // -1 for zero-indexing
        if (qObj.condition === "Y" && response === "Y") {
          return total + 1;
        }
        if (qObj.condition === "D" && response === "D") {
          return total + 1;
        }
        return total;
      }, 0);
    }

    newScores["L"] = mapUpdatedLToGraphValue(newScores.L);
    newScores["F"] = mapUpdatedFToGraphValue(newScores.F);
    newScores["D"] = mapUpdatedDToGraphValue(newScores.D);
    newScores["HY"] = mapUpdatedHyToGraphValue(newScores.HY);
    newScores["MF"] = mapUpdatedMfToGraphValue(newScores.MF);
    newScores["PA"] = mapUpdatedPaToGraphValue(newScores.PA);
    newScores["SI"] = mapUpdatedSiToGraphValue(newScores.SI);

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

    setScores(newScores);
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

  const LineChart = () => {
    const labels = [
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
    const dataValues = labels.map((label) => scores[label]); // Map scores in the same order as labels

    const data = {
      labels: labels,
      datasets: [
        {
          label: "MMPI Hesaplanmış Puanlar Grafiği (Erkek)",
          data: dataValues,
          borderColor: "black",
          backgroundColor: "lightgrey",
          borderWidth: 1,
        },
      ],
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
      scales: {
        y: {
          min: 0,
          max: 120,
          ticks: {
            stepSize: 10,
          },
        },
      },
    };

    const chartHeight = 420;

    const yMin = 0;
    const yMax = 120;
    const startValue = 36;
    const endValue = 70;

    const startPosition = ((yMax - startValue) / (yMax - yMin)) * chartHeight;
    const endPosition = ((yMax - endValue) / (yMax - yMin)) * chartHeight;
    const height = startPosition - endPosition;

    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: `${chartHeight}px`,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: `${endPosition}px`,
            height: `${height}px`,
            marginLeft: "5px",
            width: "95%",
            backgroundColor: "rgba(255, 255, 0, 0.2)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 2 }}>
          <Line
            data={data}
            options={options}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "20px",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {/* Test Cevapları Box - Sol Kolon */}
       {/* Test Cevapları Box - Sol Kolon */}
<div
  style={{
    padding: "10px",
    background: "linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%)",
    borderRadius: "8px",
    overflowY: "scroll",
    height: "600px",
    textAlign: "center",
    gridColumn: "1 / span 1",
    width: "100%",
    color: "white",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  }}
>
  <div
    style={{
      backgroundColor: "rgba(189, 83, 151, 0.3)",
      borderRadius: "5px",
      padding: "8px",
      marginTop: "15px",
      marginBottom: "30px",
      width: "fit-content",
      margin: "0 auto",
    }}
  >
    <div style={{ color: "white", margin: "0", fontSize: "11px" }}>
      <strong>Uyarı:</strong> Bu sayfa test aşamasındadır.
    </div>
  </div>
  <h2 style={{ color: "#393645", margin: "10px 0", marginBottom: "20px", marginTop: "26px", fontSize:"22px", fontFamily: 'Didserif', fontWeight: 'bold' }}>Test Cevapları</h2>

  {/* Kullanıcı dostu açıklama alanı */}
  <div
    style={{
      backgroundColor: "rgba(81, 85, 89, 0.2)", // Şeffaf beyaz arka plan
      borderRadius: "8px", // Kenar yuvarlama
      padding: "10px", // İçerik alanı
      color: "#555163", // Yazı rengi
      marginBottom: "20px", // Alt boşluk
      width: "70%", // Genişlik ayarı
      margin: "0 auto", // Ortalamak için
      display: "flex", // Flexbox kullanımı
      flexDirection: "column", // Dikey yönlendirme
    }}
  >
    <h6 style={{ margin: "0", textAlign: "center", marginBottom:"1px"}}>
      DOĞRU (D) cevaplar için 1'e, 
    </h6>
    <h6 style={{ margin: "0", textAlign: "center", marginBottom:"1px" }}>
YANLIŞ (Y) cevaplar için 2'ye,
    </h6>
    <h6 style={{ margin: "0", textAlign: "center" }}>
      BOŞ cevaplar için 0'a basınız.
    </h6>
  </div>

  {/* Soruların yer aldığı alan */}
  <div
    style={{
      display: "flex",
      flexDirection: "column", // Dikey hizalama
      alignItems: "center", // Ortalamak için
      gap: "15px", // Boşluk
      marginTop: "20px",
    }}
  >
    {responses.map((response, index) => (
      <div
        key={index}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px", // Eklenen padding
          backgroundColor: "rgba(255, 255, 255, 0.3)", // Kutunun arka plan rengi
          border: "1px solid #ccc", // Kutunun sınırı
          borderRadius: "8px", // Kenar yuvarlama
          width: "50%", // Genişlik küçültüldü
        }}
      >
        <label
          style={{
            marginRight: "10px",
            fontWeight: "bold",
            fontSize: "14px",
            color: "#393645",
          }}
        >
          Soru {index + 1}
        </label>
        <input
          type="text"
          data-index={index}
          value={response || ""}
          onFocus={() => handleInputFocus(index)}
          onKeyDown={handleKeyDown}
          style={{
            width: "40px",
            textAlign: "center",
            fontSize: "14px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            color: "black",
            backgroundColor: "white",
          }}
          maxLength={1}
        />
      </div>
    ))}
  </div>

  {/* Ad Soyad ve Input Kutusu */}
  <div
    style={{
      backgroundColor: "rgba(255, 255, 255, 0.3)", // Kutunun arka plan rengi
      border: "1px solid #ccc", 
      borderRadius: "8px",
      padding: "10px",
      marginTop: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
     
    }}
  >
    <div style={{ margin: "0", color: "#393645", marginTop:"4px", fontSize:"14px", fontWeight:"bold" }}>Ad Soyad</div>
    <input
      type="text"
      value={name}
      onChange={handleNameChange}
      style={{
        width: "100%",
        maxWidth: "250px",
        borderRadius: "5px",
        padding: "4px",
        border: "1px solid #ccc",
        color: "black",
        backgroundColor: "white",
        marginBottom: "10px",
      }}
    />
  </div>

  {/* Butonlar için ortalama yapı */}
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "15px",
      marginTop: "15px",
    }}
  >
    {/* Hesapla Butonu */}
    <button
      onClick={() => {
        calculateScores(responses);
        setShowName(true);
      }}
      style={{
        padding: "10px",
        backgroundColor: "#79639a",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "14px",
        width: "60%", 
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      Hesapla
    </button>

    {/* PDF İndirme Butonu */}
    <button
      onClick={handleDownloadPDF}
      style={{
        padding: "10px",
        backgroundColor: "#79639a",
        color: "white",
        border: "none",
        fontSize: "14px",
        borderRadius: "5px",
        cursor: "pointer",
        marginBottom: "10px",
        width: "60%", 
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      Grafiği PDF Olarak İndir
    </button>
  </div>
</div>


{/* Sağ Kolon: Grafik Yukarıda, Puanlar Altta */}
<div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "10px",
    gridColumn: "2 / span 1",
    width: "100%",
  }}
>
  <div id="pdfContent">
    {/* Grafik Box */}
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "5px",
        marginBottom: "10px",
        backgroundColor: "#fafafa", // Daha açık gri tonu
        borderRadius: "8px",
        width: "100%",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Gölge eklendi
      }}
    >
      <h5 style={{ color: "#333", marginRight: "10px" }}>
        Ad Soyad: {name}{" "}
      </h5>
      <LineChart />
    </div>

    {showName && (
      <div
  style={{
    padding: "20px", // Daha fazla iç boşluk
    background: "#f6f0ff", // Daha açık pastel tonları
    borderRadius: "8px",
    height: "auto", // Yükseklik otomatik ayarlandı
    display: "flex",
    flexDirection: "column", // Dikey olarak sıralamak için column kullanıldı
    alignItems: "center", // Ortalamak için merkezi hizalama
    justifyContent: "center",
    overflow: "hidden",
    flexWrap: "wrap",
    width: "96%",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Gölge azaltıldı
  }}
>
  <h5 style={{ color: "#333", margin: "0 0 20px 0", fontSize:"18px", fontFamily: 'Didserif', fontWeight: 'bold' }}>
    K Eklenmiş Puanlar
  </h5>
  <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
    {Object.entries(scores).map(([key, value]) => (
      <div
        key={key}
        style={{
          display: "flex",
          alignItems: "center",
          marginRight: "15px", // Daha fazla sağ boşluk
          fontSize: "14px", // Font boyutunu artır
        }}
      >
        <span
          style={{
            fontWeight: "bold",
            color: "#444",
            marginRight: "5px",
          }}
        >
          {key}:
        </span>
        <span style={{ color: "#444" }}>{value}</span>
      </div>
    ))}
  </div>
</div>

    )}
  </div>
</div>


      </div>
    </div>
  );
};

export default TryGraph;
