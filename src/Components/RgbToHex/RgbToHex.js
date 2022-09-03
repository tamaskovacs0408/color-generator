function compToHex(comp) {
  let hex = comp.toString(16);

  return hex.length === 1 ? '0' + hex : hex;
};

function RgbToHex(r, g, b) {
  return '#' + compToHex(r) + compToHex(g) + compToHex(b);
}

export default RgbToHex;
