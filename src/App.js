import { useState } from "react";
import "./App.css";

function App() {
  const [num, setnum] = useState(0);
  const [mode, setmode] = useState(true);
  const changemode = () => {
    setmode(!mode);
  };
  return (
    <>
      <div className={`body ${mode ? "soft" : "hard"} `}>
        <div className="Mode">
          <img
            onClick={changemode}
            className={`${mode ? "white" : "black"} `}
            id="sunmoon"
            src={`./images/${mode ? "moon" : "sun"}.png`}
            alt=""
          />
        </div>
        <div className={`center ${mode ? "white" : "black"} `}>
          <h1 className={`counter ${mode ? "light" : "dark"} `}>
            Counter {num}
          </h1>
          <button
            className={`add ${mode ? "slow white" : "fast black"} `}
            onClick={() => {
              setnum(num + 1);
            }}
          >
            {" "}
            Add
          </button>
          <button
            className={`minus ${mode ? "slow white" : "fast black"} `}
            onClick={() => {
              setnum(num - 1);
            }}
          >
            Sub
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
