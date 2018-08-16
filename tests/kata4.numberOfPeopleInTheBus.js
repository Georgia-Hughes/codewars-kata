function number(busStops) {
    let people = 0;
    for (let i=0; i<busStops.length; i++) {
      people = people - busStops[i][1] + busStops[i][0];
    }
    return people;
}