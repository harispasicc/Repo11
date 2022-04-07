var myPetsArray = ["Dog", "Cat"];

function myArrayFunction(myPets){
var myNewPets = [];
myNewPets.unshift("Bird", "Fish");
var firstPet = myNewPets[0];
console.log(firstPet);
var lastPet = myNewPets[1];
console.log(lastPet);
myNewPets.push("Lion");
myNewPets.shift();
myNewPets.shift();
myPetsArray = myNewPets.push("Cat");
myNewPets.push("Bird");
console.log(myNewPets);
}

myArrayFunction();

module.exports = myArrayFunction;