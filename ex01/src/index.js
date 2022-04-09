var myArr = [2, 4, 0, 8, 10];

function myArrayFunction(myItems){
myArr[2] = 6;

return myArr;
}

console.log(myArrayFunction());

module.exports = myArrayFunction;