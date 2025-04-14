import React, { useEffect, useState } from "react";
import axios from "axios";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";
import "./../css/ResultPage.css";

const ResultPage = ({ formData }) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPrediction = async () => {
      try {
        const response = await axios.post(
          "https://loan-approval-h5dw.onrender.com/predict-loan/",
          formData
        );
        setResult(response.data);
      } catch (error) {
        setResult({ error: "Something went wrong please try again" });
      } finally {
        setLoading(false);
      }
    };
    fetchPrediction();
  }, [formData]);

  return (
    <div className="loan-result-container">
      {/* Accuracy Button */}
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
      ) : result && (
        <div
          className={`loan-prediction-box ${
            result.prediction
              ? result.prediction.trim() === "Approved"
                ? "loan-approved"
                : "loan-rejected"
              : "loan-error"
          }`}
        >
          {result.prediction ? (
            <div className="loan-prediction-content">
              <DotLottieReact
                src={
                  result.prediction.trim() === "Approved"
                    ? "https://lottie.host/867be1b4-b378-4f05-b3d6-f51047557d4c/EieDy1xrd6.lottie"
                    : "https://lottie.host/50c86dfe-da4c-4d6d-8554-fd60b1c981df/n0iVN1hDsi.lottie"
                }
                autoplay
              />
              <p
                className={
                  result.prediction.trim() === "Approved"
                    ? "loan-text-approved"
                    : "loan-text-rejected"
                }
              >
                {result.prediction}
              </p>
            </div>
          ) : (
            <p className="loan-text-error">{result.error}</p>
          )}
        </div>
      )}

      <div className="loan-button-group">
        {!loading && (
          <button
            className="loan-button-update"
            onClick={() => navigate("/")}
          >
            🔁 Update
          </button>
        )}
        <button
          className="loan-button-home"
          onClick={() => window.location.href = "https://loan2-umber.vercel.app/"}
        >
          🏠 Home
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
