const distance = require('@intugine-technologies/distance');
module.exports = (
    __data = [],
    distance_threshold = 1000,
    minimum_halt_time = 1000 * 60 * 60 * 1,
    ignore_locations = [],
    ignore_locations_distance_threshold = 60000,
) => {
    const temp = __data
        .filter(i => 
            i.loc && i.loc[0] && i.loc[1] && !isNaN(Date.parse(i.time))
        )
        .slice()
        .sort((a, b) => new Date(a.time) - new Date(b.time))
        .filter(i => 
            ignore_locations.length === 0 || 
            ignore_locations.find(j => 
                distance(j, i.loc) > ignore_locations_distance_threshold
            )
        );
    const halts = [];
    let i = 0, j = 0;
     do {
        if (temp[i + 1]) {
            j = i + 1;
            do {
                var D = distance(temp[i].loc, temp[j].loc);
                if (D < distance_threshold) {
                    ++j;
                } else {
                    break;
                }
            } while (temp.length > j);
        } else {
            break;
        }
        halts.push({
            from: i,
            to: j - 1
        });
        i = j;
    } while (temp.length > i);
    return halts
        .map(i => ({...i, duration: Date.parse(temp[i.to].time) - Date.parse(temp[i.from].time)}))
        .filter(i => i.duration > minimum_halt_time)
        .map(i => ({
            from_time: (new Date(temp[i.from].time)).valueOf(),
            to_time: (new Date(temp[i.to].time)).valueOf(),
            duration: i.duration,
            loc: temp[i.to].loc
        }))
};