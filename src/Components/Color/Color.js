import React, { useState, useEffect } from "react";
import RGBtoHEX from "../RgbToHex/RgbToHex.js";

const Color = ({ rgb, weight, type, hexColor }) => {
  const [copyinfo, setCopyinfo] = useState(false);
  const hex = RGBtoHEX(...rgb).toUpperCase();
  const hexValue = `#${hexColor}`; // Set this to the inline style backgroundColor

  useEffect(() => {
    setTimeout(() => {
      setCopyinfo(false)
    }, 2000)
  }, [copyinfo])

  return (
    <div
      className={`color ${type === "tint" ? "tint" : "shade"} `}
      style={{ backgroundColor: `${hexValue}` }}
      onClick={() => {
        setCopyinfo(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <span className="percent_value">{weight}%</span>
      <span className="color_value">{hex}</span>
      {copyinfo && <span className="copied" > HEX code copied</span>}
    </div>
  );
};

export default Color;
// 
