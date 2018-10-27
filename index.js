// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
  let blocks = (streetNumber >= 42) ? (streetNumber - 42) : (42 - streetNumber);
  return blocks;
}
