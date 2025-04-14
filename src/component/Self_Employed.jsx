import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "../css/Slide1.css";

const Self_Employed = ({ formData, onChange, onNext, onPrev }) => {
  return (
    <div className="slide1-wrapper animated-gradient">
      <div className="content-wrapper">
        {/* Title */}
        <h2 className="form-title">Self Employed</h2>

        {/* Info Text */}
        <p className="info-text">
          Please select your employment status from the options below:
        </p>

        {/* Lottie Animation */}
        <div className="lottie-container">
          <DotLottieReact
            src="https://lottie.host/01ee11c1-d237-4db5-ad9c-82534282a6c2/z6vMLIvTCZ.lottie"
            loop
            autoplay
            style={{ height: 290 }}
          />
        </div>

        {/* Radio Buttons */}
        <div className="radio-group">
          <label className="radio-option">
            <input
              type="radio"
              name="self_employed"
              value="Yes"
              checked={formData.self_employed === "Yes"}
              onChange={(e) => onChange("self_employed", e.target.value)}
            />
            Yes
          </label>
          <label className="radio-option">
            <input
              type="radio"
              name="self_employed"
              value="No"
              checked={formData.self_employed === "No"}
              onChange={(e) => onChange("self_employed", e.target.value)}
            />
            No
          </label>
        </div>

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

export default Self_Employed;
