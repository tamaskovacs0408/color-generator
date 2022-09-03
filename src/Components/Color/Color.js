import React, { useState, useEffect } from "react";
import RGBtoHEX from '../RgbToHex/RgbToHex.js';

const Color = ({ rgb, weight, index, type, hexColor }) => {
  const [copyinfo, setCopyinfo] = useState(false);
  //const bgColor = rgb.join(","); // the rgb value for the background color
  const hex = RGBtoHEX(...rgb);
  const hexValue = `#${hexColor}`;

  return (
    <div className={`color ${(type === 'tint' ? 'shade' : 'tint')} `} style={{ backgroundColor: `${hexValue}` }}>
      <p className="percent_value">{weight}%</p>
      <p className="color_value">{hex}</p>
    </div>
  );
};

export default Color;
 // ${index > 10 && 'type-tint'}