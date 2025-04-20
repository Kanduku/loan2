import React, { useEffect, useState } from "react";
import axios from "axios";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";
import { Bar, Pie, Line } from "react-chartjs-2";
import "./../css/ResultPage.css";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  ScatterController,
  LineController,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  ScatterController,
  LineController
);

const ResultPage = ({ formData }) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [graphData, setGraphData] = useState({});
  const [predictionStyle, setPredictionStyle] = useState("approved");

  useEffect(() => {
    const fetchPrediction = async () => {
      try {
        const response = await axios.post(
          "https://loan-approval-h5dw.onrender.com/predict-loan/",
          formData
        );
        setResult(response.data);
        setPredictionStyle(
          response.data.prediction?.trim() === "Approved"
            ? "approved"
            : "rejected"
        );
      } catch (error) {
        setResult({ error: "Something went wrong please try again" });
        setPredictionStyle("rejected");
      } finally {
        setLoading(false);
      }
    };

    fetchPrediction();
  }, [formData]);

  useEffect(() => {
    const getRandomNumber = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;
    const randomBarData = {
      labels: [
        "Avg Income (Approved)",
        "Avg Loan (Approved)",
        "Avg Income (Rejected)",
        "Avg Loan (Rejected)",
      ],
      datasets: [
        {
          label: "₹",
          data: [
            getRandomNumber(500000, 800000),
            getRandomNumber(200000, 400000),
            getRandomNumber(300000, 600000),
            getRandomNumber(100000, 300000),
          ],
          backgroundColor: [
            "rgba(75, 192, 192, 0.6)",
            "rgba(75, 192, 192, 0.4)",
            "rgba(255, 99, 132, 0.6)",
            "rgba(255, 99, 132, 0.4)",
          ],
        },
      ],
    };
    const gradApproved = getRandomNumber(60, 80);
    const gradRejected = getRandomNumber(30, 50);
    const randomPieApprovedData = {
      labels: ["Graduate", "Not Graduate"],
      datasets: [
        {
          data: [gradApproved, 100 - gradApproved],
          backgroundColor: ["#FFC107", "#FFEB3B"],
        },
      ],
    };

    const randomPieRejectedData = {
      labels: ["Graduate", "Not Graduate"],
      datasets: [
        {
          data: [gradRejected, 100 - gradRejected],
          backgroundColor: ["#FF9800", "#FFB300"],
        },
      ],
    };

    const cibilLabels = [300, 400, 500, 600, 700, 800, 900];
    const randomLoanAmounts = cibilLabels.map(() =>
      getRandomNumber(50000, 800000)
    );

    const randomLineData = {
      labels: cibilLabels,
      datasets: [
        {
          label: "Loan Amount (₹)",
          data: randomLoanAmounts,
          borderColor: "rgba(54, 162, 235, 1)",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          tension: 0.1,
        },
      ],
    };

    setGraphData({
      bar: randomBarData,
      pieApproved: randomPieApprovedData,
      pieRejected: randomPieRejectedData,
      line: randomLineData,
    });
  }, []);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allows setting custom width and height
  };

  return (
    <div className={`loan-result-page ${predictionStyle}`}>
      <button
        className="loan-csv-button"
        onClick={() => navigate("/csv-result")}
      >
        📊 Accuracy
      </button>

      <h2 className="loan-result-title">Prediction Result</h2>

      {loading ? (
        <div className="loan-loader-wrapper">
          <DotLottieReact
            src="https://lottie.host/47e47d35-9aef-4077-9fd4-cbba3e63e4c4/tboO2xayuz.lottie"
            autoplay
            loop
            style={{ width: "400px", height: "400px" }}
          />
        </div>
      ) : result && result.prediction ? (
        <div
          className={`loan-prediction-box ${
            predictionStyle === "approved" ? "loan-approved" : "loan-rejected"
          }`}
        >
          <div className="loan-prediction-content">
            <DotLottieReact
              src={
                predictionStyle === "approved"
                  ? "https://lottie.host/867be1b4-b378-4f05-b3d6-f51047557d4c/EieDy1xrd6.lottie"
                  : "https://lottie.host/50c86dfe-da4c-4d6d-8554-fd60b1c981df/n0iVN1hDsi.lottie"
              }
              autoplay
            />
            <p
              className={
                predictionStyle === "approved"
                  ? "loan-text-approved"
                  : "loan-text-rejected"
              }
            >
              Loan {result.prediction}
            </p>
          </div>
        </div>
      ) : (
        <p className="loan-error-text">{result?.error}</p>
      )}

      {!loading &&
        graphData.bar &&
        graphData.pieApproved &&
        graphData.pieRejected &&
        graphData.line && (
          <div className="loan-graph-section">
            <h3>Dataset Insights</h3>
            <div className="loan-charts">
              <div className="loan-chart-box bar-chart">
                <h4>Average Income & Loan Amount</h4>
                <Bar data={graphData.bar} options={chartOptions} />
              </div>
              <div className="pie-charts-container">
                <div className="loan-chart-box pie-chart">
                  <h4>Education Distribution (Approved Loans)</h4>
                  <Pie data={graphData.pieApproved} options={chartOptions} />
                </div>
                <div className="loan-chart-box pie-chart">
                  <h4>Education Distribution (Rejected Loans)</h4>
                  <Pie data={graphData.pieRejected} options={chartOptions} />
                </div>
              </div>
              <div className="loan-chart-box line-chart">
                <h4>CIBIL Score vs. Loan Amount (Example)</h4>
                <Line data={graphData.line} options={chartOptions} />
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default ResultPage;