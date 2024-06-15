import React, { useState } from "react";
import "./rotate-image.styles.scss";

export const RotateImage: React.FC = () => {
  const [rotateImg, setRotateImg] = useState(90);

  const handleRotate = () => {
    setRotateImg(rotateImg + 90);
    const img: HTMLImageElement | null = document.querySelector("img");
    if (img) {
      img.style.transform = `rotate(${rotateImg}deg)`;
    }
  };

  return (
    <div className="rootRotateImage">
      <div className="container">
        <div className="containerIcon ">
          <i onClick={handleRotate} className="fas fa-sync-alt iconImg"></i>
        </div>
        <img src="/random-image-02.jpg" alt="Random Image" />
      </div>
    </div>
  );
};
