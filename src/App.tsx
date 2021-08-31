// @ts-nocheck
import React, { useState, useEffect } from "react";
import { getRandomColor } from "./utils/getRandomColor";
import "./index.css";
import "./App.css";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [matrix, setMatrix] = useState([]);

  const handleChangeColor = (i, j) => {
    let M = [...matrix];
    console.log(i, j);
    M[i][j] = getRandomColor();
    if (i > 0) {
      M[i - 1][j] = getRandomColor();
      if (j > 0) {
        M[i - 1][j - 1] = getRandomColor();
      }
    }
    if (i < 9) {
      M[i + 1][j] = getRandomColor();
      if (j < 18) {
        M[i + 1][j + 1] = getRandomColor();
      }
    }

    if (j > 0) {
      M[i][j - 1] = getRandomColor();
      if (i < 9) {
        M[i + 1][j - 1] = getRandomColor();
      }
    }
    if (j < 18) {
      M[i][j + 1] = getRandomColor();
      if (i > 0) {
        M[i - 1][j + 1] = getRandomColor();
      }
    }
    setMatrix(M);
  };
  useEffect(() => {
    let arr = [];
    let totalArr = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 19; j++) {
        arr.push(getRandomColor());
      }
      totalArr.push(arr);
      arr = [];
    }
    setMatrix(totalArr);
  }, []);

  return (
    <>
      <div className="app">
        {matrix.map((x, i) => {
          return (
            <>
              <div className="app__row" key={i}>
                {x.map((y, j) => {
                  return (
                    <>
                      <div
                        key={j}
                        className="box"
                        onClick={() => {
                          handleChangeColor(i, j);
                        }}
                        style={{
                          backgroundColor: y,
                        }}
                      ></div>
                    </>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default App;
