import React, { useState } from "react";
import "./rotate-image.styles.scss";

export const RotateImage: React.FC = () => {
  const [rotateImg, setRotateImg] = useState<number>(90);
  const [heightImg, setHeightImg] = useState<number | null>(null);

  const handleRotate = () => {
    if (rotateImg >= 360) {
      setRotateImg(90);
      // setHeightImg(null);
      // return;
    } else {
      setRotateImg(rotateImg + 90);
    }
    const container: HTMLElement | null = document.getElementById("container");
    const img: HTMLImageElement | null = document.querySelector("img");
    if (img) {
      img.style.transform = `rotate(${rotateImg}deg)`;
    }
    if (container && img) {
      container.style.transform = `rotate(- ${rotateImg}deg)`;
      //   container.style.height = `${img.clientHeight}px`;
      setHeightImg(img.clientHeight);
    }
  };

  return (
    <div className="rootRotateImage">
      <div
        style={{
          height: rotateImg == 180 || rotateImg == 360 ? `${400}px` : ``,
          width: rotateImg == 180 || rotateImg == 360 ? `${heightImg}px` : "",
        }}
        id="container"
        className="container"
      >
        <div className="containerIcon ">
          <i onClick={handleRotate} className="fas fa-sync-alt iconImg"></i>
        </div>
        <img src="/random-image-02.jpg" alt="Random Image" />
      </div>
    </div>
  );
};
