import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Nav = ({ onPrevious, onNext, onshowAnswer, showAnswer }) => {
  return (
    <div className="nav">
      <button onClick={onPrevious}>
        <FiChevronLeft style={{ marginRight: "0.5rem" }} />
        Previous
      </button>
      <button onClick={onshowAnswer}>
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>
      <button onClick={onNext}>
        Next
        <FiChevronRight style={{ marginLeft: "0.5rem" }} />
      </button>
    </div>
  );
};

export default Nav;
