import React from "react";
import propTypes from "prop-types";

const Statistics = ({ good, neutral, bad, onTotal, onPercentage }) => {
  return (
    <>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{onTotal}</p>
      <p>Positive feedback:{onPercentage}%</p>
    </>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  onTotal: propTypes.number.isRequired,
  onPercentage: propTypes.number.isRequired,
};

export default Statistics;
