import React, { useState, useEffect } from "react";
import RGBtoHEX from '../RgbToHex/RgbToHex.js';

const Color = ({ rgb, weight, index, type, hexColor }) => {
  const [copyinfo, setCopyinfo] = useState(false);
  const hex = RGBtoHEX(...rgb);
  const hexValue = `#${hexColor}`; // Set this to the inline style backgroundColor

  return (
    <div className={`color ${(type === 'tint' ? 'tint' : 'shade')} `} style={{ backgroundColor: `${hexValue}` }}>
      <p className="percent_value">{weight}%</p>
      <p className="color_value">{hex}</p>
    </div>
  );
};

export default Color;
 // ${index > 10 && 'type-tint'}