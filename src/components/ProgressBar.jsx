import React from "react";

function ProgressBar({ progress, currentIdx, totalQuestions }) {
  const roundedProgress = Math.round(progress); // só arredonda inteiro

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar-fill"
        style={{ width: `${roundedProgress}%` }}
      />
      <div className="progress-text">{roundedProgress}%</div>
      <div className="progress-count">
        {currentIdx} of {totalQuestions}
      </div>
    </div>
  );
}

export default ProgressBar;
