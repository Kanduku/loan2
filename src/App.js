import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Number_of_Dependents from "./component/Number_of_Dependents";
import Education_level from "./component/Education_level";
import Self_Employed from "./component/Self_Employed";
import Annual_Income from "./component/Annual_Income";
import Loan_Amount from "./component/Loan_Amount";
import Loan_term from "./component/Loan_term";
import CIBIL_Score from "./component/CIBIL_Score";
import Residential_Assets from "./component/Residential_Assets";
import Commercial_Assets from "./component/Commercial_Assets";
import Luxury_Assets from "./component/Luxury_Assets";
import Bank_Asset from "./component/Bank_Asset";
import Slide12 from "./component/Slide12";
import Start from "./component/Start";
import ResultPage from "./component/ResultPage";
import CsvResultPage from "./component/CsvResultPage";

const slides = [
  Number_of_Dependents,
  Education_level,
  Self_Employed,
  Annual_Income,
  Loan_Amount,
  Loan_term,
  CIBIL_Score,
  Residential_Assets,
  Commercial_Assets,
  Luxury_Assets,
  Bank_Asset,
  Slide12,
];

const App = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [csvData, setCsvData] = useState(null);
  const [formData, setFormData] = useState({
    no_of_dependents: "",
    education: "",
    self_employed: "",
    income_annum: "",
    loan_amount: "",
    loan_term: "",
    cibil_score: "",
    residential_assets_value: 0,
    commercial_assets_value: 0,
    luxury_assets_value: 0,
    bank_asset_value: 0,
  });

  const handleChange = (field, value) => {
    console.log(`Field changed: ${field}, New value: ${value}`);
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
        <div className="w-full max-w-md p-4 bg-white rounded-xl shadow-lg">
          <Routes>
            <Route
              path="/"
              element={
                !hasStarted ? (
                  <Start
                    onStart={() => {
                      setHasStarted(true);
                      setCurrentSlide(0);
                    }}
                    setCsvData={setCsvData}
                  />
                ) : (
                  <CurrentSlideComponent
                    formData={formData}
                    onChange={handleChange}
                    onNext={handleNext}
                    onPrev={handlePrev}
                    csvData={csvData}
                  />
                )
              }
            />
            <Route
              path="/result"
              element={<ResultPage formData={formData} csvData={csvData} />}
            />
            <Route
              path="/csv-result"
              element={<CsvResultPage csvData={csvData} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
