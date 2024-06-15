import React from "react";
import "./rotate-image.styles.scss";

export const RotateImage: React.FC = () => {
  return (
    <div className="rootRotateImage">
      <div className="container">
        <i className="fas fa-sync-alt iconImg"></i>
        <img src="/random-image-01.jpg" alt="Random Image" />
      </div>
    </div>
  );
};
