function mySplice(arr1, arr2, n){
    var arr1Copy = arr1.reverse().slice();
    var arr2Copy = arr2.slice();

    for (var i = 0; i < arr1.length; i++) {
       
        arr2Copy.splice(n+i, 0, arr1Copy[i]);
    }
    return arr2Copy;
}

console.log(mySplice([1, 2, 3], [4, 5], 1));
console.log(mySplice([1, 2, 3], [4, 5], 2));
console.log(mySplice(["b", "c"], ["a", "d"], 1));
console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2));

module.exports = mySplice;