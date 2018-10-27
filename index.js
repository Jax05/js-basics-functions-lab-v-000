// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
  let blocks = (streetNumber >= 42) ? (streetNumber - 42) : (42 - streetNumber);
  return blocks;
}

function distanceFromHqInFeet(streetNumber) {
  return 264 * distanceFromHqInBlocks(streetNumber);
}

function distanceTravelledInFeet(startingStreet, endingStreet) {
  let blocks;
  if (startingStreet < endingStreet) {
    blocks = endingStreet - startingStreet;
  } else {
    blocks = startingStreet - endingStreet;
  }
  return 264 * blocks;
}