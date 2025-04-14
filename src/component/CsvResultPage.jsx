import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // import this
import axios from "axios";
import "./../css/csvResultPage.css";  // Updated CSS file

const CsvResultPage = () => {
  const [csvData, setCsvData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate(); // initialize it

  useEffect(() => {
    const fetchCsvData = async () => {
      try {
        const response = await axios.get("https://loan-approval-h5dw.onrender.com/api/csv-data/");
        setCsvData(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Unable to fetch evaluation data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCsvData();
  }, []);

  if (loading) return <p className="loading-center">Loading evaluation metrics...</p>;
  if (error) return <p className="loading-center" style={{ color: "red" }}>{error}</p>;
  if (!csvData) return <p className="loading-center">No evaluation data available.</p>;

  return (
    <div className="csv-result-box">
      <h2 className="csv-result-title"> Model Evaluation Metrics</h2>

      <div className="metric">
        <strong>Accuracy:</strong> {(csvData.accuracy * 100).toFixed(2)}%
      </div>

      <div className="metric">
        <strong>AUC-ROC:</strong> {csvData.auc_roc?.toFixed(4)}
      </div>

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

    \

      <div className="metric">
        <strong>Sample Predictions:</strong>
        <ul className="sample-predictions">
          {csvData.sample_predictions.map((pred, idx) => (
            <li key={idx}>→ {pred.trim()}</li>
          ))}
        </ul>
      </div>

      <div className="back-btn-container">
        <button onClick={() => navigate(-1)} className="back-btn">
          ← Back
        </button>
      </div>
    </div>
  );
};

export default CsvResultPage;
