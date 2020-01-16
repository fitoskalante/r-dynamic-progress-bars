import React, { useState, useEffect } from "react";
import "./App.scss";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Loader from "./components/Loader/Loader";
import Button from "./components/Button/Button";
import SelectBar from "./components/SelectBar/SelectBar";
import {Animated} from "react-animated-css";

function App() {
  const [bars, setBars] = useState([]);
  const [limit, setLimit] = useState(0);
  const [buttons, setButtons] = useState([]);
  const [ammounts, setAmmounts] = useState([]);
  const [selectedBar, setSelectedBar] = useState("0");

  const getEndpoint = async () => {
    const res = await fetch("https://pb-api.herokuapp.com/bars");
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
        <Animated className='App' animationIn="pulse" animationInDuration={500} isVisible={true}>

        <h1 className="title">Dynamic Bars</h1>
        {limit === 0 ? (
          <Loader />
          
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
    <Animated animationIn="pulse" animationInDuration={500} isVisible={true}>
            <div>
              {buttons.map((value, index) => (
                <Button
                  key={index}
                  onClick={() => handleOperation(value)}
                  value={value}
                />
              ))}
            </div>
            </Animated>

            <SelectBar
              selectedBar={selectedBar}
              setSelectedBar={setSelectedBar}
              bars={bars}
            />
          </>
        )}

        </Animated>
    </>
  );
}

export default App;
