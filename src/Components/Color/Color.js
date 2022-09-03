import React, { useState, useEffect } from 'react';
import RgbToHex from '../RgbToHex/RgbToHex';

const Color = ({rgb, pcValue, idx, hexColor}) => {
  const [alert, setAlert] = useState(false);
  const rgbStr = rgb.join('');
  const hex = RgbToHex(...rgb);
  const hexValue = `#${hexColor}`;


  return (
    <div className={`color ${idx} > 10 && 'color-light`}></div>
  )
}

export default Color;