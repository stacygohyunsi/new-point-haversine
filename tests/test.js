const {expect} = require("chai");
const path = require("path");
const haversine = require("../haversine");

describe('haversine', () => {
	const expectedLocation = path.join(process.cwd(), './haversine.js');
	it('exists', () => {
		expect(() => {
			require(expectedLocation);
		}).to.not.throw();
	});
	it('implements .getLatitudeBounds', () => {
		expect(haversine.getLatitudeBounds).to.not.be.undefined;
	});
	it('implements .getLongitudeBounds', () => {
		expect(haversine.getLatitudeBounds).to.not.be.undefined;
	});
});

describe('.getLatitudeBounds()', () => {
	it('throws an error if no arguments are supplied', () => {
		expect(() => {
			haversine.getLatitudeBounds();
		}).to.throw();
	});
	it('returns a value expected', () => {
		const lat = 41.85;
		const d = 587; 
		const metric = "meter"; 
		const expected = {
			lowerLat: 41.84472098217326,
			upperLat: 41.855279017826746	
		};
		expect(
			haversine.getLatitudeBounds(lat, d, metric)
		).to.deep.equal(expected);
	});
});

describe('.getLongitudeBounds()', () => {
	it('throws an error if no arguments are supplied', () => {
		expect(() => {
			haversine.getLongitudeBounds();
		}).to.throw();
	});
	it('returns a value expected', () => {
		const lat = 41.85;
		const long = -87.65; 		
		const d = 587; 
		const metric = "meter"; 
		const expected = {
			lowerLong: -87.65708693777327,
			upperLong: -87.64291306222674	
		};
		expect(
			haversine.getLongitudeBounds(lat, long, d, metric)
		).to.deep.equal(expected);
	});
});