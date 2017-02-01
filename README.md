# new-point-haversine
Calculates new latitude and longitude from an old point + n distance

# Installation
```
$ npm install new-point-haversine --save
```

# Usage
```
const haversine = require("new-point-haversine");
```

## haversine.getLatitudeBounds (lat, distance, units)

Units can be `meter`, `km`, `mile`, `nmi`. If not specified, default is `meter`.

Example usage: `const latDataObject = haversine.getLatitudeBounds(51.0, 100, "meter");`

Returns an object after adding and subtracting the distance from the latitude:
```
{
	lowerLat: 50.99910067839408
	upperLat: 51.00089932160592
}
```

## haversine.getLongitudeBounds (lat, long, distance, units)

Units can be `meter`, `km`, `mile`, `nmi`. If not specified, default is `meter`.

Example usage: `const longDataObject = haversine.getLongitudeBounds(51, 0.0, 100, "meter");`

Returns an object after adding and subtracting the distance from the longitude:
```
{
	lowerLong: -0.0014290361772935321
	upperLong: 0.0014290361772935321
}
```

