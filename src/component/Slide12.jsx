import React from "react";
import { useNavigate } from "react-router-dom";
import "./../css/slide2.css";

const Slide12 = ({ formData, onPrev }) => {
  const navigate = useNavigate();

  return (
    <div className="slide12-wrapper animated-gradient">
      <h2 className="slide12-title">Review & Submit</h2>

      <div className="form-preview-grid">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="form-row">
            <span className="form-key">{key.replace(/_/g, " ")}</span>
            <span className="form-value">{value}</span>
          </div>
        ))}
      </div>

      <div className="button-row">
        <button onClick={onPrev} className="btn back-btn">
          Back
        </button>
        <button
          onClick={() => navigate("/result")}
          className="btn submit-btn"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Slide12;
