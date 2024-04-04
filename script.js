// // let is a local scope
// let exampleEmptyVariable = null;
// let anotherEmptyVariable = undefined;

// console.log(exampleEmptyVariable, anotherEmptyVariable);

// let message = "hello from the script.js file!";

// console.log(message);
// console.log(message * 2);

// let world = "Earth";

// console.log(`Hello ${world}, I am Dillon!`); // This is sting interperlation

// console.log("Hello " + world + ", I am Dillon!");

// {
//     // for this scope world changes to Mars, but before and after this it will remain as Earth
//     let world = "Mars";
//     console.log(`Hello ${world}, I am Dillon!`); // This is sting interperlation
// }

// console.log(`Hello ${world}, I am Dillon!`); 

// Array in JS
let favouriteFruits = [
    "Mango",
    "Banana",
    "Grapes",
    "Passionfruit",
    "Pear",
    "Strawberry",
    "Watermelon",
    "Lychee",
    "Cherry",
    "Blueberry",
    "Tomato",
    "Papaya",
    "Dragonfruit",
    "Kiwi"
];

console.log(favouriteFruits[12]);

// favouriteFruits.forEach(fruit => {
//     console.log(`Somone in the class loves ${fruit}`);
// })

// for (fruitIndex in favouriteFruits) {
//     console.log(`Someone in the class loves ${favouriteFruits[fruitIndex]}`)
// }

console.log(`The class' favourite fruits are ${favouriteFruits}`);

let sortedFavouriteFruits = favouriteFruits.sort()

console.log(sortedFavouriteFruits)