var cos = Math.cos
var sin = Math.sin
var sqrt = Math.sqrt
var PI = Math.PI

// Earth radius in diff metrics
var radii = {
	km:    6371,
	mile:  3960,
	meter: 6371000,
	nmi:   3440
}

const haversine = {

	getLatitudeBounds(lat, d, metric) {
		if (!metric) {
			metric = 'meter';
		}
		metricPerDeg = (2*PI/360) * radii[metric];
		degChange = d/metricPerDeg;
		return {
			lowerLat: lat - degChange,
			upperLat: lat + degChange
		}
	}, 
	getLongitudeBounds(lat, long, d, metric) {
		if (!metric) {
			metric = 'meter';
		}
		metricPerDeg = (2*PI/360) * radii[metric] * cos(lat * PI/180);
		degChange = d/metricPerDeg;
		return {
			lowerLong: long - degChange,
			upperLong: long + degChange
		}
	}	
}

module.exports = haversine;