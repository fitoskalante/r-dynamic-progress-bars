import React from "react";
import "./SelectBar.css";

export default function SelectBar({ selectedBar, setSelectedBar, bars }) {
  return (
    <>
      <label className="label-style">Select Bar:</label>
      <div className="select-style">
        <select
          value={selectedBar}
          onChange={e => setSelectedBar(e.target.value)}
        >
          {bars.map((bar, index) => (
            <option key={index} value={index}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
