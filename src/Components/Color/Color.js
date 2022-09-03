import React, { useState, useEffect } from "react";
import RGBtoHEX from '../RgbToHex/RgbToHex.js';

const Color = ({ rgb, weight, index, hexColor }) => {
  const [copyinfo, setCopyinfo] = useState(false);
  //const bgColor = rgb.join(","); // the rgb value for the background color
  const hex = RGBtoHEX(...rgb);
  const hexValue = `#${hexColor}`;

  return (
    <div className={`color`} style={{ backgroundColor: `${hexValue}` }}>
      <p className="percent_value">{weight}%</p>
      <p className="color_value">{hexValue}</p>
    </div>
  );
};

export default Color;
