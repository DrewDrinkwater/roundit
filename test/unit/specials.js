/*jshint esversion: 6 */
/*eslint no-var: "error"*/
/*eslint-env es6*/

'use strict';

let expect = require('chai').expect;
let round = require('./../../index');

describe('round.js specific nearest tests:', function () {
    it('nearest rounds 5.125 to 5.13 at 2dp', function () {
        expect(round.nearest(5.125, 2)).to.equal(5.13);
    });
    it('nearest rounds 5.1249999 to 5.12 at 2dp', function () {
        expect(round.nearest(5.1249999, 2)).to.equal(5.12);
    });
    it('nearest rounds 5.1250001 to 5.13 at 2dp', function () {
        expect(round.nearest(5.1250001, 2)).to.equal(5.13);
    });
    it('nearest rounds -5.125 to -5.12 at 2dp', function () {
        expect(round.nearest(-5.125, 2)).to.equal(-5.12);
    });
    it('nearest rounds -5.1249999 to -5.12 at 2dp', function () {
        expect(round.nearest(-5.1249999, 2)).to.equal(-5.12);
    });
    it('nearest rounds -5.1250001 to -5.13 at 2dp', function () {
        expect(round.nearest(-5.1250001, 2)).to.equal(-5.13);
    });
});

describe('round.js specific ceil tests:', function () {
    it('ceil rounds 5.125 to 5.13 at 2dp', function () {
        expect(round.ceil(5.125, 2)).to.equal(5.13);
    });
    it('ceil rounds 5.1249999 to 5.13 at 2dp', function () {
        expect(round.ceil(5.1249999, 2)).to.equal(5.13);
    });
    it('ceil rounds 5.1250001 to 5.13 at 2dp', function () {
        expect(round.ceil(5.1250001, 2)).to.equal(5.13);
    });
    it('ceil rounds -5.125 to -5.12 at 2dp', function () {
        expect(round.ceil(-5.125, 2)).to.equal(-5.12);
    });
    it('ceil rounds -5.1249999 to -5.12 at 2dp', function () {
        expect(round.ceil(-5.1249999, 2)).to.equal(-5.12);
    });
    it('ceil rounds -5.1250001 to -5.12 at 2dp', function () {
        expect(round.ceil(-5.1250001, 2)).to.equal(-5.12);
    });
});

describe('round.js specific floor tests:', function () {
    it('floor rounds 5.125 to 5.12 at 2dp', function () {
        expect(round.floor(5.125, 2)).to.equal(5.12);
    });
    it('floor rounds 5.1249999 to 5.12 at 2dp', function () {
        expect(round.floor(5.1249999, 2)).to.equal(5.12);
    });
    it('floor rounds 5.1250001 to 5.12 at 2dp', function () {
        expect(round.floor(5.1250001, 2)).to.equal(5.12);
    });
    it('floor rounds -5.125 to -5.13 at 2dp', function () {
        expect(round.floor(-5.125, 2)).to.equal(-5.13);
    });
    it('floor rounds -5.1249999 to -5.13 at 2dp', function () {
        expect(round.floor(-5.1249999, 2)).to.equal(-5.13);
    });
    it('floor rounds -5.1250001 to -5.13 at 2dp', function () {
        expect(round.floor(-5.1250001, 2)).to.equal(-5.13);
    });
});

describe('round.js specific fix tests:', function () {
    it('fix rounds 5.125 to 5.12 at 2dp', function () {
        expect(round.fix(5.125, 2)).to.equal(5.12);
    });
    it('fix rounds 5.1249999 to 5.12 at 2dp', function () {
        expect(round.fix(5.1249999, 2)).to.equal(5.12);
    });
    it('fix rounds 5.1250001 to 5.12 at 2dp', function () {
        expect(round.fix(5.1250001, 2)).to.equal(5.12);
    });
    it('fix rounds -5.125 to -5.12 at 2dp', function () {
        expect(round.fix(-5.125, 2)).to.equal(-5.12);
    });
    it('fix rounds -5.1249999 to -5.12 at 2dp', function () {
        expect(round.fix(-5.1249999, 2)).to.equal(-5.12);
    });
    it('fix rounds -5.1250001 to -5.12 at 2dp', function () {
        expect(round.fix(-5.1250001, 2)).to.equal(-5.12);
    });
});

describe('round.js specific infinite tests:', function () {
    it('infinite rounds 5.125 to 5.13 at 2dp', function () {
        expect(round.infinite(5.125, 2)).to.equal(5.13);
    });
    it('infinite rounds 5.1249999 to 5.13 at 2dp', function () {
        expect(round.infinite(5.1249999, 2)).to.equal(5.13);
    });
    it('infinite rounds 5.1250001 to 5.13 at 2dp', function () {
        expect(round.infinite(5.1250001, 2)).to.equal(5.13);
    });
    it('infinite rounds -5.125 to -5.13 at 2dp', function () {
        expect(round.infinite(-5.125, 2)).to.equal(-5.13);
    });
    it('infinite rounds -5.1249999 to -5.13 at 2dp', function () {
        expect(round.infinite(-5.1249999, 2)).to.equal(-5.13);
    });
    it('infinite rounds -5.1250001 to -5.13 at 2dp', function () {
        expect(round.infinite(-5.1250001, 2)).to.equal(-5.13);
    });
});

