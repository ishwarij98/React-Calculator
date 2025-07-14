import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("");

  const appendToDisplay = (value) => {
    setDisplay((prev) => prev + value);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error");
    }
  };

  const btnStyle =
    "bg-[#1e1e2f] text-cyan-300 text-xl font-semibold p-4 rounded-lg shadow hover:bg-[#2c2c44] transition";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <div className="bg-[#111827] p-6 rounded-3xl shadow-2xl w-80 border border-cyan-600">
        <h1 className="text-center text-3xl text-cyan-300 font-bold mb-4">
          ⚡ React Calculator
        </h1>
        <input
          type="text"
          value={display}
          className="w-full text-right text-2xl p-3 mb-4 rounded-lg bg-[#1f2937] text-white border border-cyan-600"
          disabled
        />
        <div className="grid grid-cols-4 gap-2">
          <button className={`${btnStyle} text-red-400`} onClick={clearDisplay}>
            C
          </button>
          <button className={btnStyle} onClick={() => appendToDisplay("(")}>
            (
          </button>
          <button className={btnStyle} onClick={() => appendToDisplay(")")}>
            )
          </button>
          <button
            className={`${btnStyle} text-yellow-400`}
            onClick={() => appendToDisplay("/")}
          >
            ÷
          </button>
          <button className={btnStyle} onClick={() => appendToDisplay("7")}>
            7
          </button>
          <button className={btnStyle} onClick={() => appendToDisplay("8")}>
            8
          </button>
          <button className={btnStyle} onClick={() => appendToDisplay("9")}>
            9
          </button>
          <button
            className={`${btnStyle} text-yellow-400`}
            onClick={() => appendToDisplay("*")}
          >
            ×
          </button>
          <button className={btnStyle} onClick={() => appendToDisplay("4")}>
            4
          </button>
          <button className={btnStyle} onClick={() => appendToDisplay("5")}>
            5
          </button>
          <button className={btnStyle} onClick={() => appendToDisplay("6")}>
            6
          </button>
          <button
            className={`${btnStyle} text-yellow-400`}
            onClick={() => appendToDisplay("-")}
          >
            −
          </button>
          <button className={btnStyle} onClick={() => appendToDisplay("1")}>
            1
          </button>
          <button className={btnStyle} onClick={() => appendToDisplay("2")}>
            2
          </button>
          <button className={btnStyle} onClick={() => appendToDisplay("3")}>
            3
          </button>
          <button
            className={`${btnStyle} text-yellow-400`}
            onClick={() => appendToDisplay("+")}
          >
            +
          </button>
          <button
            className={`${btnStyle} col-span-2`}
            onClick={() => appendToDisplay("0")}
          >
            0
          </button>
          <button className={btnStyle} onClick={() => appendToDisplay(".")}>
            .
          </button>
          <button
            className={`${btnStyle} bg-green-500 text-black hover:bg-green-400`}
            onClick={calculate}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
