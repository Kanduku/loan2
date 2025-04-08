import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Slide4 = ({ formData, onChange, onNext, onPrev }) => {
  return (
    <div className="slide1-wrapper">
      <div className="content-wrapper">
        {/* Title */}
        <h2 className="form-title">Annual Income (₹)</h2>

        {/* Lottie Animation */}
        <div className="lottie-container">
          <DotLottieReact
            src="https://lottie.host/5d5b9435-f489-42f7-977c-440265beb236/KxNxyiG97L.lottie"
            loop
            autoplay
            style={{ width: 400, height: 400 }}
          />
        </div>

        {/* Income Input */}
        <input
          type="number"
          value={formData.income_annum}
          onChange={(e) => onChange("income_annum", e.target.value)}
          className="input-field"
          placeholder="Enter your annual income"
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

export default Slide4;
