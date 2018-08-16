function ballCollector(detritus) {
let tennisBalls = detritus.filter(number => number === 58)
let weight = 0

tennisBalls.forEach(function (number) {
    weight += number;
})

return {weight: weight}
};