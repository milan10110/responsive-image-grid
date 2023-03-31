import React from "react";
import { IMAGE_DATA } from "../../imageData";

import "./pintrest-grid.styles.css";

const PintrestGrid = () => {
  const images = IMAGE_DATA;

  const imageWidth = 400;

  const calcSpan = (image) => {
    let value = 20;
    const { width, height } = image;

    const percentageOfWidth = (imageWidth * 100) / width;

    const calculatedHeight = (percentageOfWidth / 100) * height;

    value = Math.ceil(calculatedHeight / 10) + 2;

    return value;
  };

  return (
    <div
      className="container"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, ${imageWidth + 20}px)`,
        gridAutoRows: "10px",
      }}
    >
      {images.map((image) => (
        <div
          key={image.id}
          className="image-container"
          style={{ gridRowEnd: `span ${calcSpan(image)}` }}
        >
          <img className="images" src={image.urls?.small} alt="" />
        </div>
      ))}
    </div>
  );
};

export default PintrestGrid;
