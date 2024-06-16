import React, { useState } from "react";
import "./input-text.styles.scss";

export const CustomInputText: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="rootCustomInputText">
      <div className="containerTitle">
        <h2>Custom Text Input</h2>
      </div>
      <div className="containerInput">
        <input
          type="text"
          id="city"
          className="inputText"
          name="city"
          value={inputValue}
          onChange={handleChange}
        />
        <label
          htmlFor="city"
          className={`inputLabel ${inputValue ? "shrink" : ""}`}
        >
          What city do you live?
        </label>
      </div>
    </div>
  );
};
