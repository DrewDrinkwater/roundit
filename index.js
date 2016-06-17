/*jshint esversion: 6 */
/*eslint no-var: "error"*/
/*eslint-env es6*/

'use strict';

module.exports = {
  nearest(value, precision) {
    return round('N', value, precision);
  },
  ceil(value, precision) {
    return round('C', value, precision);
  },
  floor(value, precision) {
    return round('F', value, precision);
  },
  fix(value, precision) {
    return round('Z', value, precision);
  },
  infinite(value, precision) {
    return round('I', value, precision);
  }
};

function round(type, value, precision) {

  let returnValue;

  let divisor = Math.pow(10, precision);

  switch (type) {
    case 'N':
      returnValue = Math.round(value * divisor) / divisor;
      break;
    case 'C':
      returnValue = (Math.round((value * divisor) + 0.5)) / divisor;
      break;
    case 'F':
      returnValue = (Math.round((value * divisor) - 0.5)) / divisor;
      break;
    case 'Z':
      if (value < 0) {
        returnValue = round('C', value, precision);
      }
      else {
        returnValue = round('F', value, precision);
      }
      break;
    case 'I':
      if (value > 0) {
        returnValue = round('C', value, precision);
      }
      else {
        returnValue = round('F', value, precision);
      }
      break;
    default:
      returnValue = value;
  }

  return fixUpBadMaths(returnValue,value,divisor);
}

function fixUpBadMaths(returnValue,value,divisor)
{
  if ((returnValue * divisor - value * divisor) >= 1) {
    returnValue = ((returnValue * divisor) - 1) / divisor;
  }
  if ((returnValue * divisor - value * divisor) <= -1) {
    returnValue = ((returnValue * divisor) + 1) / divisor;
  }
  return returnValue;
}