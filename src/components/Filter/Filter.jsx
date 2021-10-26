import React from "react";
import PropTypes from "prop-types";
import cs from "./Filter.module.css";

export default function Filter({ value, onFilter }) {
  return (
    <div className={cs.filterContainer}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
