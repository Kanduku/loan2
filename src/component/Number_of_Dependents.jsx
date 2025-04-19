import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import "../css/Slide1.css";
import "../css/Number_of_Dependents.css";

const Number_of_Dependents = ({ formData, onChange, onNext }) => {
  const [loading, setLoading] = useState(true);
  const [rangeValue, setRangeValue] = useState(formData.no_of_dependents || 0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    onChange("no_of_dependents", rangeValue);
  }, [rangeValue, onChange]);

  return (
    <div className="slide1-wrapper animated-gradient">
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
          <p className="loading-text">Loading...</p>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="content-wrapper"
        >
          <h2 className="form-title">Number of Dependents</h2>

          <div className="lottie-container">
            <DotLottieReact
              src="https://lottie.host/c6501366-1882-4d3e-9d61-e79f337dae2a/vVSiURfQC4.lottie"
              loop
              autoplay
              style={{ height: 290 }}
            />
          </div>

          <input
            type="range"
            min="0"
            max="10"
            value={rangeValue}
            onChange={(e) => setRangeValue(Number(e.target.value))}
            className="range-slider"
          />
          <div className="range-value-display">
            {rangeValue === 0
              ? "0"
              : rangeValue === 15
              ? "15+"
              : ` ${rangeValue}`}
          </div>

          <div className="button-group">
            <button
              onClick={() => window.location.reload()}
              className="refresh-button"
            >
              Back
            </button>
            <button onClick={onNext} className="next-button">
              Next
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Number_of_Dependents;
