export const humanizeRound = (number, decimal = 0) =>
  (Math.floor(number * 10 ** decimal) / 10 ** decimal).toFixed(decimal);
