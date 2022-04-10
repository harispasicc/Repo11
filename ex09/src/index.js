function myMutation(arr) {

  var firstArr=arr[0].toLowerCase();
  var secondArr=arr[1].toLowerCase();
var count = 0;
  for(i=0;i<secondArr.length;i++) {
    if (firstArr.indexOf(secondArr[i]) >-1) {
      count ++;
    }
  } 
  if (count == secondArr.length){
    return true;
  } else {
    return false;
  }
}


console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Mary", "Aarmy"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["voodoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tiger", "Zebra"]));
console.log(myMutation(["Noel", "Ole"]));

module.exports = myMutation;