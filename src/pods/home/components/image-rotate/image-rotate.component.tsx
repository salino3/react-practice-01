import React, { useEffect, useState } from "react";
import "./rotate-image.styles.scss";

export const RotateImage: React.FC = () => {
  const [rotateImg, setRotateImg] = useState<number>(90);
  const [heightImg, setHeightImg] = useState<number | null>(null);
  const [widthtImg, setWidthtImg] = useState<number | null>(null);
  const [instructionText, setInstructionText] = useState<string>(
    "(hover over the image)"
  );

  const handleRotate = () => {
    if (rotateImg >= 360) {
      setRotateImg(90);
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
      setHeightImg(img.clientHeight);
      setWidthtImg(img.clientWidth);
    }
  };

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isIPad = /ipad/.test(userAgent);
    const isIPadPro = /macintosh/.test(userAgent) && "ontouchend" in document;
    const isTablet =
      /ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(
        userAgent
      );

    const isMobile =
      /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm|ipad|tablet/i.test(
        userAgent
      );
    if (isMobile || isIPad || isIPadPro || isTablet) {
      setInstructionText("(click on the image)");
    } else {
      setInstructionText("(hover over the image)");
    }
  }, []);

  return (
    <div className="rootRotateImage">
      <h2>Rotate Image</h2>
      <p>{instructionText}</p>
      <div
        style={{
          height: rotateImg == 180 || rotateImg == 360 ? `${widthtImg}px` : ``,
          width: rotateImg == 180 || rotateImg == 360 ? `${heightImg}px` : "",
        }}
        id="container"
        className="container"
      >
        <div className="containerIcon ">
          <i onClick={handleRotate} className="fas fa-sync-alt iconImg"></i>
        </div>
        <img src="/public/random-image-02.jpg" alt="Random Image" />
      </div>
    </div>
  );
};
