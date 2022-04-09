var myPetsArray = ["Dog", "Cat"];

function myArrayFunction(myNewPets){
var myNewPets = [];
myNewPets.unshift("Bird", "Fish");
var firstPet = myNewPets[0];
console.log(firstPet);
var lastPet = myNewPets[1];
console.log(lastPet);
myNewPets.pop();
myNewPets.shift();
myNewPets.unshift("Lion");
myPetsArray = myNewPets.push("Cat");
myNewPets.push("Bird");
console.log(myNewPets);
return myNewPets;
}

myArrayFunction();

module.exports = myArrayFunction;