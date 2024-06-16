import React from "react";
import { CustomInputText, CustomTooltip, RotateImage } from "./components";
import "./home.styles.scss";

export const HomePage: React.FC = () => {
  return (
    <div className="rootHomePage">
      <div className="containerHome">
        <h1>Home Page</h1>
        <details>
          <summary>Rotate Image</summary>
          <div className="containerRotate">
            <RotateImage />
          </div>
        </details>
        <details>
          <summary>Custom Text Input Styles</summary>
          <div className="containerInput">
            <CustomInputText />
          </div>
        </details>
        <details>
          <summary>Custom Tooltip</summary>
          <div className="containerInput">
            <CustomTooltip />
          </div>
        </details>
      </div>
    </div>
  );
};
