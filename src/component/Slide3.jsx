import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Slide3 = ({ formData, onChange, onNext, onPrev }) => {
  return (
    <div className="slide1-wrapper">
      <div className="content-wrapper">
        {/* Title */}
        <h2 className="form-title">Self Employed</h2>

        {/* Lottie Animation */}
        <div className="lottie-container">
          <DotLottieReact
            src="https://lottie.host/01ee11c1-d237-4db5-ad9c-82534282a6c2/z6vMLIvTCZ.lottie"
            loop
            autoplay
            style={{ width: 390, height: 390 }}
          />
        </div>

        {/* Dropdown input */}
        <select
          value={formData.self_employed}
          onChange={(e) => onChange("self_employed", e.target.value)}
          className="input-field"
        >
          <option value="">Select employment status</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        {/* Buttons */}
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

export default Slide3;
