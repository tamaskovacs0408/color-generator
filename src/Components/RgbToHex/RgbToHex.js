function compToHex(comp) {
  var hex = comp.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
};

function RGBToHEX(r, g, b) {
  return '#' + compToHex(r) + compToHex(g) + compToHex(b);
}

export default RGBToHEX;
