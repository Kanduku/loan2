import React, { useState } from "react";
import axios from "axios";
import "./../css/slide2.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Slide12 = ({ formData, onPrev, csvData }) => {
  const [result, setResult] = useState(null);
  const [startResultVisible, setStartResultVisible] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://loan-approval-h5dw.onrender.com/predict-loan/",
        formData
      );
      setResult(response.data);
    } catch (error) {
      setResult({ error: "Prediction failed. Try again." });
    }
  };

  return (
    <div className="slide12-wrapper">
      {/* Top-right button for CSV data */}
      {csvData && (
        <div className="top-right">
          <button
            onClick={() => setStartResultVisible(true)}
            className="btn show-csv-btn"
          >
            Accuracy
          </button>
        </div>
      )}

      <h2 className="slide12-title">Review & Submit</h2>

      {result && (
        <div
          className={`result-box ${
            result.prediction
              ? result.prediction.trim() === "Approved"
                ? "approved"
                : "rejected"
              : "error"
          }`}
        >
      {result.prediction ? (
  <div className="prediction-container">
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
          ? "prediction-approved"
          : "prediction-rejected"
      }
    >
      {result.prediction}
    </p>
  </div>
) : (
  <p className="prediction-error">{result.error}</p>
)}


        </div>
      )}


      {/* Styled JSON Preview */}
      <div className="form-preview-grid">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="form-row">
            <span className="form-key">{key.replace(/_/g, ' ')}</span>
            <span className="form-value">{value}</span>
          </div>
        ))}
      </div>

      <div className="button-row">
        <button onClick={onPrev} className="btn back-btn">
          Back
        </button>
        <button onClick={handleSubmit} className="btn submit-btn">
          Submit
        </button>
      </div>

     
{startResultVisible && csvData && (
  <div className="csv-result-box">
    <h3 className="csv-title">Model Evaluation Metrics:</h3>

    {/* Accuracy */}
    <div className="metric">
      <strong>Accuracy:</strong> {csvData.accuracy?.toFixed(4)}
    </div>

    {/* AUC-ROC */}
    <div className="metric">
      <strong>AUC-ROC:</strong> {csvData.auc_roc?.toFixed(4)}
    </div>

    {/* Confusion Matrix */}
    <div className="metric">
      <strong>Confusion Matrix:</strong>
      <table className="confusion-matrix">
        <tbody>
          {csvData.confusion_matrix.map((row, idx) => (
            <tr key={idx}>
              {row.map((val, i) => (
                <td key={i}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Classification Report */}
    <div className="metric">
      <strong>Classification Report:</strong>
      <table className="classification-table">
        <thead>
          <tr>
            <th>Label</th>
            <th>Precision</th>
            <th>Recall</th>
            <th>F1-Score</th>
            <th>Support</th>
          </tr>
        </thead>
        <tbody>
          {["0", "1", "macro avg", "weighted avg"].map((label) => (
            <tr key={label}>
              <td>{label}</td>
              <td>{csvData.classification_report[label]?.precision?.toFixed(3)}</td>
              <td>{csvData.classification_report[label]?.recall?.toFixed(3)}</td>
              <td>{csvData.classification_report[label]?.["f1-score"]?.toFixed(3)}</td>
              <td>{csvData.classification_report[label]?.support}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Feature Importance */}
    <div className="metric">
      <strong>Feature Importance:</strong>
      <ul className="feature-list">
        {csvData.feature_importance.map((val, idx) => (
          <li key={idx}>Feature {idx + 1}: {val.toFixed(4)}</li>
        ))}
      </ul>
    </div>

    {/* Sample Predictions */}
    <div className="metric">
      <strong>Sample Predictions:</strong>
      <ul className="sample-predictions">
        {csvData.sample_predictions.map((pred, idx) => (
          <li key={idx}>→ {pred.trim()}</li>
        ))}
      </ul>
    </div>
  </div>
)}

    </div>
  );
};

export default Slide12;
