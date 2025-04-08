import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Slide7 = ({ formData, onChange, onNext, onPrev }) => {
  return (
    <div className="slide1-wrapper">
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

        {/* Input Field */}
        <input
          type="number"
          value={formData.cibil_score}
          onChange={(e) => onChange("cibil_score", e.target.value)}
          className="input-field"
          placeholder="Enter CIBIL score"
        />

        {/* Navigation Buttons */}
        <div className="button-group">
          <button onClick={onPrev} className="refresh-button">
            Back
          </button>
          <button onClick={onNext} className="next-button">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slide7;
