import React, { useState, useEffect } from "react";
import RGBtoHEX from '../RgbToHex/RgbToHex.js';

const Color = ({ rgb, weight, type, hexColor }) => {
  const [copyinfo, setCopyinfo] = useState(false);
  const hex = RGBtoHEX(...rgb).toUpperCase();
  const hexValue = `#${hexColor}`; // Set this to the inline style backgroundColor

  return (
    <div className={`color ${(type === 'tint' ? 'tint' : 'shade')} `} style={{ backgroundColor: `${hexValue}` }}>
      <span className="percent_value">{weight}%</span>
      <span className="color_value">{hex}</span>
    </div>
  );
};

export default Color;
 // ${index > 10 && 'type-tint'}