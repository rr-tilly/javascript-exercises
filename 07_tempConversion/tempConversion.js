const convertToCelsius = function (temp) {
  let tempF = ((temp - 32) * 5) / 9;
  return Number(tempF.toFixed(1));

};

const convertToFahrenheit = function (temp) {
  let tempC = (temp * 9) / 5 + 32;
  return Number(tempC.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
