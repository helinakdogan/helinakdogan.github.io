import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Chart as ChartJS, registerables } from "chart.js";
import {
  wQuestionValues,
  wLValues,
  wFValues,
  wKValues,
  wHsValues,
  wDValues,
  wHyValues,
  wPdValues,
  wMfValues,
  wPaValues,
  wPtValues,
  wScValues,
  wMaValues,
  wSiValues,
} from "../values/WomanValues";

ChartJS.register(...registerables);

const LineChart = ({ chartData }) => {
  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: "MMPI Hesaplanmış Puanlar Grafiği (Kadın)",
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

const WomanGraph = () => {
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
    return wQuestionValues[updatedQuestionValue] || updatedQuestionValue;
  };

  const mapUpdatedLToGraphValue = (updatedLValue) => {
    return wLValues[updatedLValue] || updatedLValue;
  };

  const mapUpdatedFToGraphValue = (updatedFValue) => {
    return wFValues[updatedFValue] || updatedFValue;
  };

  const mapUpdatedKToGraphValue = (updatedKValue) => {
    return wKValues[updatedKValue] || updatedKValue;
  };

  const mapUpdatedDToGraphValue = (updatedDValue) => {
    return wDValues[updatedDValue] || updatedDValue;
  };

  const mapUpdatedHyToGraphValue = (updatedHyValue) => {
    return wHyValues[updatedHyValue] || updatedHyValue;
  };

  const mapUpdatedMfToGraphValue = (updatedMfValue) => {
    return wMfValues[updatedMfValue] || updatedMfValue;
  };

  const mapUpdatedPaToGraphValue = (updatedPaValue) => {
    return wPaValues[updatedPaValue] || updatedPaValue;
  };

  const mapUpdatedSiToGraphValue = (updatedSiValue) => {
    return wSiValues[updatedSiValue] || updatedSiValue;
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
    return wHsValues[updatedHsValue] || updatedHsValue;
  };

  const getUpdatedHsValue = (kValue, hsValue) => {
    const offsetHs = offset5k[Math.round(kValue)];
    return offsetHs ? hsValue + offsetHs : hsValue;
  };

  const mapUpdatedPdToGraphValue = (updatedPdValue) => {
    return wPdValues[updatedPdValue] || updatedPdValue;
  };

  const getUpdatedPdValue = (kValue, pdValue) => {
    const offsetPd = offset4k[Math.round(kValue)];
    return offsetPd ? pdValue + offsetPd : pdValue;
  };

  const mapUpdatedPtToGraphValue = (updatedPtValue) => {
    return wPtValues[updatedPtValue] || updatedPtValue;
  };

  const getUpdatedPtValue = (kValue, ptValue) => {
    return ptValue + kValue;
  };

  const mapUpdatedScToGraphValue = (updatedScValue) => {
    return wScValues[updatedScValue] || updatedScValue;
  };

  const getUpdatedScValue = (kValue, scValue) => {
    return scValue + kValue;
  };

  const mapUpdatedMaToGraphValue = (updatedMaValue) => {
    return wMaValues[updatedMaValue] || updatedMaValue;
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

  const handleReset = () => {
    setValues({
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
    setChartData({
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
    setShowScores(showScores);
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
      {/* Bilgilendirme Kutusu */}
      <div className="bg-purple-100 border-l-4 border-purple-500 text-purple-700 p-4 mb-4 rounded-md max-w-3xl shadow-md">
        <h6 className="font-semibold text-lg text-center p-1">
          Kullanıcı Rehberi
        </h6>
        <p className="text-xs mt-1 leading-relaxed">
          <strong>MMPI Puan Hesaplama</strong> ve{" "}
          <strong>Psikolojik Test Analizi</strong> için geliştirilmiş bu
          platform, kişilik özelliklerini ve psikolojik durumları değerlendirmek
          amacıyla kullanılan{" "}
          <strong>MMPI (Minnesota Çok Yönlü Kişilik Envanteri)</strong> testinin
          sonuçlarını analiz edebilmenizi sağlamak için geliştirilmiştir. Bu
          site aracılığıyla, MMPI testi yanıtlarına dayanarak hesaplamalar
          gerçekleştirebilir, grafikler oluşturabilir ve sonuçları PDF
          formatında indirebilirsiniz.
        </p>

        {/* Türkiye Standartları Bilgilendirme Kutusu */}
        <div className="flex items-center bg-purple-50 border-l-4 border-purple-300 text-purple-600 p-3 rounded-md mt-2">
          <div className="flex-shrink-0">
            <svg
              className="w-5 h-5 text-purple-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-2h2zm0-4h-2V7h2z" />
            </svg>
          </div>
          <div className="ml-3 text-left">
            <p className="text-xs">
              <strong>Bilgilendirme:</strong> Tüm hesaplamalar, Türkiye
              standartlarına uygun şekilde, yaygın olarak kabul gören MMPI
              Değerlendirme Rehberi baz alınarak gerçekleştirilmektedir.
            </p>
          </div>
        </div>

        {/* Gizlilik Bilgilendirme Kutusu */}
        <div className="flex items-center bg-purple-50 border-l-4 border-purple-300 text-purple-600 p-3 rounded-md mt-2">
          <div className="flex-shrink-0">
            <svg
              className="w-5 h-5 text-purple-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-2h2zm0-4h-2V7h2z" />
            </svg>
          </div>
          <div className="ml-3 text-left">
            <p className="text-xs">
              <strong>Gizlilik İlkesi:</strong> Etik değerler çerçevesinde,
              kişisel hasta bilgileri kaydedilmemekte veya saklanmamaktadır.
              Kullanıcıların kişisel verileri korunmakta ve anonim olarak
              işlenmektedir.
            </p>
          </div>
        </div>

        {/* Kullanım Rehberi */}
        <div className="mt-2 p-2 border rounded-md border-purple-300 bg-purple-50">
          <h6 className="font-semibold text-sm mb-1">Nasıl Kullanılır?</h6>
          <p className="text-xs mt-1 leading-relaxed">
            Ham puan tablosu üzerinden hesaplama yapmak için menüden{" "}
            <strong>"Kadın"</strong> veya <strong>"Erkek"</strong>{" "}
            seçeneklerini; doğru-yanlış sayıları üzerinden hesaplama yapmak
            içinse menüden <strong>"Kadın+"</strong> veya{" "}
            <strong>"Erkek+"</strong> seçeneklerini tercih ediniz.
          </p>
        </div>
      </div>

      <div className="p-4 bg-gradient-to-r from-pink-200 to-green-200 rounded-md shadow-md w-full max-w-3xl mb-8 overflow-y-auto max-h-[500px]"> 
  <h2 className="text-xl font-semibold text-gray-800 mb-4 p-4">
          MMPI Ham Puan Tablosu (Kadın)
        </h2>
        <div className="bg-gray-200 bg-opacity-50 rounded-md p-2 text-gray-700 w-4/5 mx-auto mb-4">
    <h6 className="text-xs">
            Kadın için K değerleri eklenmemiş ham puanları giriniz.
            </h6>
  </div>
  <div className="bg-gray-200 bg-opacity-40 rounded-md p-2 text-gray-700 w-4/5 mx-auto mb-4">
    <h6 className="text-xs">
      ? Parametresi için ara değerler yaklaşık olarak hesaplanmaktadır.
    </h6>
  </div>
  <div className="flex flex-col items-center gap-4 mt-4">
    {Object.keys(values).map((key) => (
      <div
        key={key}
        className="flex justify-center items-center p-2 bg-white border border-gray-300 rounded-md w-5/6 md:w-3/4"
      >
        <label className="w-1/3 text-center font-medium text-gray-800 text-m">
          {key} Ham Puanı
        </label>
        <input
          type="number"
          name={key}
          value={values[key]}
          onChange={handleInputChange}
          className="w-16 text-center border rounded-md p-1 text-gray-700 bg-gray-100 focus:outline-none"
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
    {/* Hesapla Butonu */}
    <button
      onClick={() => {
        handleCalculate();
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
      <div className="w-full max-w-5xl flex flex-col items-center gap-6 mb-16">
        {/* Grafik Box */}
        <div
          id="pdfContent"
          className="p-4 w-full mx-auto rounded-md shadow-md"
          style={{ backgroundColor: "rgba(240, 240, 240, 0.3)" }}
        >
          <h5 className="text-md font-semibold text-gray-800 mb-3">
            Ad Soyad: {name}
          </h5>
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
              style={{ marginTop: "24px" }}
            >
              <h5 className="text-lg font-semibold text-gray-800 mb-3">
                Hesaplanmış Puanlar
              </h5>
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

export default WomanGraph;
