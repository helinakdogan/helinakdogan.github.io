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
    D: 0,
    HY: 0,
    PD: 0,
    MF: 0,
    HS: 0,
    MA: 0,
    SI: 0,
    PA: 0,
    PT: 0,
    SC: 0,
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

  // Call this function in your calculateScores method
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
    newScores["K"] = mapUpdatedKToGraphValue(newScores.K);
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

    setScores(newScores);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDownloadPDF = () => {
    const input = document.getElementById("pdfContent");

    // Kontrol et, input null mı
    if (!input) {
      console.error("Element with id 'pdfContent' not found.");
      return; // Element yoksa erken döner
    }

    // html2canvas ile PDF'ye dönüştürme
    html2canvas(input, { scale: 2 })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();

        const imgWidth = pdf.internal.pageSize.getWidth() - 40; // Kenarlarda 20 birim boşluk
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        // Sayfa boyutunu kontrol et
        const pageHeight = pdf.internal.pageSize.getHeight() - 40; // Üst ve alt kenar için 20 birim
        const heightRatio = imgHeight > pageHeight ? pageHeight / imgHeight : 1;
        const finalWidth = imgWidth * heightRatio;
        const finalHeight = imgHeight * heightRatio;

        // Resmi ortala
        const x = (pdf.internal.pageSize.getWidth() - finalWidth) / 2;
        const y = 10; // Y konumu

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
      "D",
      "HY",
      "PD",
      "MF",
      "HS",
      "MA",
      "SI",
      "PA",
      "PT",
      "SC",
    ]; // Define the order of labels
    const dataValues = labels.map((label) => scores[label]); // Map scores in the same order as labels

    const data = {
      labels: labels,
      datasets: [
        {
          label: "K Eklenmiş Puanlar (Erkek)",
          data: dataValues,
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderWidth: 1,
        },
      ],
    };

    const options = {
      scales: {
        y: {
          max: 120,
          min: 0,
          ticks: {
            stepSize: 10,
            callback: function (value) {
              return value % 10 === 0 ? value.toString() : "";
            },
          },
        },
      },
    };

    return (
      <div style={{ width: "100%", height: "100%" }}>
        <Line data={data} options={options} />
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
          gridTemplateColumns: "1fr 2fr", // Sol ve sağ olmak üzere iki ana kolon
          gap: "20px", // İki kutu arasındaki boşluk
          width: "100%",
          maxWidth: "1200px", // Genel genişlik sınırı
        }}
      >
       {/* Test Cevapları Box - Sol Kolon */}
<div
  style={{
    padding: "10px",
    background: "linear-gradient(to bottom, #B0C4E0, #8A9AE3)", // Soğuk mavi tonları
    borderRadius: "8px",
    overflowY: "scroll",
    height: "600px",
    textAlign: "center",
    gridColumn: "1 / span 1", // Sol kolon için ayrılmış alan
    width: "100%",
    color: "white", // Tüm yazıların rengi beyaz
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Gölgeleme
  }}
>
<div
  style={{
    backgroundColor: "rgba(128, 128, 128, 0.7)", // Daha koyu ve şeffaf gri arka plan
    borderRadius: "5px",
    padding: "5px",
    marginTop: "10px", // Kutudan önce boşluk
    marginBottom: "10px", // Kutudan sonra boşluk
    width: "fit-content", // Kutunun genişliğini içeriğe göre ayarlama
    margin: "0 auto", // Ortalamak için
  }}
>
  <h6 style={{ color: "white", margin: "0" }}>Uyarı: Bu sayfa test aşamasındadır.</h6>
</div>

  <h3 style={{ color: "white", margin: "10px 0" }}>Test Cevapları</h3>
  <hr style={{ border: "1px solid white", margin: "10px 0" }} /> {/* Beyaz çizgi */}
  <h6 style={{ color: "white", marginBottom: "20px" }}>
    Doğru(D) cevaplar için 1'e, yanlış(Y) cevaplar için 2'ye, boş
    cevaplar için 0'a basınız.
  </h6>
  {responses.map((response, index) => (
    <div
      key={index}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "15px", // Boşluk artırıldı
      }}
    >
      <label
        style={{
          marginRight: "10px", // Boşluk artırıldı
          fontWeight: "bold",
          fontSize: "14px",
          color: "white", // Yazı rengi beyaz
        }}
      >
        Soru {index + 1}:
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
          color: "black", // Giriş alanındaki metin rengi siyah (isteğe bağlı)
          backgroundColor: "white", // Giriş alanının arka plan rengi beyaz
        }}
        maxLength={1}
      />
    </div>
  ))}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      marginBottom: "15px", // Boşluk artırıldı
      justifyContent: "center",
    }}
  >
    <input
      type="text"
      placeholder="İsim girin..."
      value={name}
      onChange={handleNameChange}
      style={{
        width: "100%",
        maxWidth: "250px",
        borderRadius: "5px",
        padding: "4px",
        marginRight: "10px", // Boşluk artırıldı
        border: "1px solid #ccc",
        color: "black", // Giriş alanındaki metin rengi siyah (isteğe bağlı)
        backgroundColor: "white", // Giriş alanının arka plan rengi beyaz
      }}
    />
    <button
      onClick={() => {
        calculateScores(responses);
        setShowName(true);
      }}
      style={{
        padding: "8px",
        backgroundColor: "#6A78B8", // Koyu mavi buton rengi
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        width: "90px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Buton gölgesi
      }}
    >
      Hesapla
    </button>
  </div>
  <button
    onClick={handleDownloadPDF}
    style={{
      marginTop: "15px",
      padding: "8px",
      backgroundColor: "#6A78B8", // Koyu mavi buton rengi
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      width: "100%",
      maxWidth: "180px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Gölgeleme
    }}
  >
    Grafiği PDF olarak indir
  </button>
</div>


        {/* Sağ Kolon: Grafik Yukarıda, Puanlar Altta */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "10px",
            gridColumn: "2 / span 1", // Sağ kolon için ayrılmış alan
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
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
                width: "100%",
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
                  padding: "5px",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "8px",
                  height: "50px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  flexWrap: "wrap",
                }}
              >
                <h4 style={{ color: "#333", marginRight: "10px" }}>
                  K Eklenmiş Puanlar:
                </h4>
                {Object.entries(scores).map(([key, value]) => (
                  <div
                    key={key}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "8px",
                      fontSize: "12px",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#444",
                        marginRight: "4px",
                      }}
                    >
                      {key}:
                    </span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryGraph;