describe('round.js quirky tests:', function () {
    it('nearest rounds 0 to 0 at 0dp', function () {
        expect(round.nearest(0, 0)).to.equal(0);
    });
    it('ceil rounds 0 to 0 at 0dp', function () {
        expect(round.ceil(0, 0)).to.equal(0);
    });
    it('floor rounds 0 to 0 at 0dp', function () {
        expect(round.floor(0, 0)).to.equal(0);
    });
    it('fix rounds 0 to 0 at 0dp', function () {
        expect(round.fix(0, 0)).to.equal(0);
    });
    it('infinite rounds 0 to 0 at 0dp', function () {
        expect(round.infinite(0, 0)).to.equal(0);
    });
    it('nearest rounds 0 to 0 at 4dp', function () {
        expect(round.nearest(0, 4)).to.equal(0);
    });
    it('ceil rounds 0 to 0 at 4dp', function () {
        expect(round.ceil(0, 4)).to.equal(0);
    });
    it('floor rounds 0 to 0 at 4dp', function () {
        expect(round.floor(0, 4)).to.equal(0);
    });
    it('fix rounds 0 to 0 at 4dp', function () {
        expect(round.fix(0, 4)).to.equal(0);
    });
    it('infinite rounds 0 to 0 at 4dp', function () {
        expect(round.infinite(0, 4)).to.equal(0);
    });
});

describe('round.js quirky tests:', function () {
    it('nearest rounds 99999 to 99999 at 0dp', function () {
        expect(round.nearest(99999, 0)).to.equal(99999);
    });
    it('ceil rounds 99999 to 99999 at 0dp', function () {
        expect(round.ceil(99999, 0)).to.equal(99999);
    });
    it('floor rounds 99999 to 99999 at 0dp', function () {
        expect(round.floor(99999, 0)).to.equal(99999);
    });
    it('fix rounds 99999 to 99999 at 0dp', function () {
        expect(round.fix(99999, 0)).to.equal(99999);
    });
    it('infinite rounds 99999 to 99999 at 0dp', function () {
        expect(round.infinite(99999, 0)).to.equal(99999);
    });
    it('nearest rounds 99999 to 99999 at 4dp', function () {
        expect(round.nearest(99999, 4)).to.equal(99999);
    });
    it('ceil rounds 99999 to 99999 at 4dp', function () {
        expect(round.ceil(99999, 4)).to.equal(99999);
    });
    it('floor rounds 99999 to 99999 at 4dp', function () {
        expect(round.floor(99999, 4)).to.equal(99999);
    });
    it('fix rounds 99999 to 99999 at 4dp', function () {
        expect(round.fix(99999, 4)).to.equal(99999);
    });
    it('infinite rounds 99999 to 99999 at 4dp', function () {
        expect(round.infinite(99999, 4)).to.equal(99999);
    });
});

describe('round.js -quirky tests:', function () {
    it('nearest rounds -99999 to -99999 at 0dp', function () {
        expect(round.nearest(-99999, 0)).to.equal(-99999);
    });
    it('ceil rounds -99999 to -99999 at 0dp', function () {
        expect(round.ceil(-99999, 0)).to.equal(-99999);
    });
    it('floor rounds -99999 to -99999 at 0dp', function () {
        expect(round.floor(-99999, 0)).to.equal(-99999);
    });
    it('fix rounds -99999 to -99999 at 0dp', function () {
        expect(round.fix(-99999, 0)).to.equal(-99999);
    });
    it('infinite rounds -99999 to -99999 at 0dp', function () {
        expect(round.infinite(-99999, 0)).to.equal(-99999);
    });
    it('nearest rounds -99999 to -99999 at 4dp', function () {
        expect(round.nearest(-99999, 4)).to.equal(-99999);
    });
    it('ceil rounds -99999 to -99999 at 4dp', function () {
        expect(round.ceil(-99999, 4)).to.equal(-99999);
    });
    it('floor rounds -99999 to -99999 at 4dp', function () {
        expect(round.floor(-99999, 4)).to.equal(-99999);
    });
    it('fix rounds -99999 to -99999 at 4dp', function () {
        expect(round.fix(-99999, 4)).to.equal(-99999);
    });
    it('infinite rounds -99999 to -99999 at 4dp', function () {
        expect(round.infinite(-99999, 4)).to.equal(-99999);
    });
});

describe('round.js half a cup of tea tests:', function () {
    it('nearest rounds 0.5 to 1 at 0dp', function () {
        expect(round.nearest(0.5, 0)).to.equal(1);
    });
    it('ceil rounds 0.5 to 1 at 0dp', function () {
        expect(round.ceil(0.5, 0)).to.equal(1);
    });
    it('floor rounds 0.5 to 0 at 0dp', function () {
        expect(round.floor(0.5, 0)).to.equal(0);
    });
    it('fix rounds 0.5 to 0 at 0dp', function () {
        expect(round.fix(0.5, 0)).to.equal(0);
    });
    it('infinite rounds 0.5 to 1 at 0dp', function () {
        expect(round.infinite(0.5, 0)).to.equal(1);
    });
    it('nearest rounds 0.5 to 0.5 at 1dp', function () {
        expect(round.nearest(0.5, 1)).to.equal(0.5);
    });
    it('ceil rounds 0.5 to 0.5 at 1dp', function () {
        expect(round.ceil(0.5, 1)).to.equal(0.5);
    });
    it('floor rounds 0.5 to 0.5 at 1dp', function () {
        expect(round.floor(0.5, 1)).to.equal(0.5);
    });
    it('fix rounds 0.5 to 0.5 at 1dp', function () {
        expect(round.fix(0.5, 1)).to.equal(0.5);
    });
    it('infinite rounds 0.5 to 0.5 at 1dp', function () {
        expect(round.infinite(0.5, 1)).to.equal(0.5);
    });
}); 