var myNestedArray = [["Toblerone", 5], ["Milka", 3]];

function myNestedFunction(arr){
    arr = [["test1", 1], ["test2", 2]];
    return arr;
}
console.log(myNestedArray)
console.log(myNestedFunction());

module.exports = myNestedFunction;

