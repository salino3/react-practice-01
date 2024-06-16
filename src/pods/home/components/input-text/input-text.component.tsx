import React from "react";
import "./input-text.styles.scss";

export const CustomInputText: React.FC = () => {
  return (
    <div className="rootCustomInputText">
      <div className="containerTitle">
        <h2>Custom Text Input</h2>
      </div>
      <div className="containerInput">
        <input
          type="text"
          id="city"
          placeholder="What city  do you live?"
          className="inputText"
          name="city"
        />
      </div>
    </div>
  );
};
