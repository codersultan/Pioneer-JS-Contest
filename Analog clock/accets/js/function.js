/**
 * Clock rotetion rools by time
 * @param {Min, or Sec} time
 * @param {Current time} current
 * @returns
 */

function clockRools(time, current) {
  return (360 * current) / time;
}
