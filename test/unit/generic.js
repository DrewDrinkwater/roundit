/*jshint esversion: 6 */
/*eslint no-var: "error"*/
/*eslint-env es6*/

'use strict';

let expect = require('chai').expect;
let round = require('./../../index');

describe('round.js generic nearest tests:', function () {
  it('nearest rounds 123.123 to 123.12 at 2dp', function () {
    expect(round.nearest(123.123, 2)).to.equal(123.12);
  });

  for (let i = 0; i <= 6; i++) {

    let expectedResult = Number('123456789.' + '123123123'.substring(0, i));

    it('nearest rounds 123456789.123123123 at ' + i + 'dp correctly to ' + expectedResult, function () {
      expect(round.nearest(123456789.123123123, i)).to.equal(expectedResult);
    });
  }

  for (let i = 0; i <= 6; i++) {

    let expectedResult = -Number('123456789.' + '123123123'.substring(0, i));

    it('nearest rounds -123456789.123123123 at ' + i + 'dp correctly to ' + expectedResult, function () {
      expect(round.nearest(-123456789.123123123, i)).to.equal(expectedResult);
    });
  }

  for (let i = 0; i <= 6; i++) {
    let expectedResult = i === 0 ? 123456790 : Number('123456789.' + '666666666'.substring(0, i - 1) + '7');

    it('nearest rounds 123456789.666666666 at ' + i + 'dp correctly to ' + expectedResult, function () {
      expect(round.nearest(123456789.666666666, i)).to.equal(expectedResult);
    });
  }

  for (let i = 0; i <= 6; i++) {
    let expectedResult = i === 0 ? -123456790 : -Number('123456789.' + '666666666'.substring(0, i - 1) + '7');

    it('nearest rounds -123456789.666666666 at ' + i + 'dp correctly to ' + expectedResult, function () {
      expect(round.nearest(-123456789.666666666, i)).to.equal(expectedResult);
    });
  }
});

describe('round.js basic floor tests:', function () {
  for (let i = 0; i <= 6; i++) {
    let expectedResult = Number('123456789.' + '666666666'.substring(0, i));

    it('floor rounds 123456789.666666666 at ' + i + 'dp correctly to ' + expectedResult, function () {
      expect(round.floor(123456789.666666666, i)).to.equal(expectedResult);
    });
  }

  for (let i = 0; i <= 6; i++) {
    let expectedResult = i === 0 ? -123456790 : -Number('123456789.' + '666666666'.substring(0, i - 1) + '7');

    it('floor rounds -123456789.666666666 at ' + i + 'dp correctly to ' + expectedResult, function () {
      expect(round.floor(-123456789.666666666, i)).to.equal(expectedResult);
    });
  }
});

describe('round.js basic ceil tests:', function () {
  for (let i = 0; i <= 6; i++) {
    let expectedResult = i === 0 ? 123456790 : Number('123456789.' + '666666666'.substring(0, i - 1) + '7');

    it('ceil rounds 123456789.666666666 at ' + i + 'dp correctly to ' + expectedResult, function () {
      expect(round.ceil(123456789.666666666, i)).to.equal(expectedResult);
    });
  }
  for (let i = 0; i <= 6; i++) {
    let expectedResult = -Number('123456789.' + '666666666'.substring(0, i));

    it('ceil rounds -123456789.666666666 at ' + i + 'dp correctly to ' + expectedResult, function () {
      expect(round.ceil(-123456789.666666666, i)).to.equal(expectedResult);
    });
  }
});
describe('round.js basic fix tests:', function () {

  for (let i = 0; i <= 6; i++) {
    let expectedResult = Number('123456789.' + '666666666'.substring(0, i));

    it('fix rounds 123456789.666666666 at ' + i + 'dp correctly to ' + expectedResult, function () {
      expect(round.fix(123456789.666666666, i)).to.equal(expectedResult);
    });
  }

  for (let i = 0; i <= 6; i++) {
    let expectedResult = -Number('123456789.' + '666666666'.substring(0, i));

    it('fix rounds -123456789.666666666 at ' + i + 'dp correctly to ' + expectedResult, function () {
      expect(round.fix(-123456789.666666666, i)).to.equal(expectedResult);
    });
  }
});
describe('round.js basic infinite tests:', function () {
  for (let i = 0; i <= 6; i++) {
    let expectedResult = i === 0 ? 123456790 : Number('123456789.' + '666666666'.substring(0, i - 1) + '7');

    it('infinite rounds 123456789.666666666 at ' + i + 'dp correctly to ' + expectedResult, function () {
      expect(round.infinite(123456789.666666666, i)).to.equal(expectedResult);
    });
  }
  for (let i = 0; i <= 6; i++) {
    let expectedResult = i === 0 ? -123456790 : -Number('123456789.' + '666666666'.substring(0, i - 1) + '7');

    it('infinite rounds -123456789.666666666 at ' + i + 'dp correctly to ' + expectedResult, function () {
      expect(round.infinite(-123456789.666666666, i)).to.equal(expectedResult);
    });
  }
});
