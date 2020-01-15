import React, { useState, useEffect } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [bars, setBars] = useState([]);
  const [limit, setLimit] = useState(0);
  const [buttons, setButtons] = useState([]);
  const [ammounts, setAmmounts] = useState([]);
  const [selectedBar, setSelectedBar] = useState("0");

  const getEndpoint = async () => {
    const res = await fetch("http://pb-api.herokuapp.com/bars");
    const data = await res.json();
    setLimit(data.limit);
    setAmmounts(data.bars);
    setButtons(data.buttons);
    setBars(data.bars.map(b => (b * 100) / data.limit));
  };

  const handleOperation = value => {
    let updatedBars = [...bars];
    let updatedAmmounts = [...ammounts];
    if (limit > 0) {
      const percentage = (value * 100) / limit;
      if (value > 0) {
        updatedAmmounts[selectedBar] = updatedAmmounts[selectedBar] + value;
        updatedBars[selectedBar] = updatedBars[selectedBar] + percentage;
        setBars(updatedBars);
        setAmmounts(updatedAmmounts);
      } else {
        updatedBars[selectedBar] =
          updatedBars[selectedBar] - Math.abs(percentage);
        updatedAmmounts[selectedBar] =
          updatedAmmounts[selectedBar] - Math.abs(value);

        if (updatedBars[selectedBar] < 0) {
          updatedBars[selectedBar] = 0;
          updatedAmmounts[selectedBar] = 0;
          setBars(updatedBars);
          setAmmounts(updatedAmmounts);
        }
        setBars(updatedBars);
        setAmmounts(updatedAmmounts);
      }
    }
  };

  useEffect(() => {
    getEndpoint();
  }, []);

  return (
    <>
      <div className="App">
        <h1 className="title">Dynamic Bars</h1>
        {limit === 0 ? (
          <div className="loader"></div>
        ) : (
          <>
            <h3>Max: {limit}</h3>

            {bars.map((bar, index) => (
              <ProgressBar
                key={index}
                idx={index}
                selectedBar={selectedBar}
                ammount={ammounts[index]}
                progress={Math.round(bar)}
              />
            ))}

            <div>
              {buttons.map((b, index) => (
                <button key={index} onClick={() => handleOperation(b)}>
                  {b}{" "}
                </button>
              ))}
            </div>

            <label>Select Bar:</label>
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
        )}
      </div>
    </>
  );
}

export default App;
