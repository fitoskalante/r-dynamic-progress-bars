import React, { useState, useEffect } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [selectedBar, setSelectedBar] = useState(0);
  const [progress, setProgress] = useState(0);
  const [buttons, setButtons] = useState([]);
  const [bars, setBars] = useState([]);
  const [limit, setLimit] = useState(0);

  const getEndpoint = async () => {
    const res = await fetch("http://pb-api.herokuapp.com/bars");
    const data = await res.json();
    setButtons(data.buttons);
    setBars(data.bars);
    setLimit(data.limit);
  };

  const getPercentage = value => {
    if (limit > 0) {
      const percentage = (value * 100) / limit;
      console.log("percentage", percentage);
    }
  };

  useEffect(() => {
    getEndpoint();
  }, []);
  console.log("ok", buttons, bars, selectedBar);
  return (
    <>
      <div className="App">
        {!buttons ? (
          <h1>Loading ...</h1>
        ) : (
          <>
            <h3>Max: {limit}</h3>

            {bars.map((bar, index) => (
              <ProgressBar key={index} progress={bar} />
            ))}

            <select
              value={selectedBar}
              onChange={e => setSelectedBar(e.target.value)}
            >
              {bars.map((bar, index) => (
                <option key={index} value={index}>
                  Progress Bar {index + 1}
                </option>
              ))}
            </select>

            <div className="">
              {buttons.map((b, index) => (
                <button key={index} onClick={() => getPercentage(b)}>
                  {b}{" "}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
