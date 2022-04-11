var monday = [31, 32, 19, 37];
var tuesday = [29, 27, 55, 36];
var wednesday = [17, 27, 42, 46];
var thursday = [29, 52, 21, 64];
var friday = [91, 27, 31, 61];

var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
];

function myArrayFunction(temps) {
    var averageDayTemp = 0;

    for (var i=0; i<temps.length; i++){
      var currentNum = temps[i];
        averageDayTemp +=currentNum;
    }
    averageDayTemp = averageDayTemp / temps.length
    return averageDayTemp;
}


console.log(myArrayFunction([31,32,19,37]));
console.log(myArrayFunction([29, 27, 55, 36]));
console.log(myArrayFunction([17, 27, 42, 46]));
console.log(myArrayFunction([29, 52, 21, 64]));
console.log(myArrayFunction([91, 27, 31, 61]));

module.exports = myArrayFunction;