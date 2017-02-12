const cos = Math.cos;
const sin = Math.sin;
const sqrt = Math.sqrt;
const PI = Math.PI;

// Earth radius in diff metrics
const radii = {
	km:    6371,
	mile:  3960,
	meter: 6371000,
	nmi:   3440
};

const haversine = {

	getLatitudeBounds(lat, d, metric) {
		if (!metric) {
			metric = "meter";
		}
		(arguments.length === 0) && (() => { throw new Error('Please fill in all arguments'); })();		
		let metricPerDeg = (2*PI/360) * radii[metric];
		let degChange = d/metricPerDeg;
		return {
			lowerLat: lat - degChange,
			upperLat: lat + degChange
		};
	}, 
	getLongitudeBounds(lat, long, d, metric) {
		if (!metric) {
			metric = "meter";
		}
		(arguments.length === 0) && (() => { throw new Error('Please fill in all arguments'); })();
		let metricPerDeg = (2*PI/360) * radii[metric] * cos(lat * PI/180);
		let degChange = d/metricPerDeg;
		return {
			lowerLong: long - degChange,
			upperLong: long + degChange
		};
	}	
};

module.exports = haversine;