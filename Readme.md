# LocSwarm

[![npm version](https://img.shields.io/npm/v/@intugine-technologies/halts)](https://www.npmjs.com/package/@intugine-technologies/halts)
[![install size](https://packagephobia.com/badge?p=@intugine-technologies/halts)](https://packagephobia.com/result?p=@intugine-technologies/halts)

Halt calculation for a set of locations

## Table of Contents

-   [Installation](#installation)
-   [Example](#example)
-   [Reference](#reference)

## Installation

Using npm:

```bash
    $ npm i -S @intugine-technologies/halts
```

## Example

```js
const loc_swarm = require("@intugine-technologies/halts");

const data = [
    {
        loc: [29.79957, 77.93455],
        time: "2019-07-04T13:20:32.732Z",
    },
    {
        loc: [29.79957, 77.93455],
        time: "2019-07-04T13:20:32.732Z",
    }
    {
        loc: [29.79957, 77.93455],
        time: "2019-07-04T13:20:32.732Z",
    }
    ......
];

const halts = loc_swarm(data, 1000);
console.log(halts);
```

## Reference

### Definition

    loc_swarm(locations = [], distance_threshold = 1000, minimum_halt_time = 1000 * 60 * 60 * 1,ignore_locations = [], ignore_locations_distance_threshold = 60000)

### Arguments
- `locations` - Array of objects in format of {loc: [lat, long], time: ISOString}
- `distance_threshold` - Radius of the cluster you want to form (what do you consider a halt) in metres
- `minimum_halt_time` - Minimum halt duration you want filter out, in ms
- `ignore_locations` - Array of objects, containing the set of locations around which no halts will be calculated
- `ignore_locations_distance_threshold` - Distance threshold to be used to ignore the `ignore_locations` in metres