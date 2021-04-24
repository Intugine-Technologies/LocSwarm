const assert = require('assert');
const calc_halts = require('../index.js');
const test1_data = require('./test1.json');

describe("Calculate Halts", () => {
	describe("Default conditions", () => {
		it("Should have length 11", () => {
			const halts = calc_halts(test1_data.map(i => ({
			    loc: i.loc || i.gps,
			    time: i.time || i.createdAt
			})));
			assert.equal(halts.length, 11);
		});
		it("Should have basic keys", () => {
			const halts = calc_halts(test1_data.map(i => ({
			    loc: i.loc || i.gps,
			    time: i.time || i.createdAt
			})));
			assert.equal(Boolean(halts[0].loc), true);
			assert.equal(Boolean(halts[0].duration), true);
			assert.equal(Boolean(halts[0].from_time), true);
		});
	})
});