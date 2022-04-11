var myStr = "Paragon is the best!";

function useMethods(str){
    var mySplit = myStr.split("");
    var myRev = mySplit.reverse();
    var myReverse = myRev.join('');
    console.log(myReverse)
    var arr = [myReverse];
    var countCharacters = arr.map(arr => {
        return arr[0]
    })
    console.log(countCharacters)
    
}

useMethods();
module.exports = useMethods;