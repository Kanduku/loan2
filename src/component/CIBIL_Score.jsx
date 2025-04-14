import React, { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const CIBIL_Score = ({ formData, onChange, onNext, onPrev }) => {
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(true);

  const score = parseInt(formData.cibil_score) || 0;

  useEffect(() => {
    if (!formData.cibil_score) {
      setMessage("");
      setIsValid(false);
    } else if (score < 300) {
      setMessage("CIBIL scores typically start at 300. Please enter a valid score.");
      setIsValid(false);
    } else if (score > 900) {
      setMessage("The maximum CIBIL score is 900. Please enter a valid score.");
      setIsValid(false);
    } else {
      setMessage("");
      setIsValid(true);
    }
  }, [score, formData.cibil_score]);

  return (
    <div className="slide1-wrapper animated-gradient">
      <div className="content-wrapper">
        {/* Title */}
        <h2 className="form-title">CIBIL Score</h2>

        {/* Lottie Animation */}
        <div className="lottie-container">
          <DotLottieReact
            src="https://lottie.host/119016e2-8aae-4e49-800a-ac90fe25c6d9/cfWQpGXZdA.lottie"
            loop
            autoplay
            style={{ width: 400, height: 400 }}
          />
        </div>

        {/* Error Message */}
        {message && (
          <p
            className="error-message"
            style={{
              color: "red",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            {message}
          </p>
        )}

        {/* Input Field */}
        <input
          type="number"
          value={formData.cibil_score}
          onChange={(e) => onChange("cibil_score", e.target.value)}
          className="input-field"
          placeholder="Enter CIBIL score (300 - 900)"
          min="300"
          max="900"
        />

        {/* Navigation Buttons */}
        <div className="button-group">
          <button onClick={onPrev} className="refresh-button">
            Back
          </button>
          <button onClick={onNext} className="next-button" disabled={!isValid}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CIBIL_Score;
