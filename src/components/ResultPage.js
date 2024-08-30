import React from "react";
import "./ResultPage.css";
import { FaCheckCircle, FaTimesCircle, FaEye } from "react-icons/fa";

function ResultPage() {
  return (
    <div className="result-page" id="Results">
      <div className="result-summary">
        <h2 className="result-title">Analysis Results</h2>
        <p className="result-description">
          Your uploaded content has been analyzed. Below is a summary of the
          findings
        </p>
      </div>
      <div className="result-details">
        <div className="result-item manipulated">
          <FaTimesCircle className="result-icon danger" />
          <div className="result-text">
            <center>
              <h3>Manipulated Content</h3>
              <p>
                This content shows signs of manipulation or deepfake techniques.
              </p>
            </center>
          </div>
        </div>
        <div className="result-item authentic">
          <FaCheckCircle className="result-icon success" />
          <div className="result-text">
            <center>
              <h3>Authentic Content</h3>
              <p>
                The content appears to be authentic with no signs of
                manipulation.
              </p>
            </center>
          </div>
        </div>
      </div>
      <div className="result-action">
        <button className="view-report-btn">
          <FaEye className="button-icon" /> Show Full Report
        </button>
      </div>
    </div>
  );
}

export default ResultPage;
