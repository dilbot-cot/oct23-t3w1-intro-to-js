function hideContent() {
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

let dillon = {
    name: "dillon",
    codingLanguages: [
        "C#",
        "JavaScript",
        "HTML",
        "CSS"
    ],
    hobbies: [
        {
            name: "Computer Games",
            skill: 100
        },
        {
            name: "DocuSign",
            favouriteOption: ["Web Forms", "Templates"],
            skill: 1000
        }
    ]
}
}

let pokemonTeam = [
    "pikachu",
    "squirtle",
    "charmander",
    "mew"
];

function logTheTeam() {
    sortedTeam = pokemonTeam.sort();

    // for (const pokemon of sortedTeam) {
    //     console.log(pokemon);
    // }

    // sortedTeam.forEach(pokemon => {
    //     console.log(pokemon)
    // });

    // let [firstPokemon, secondPokemon, ...others] = sortedTeam;
    // console.log(secondPokemon);

    // while (sortedTeam.length){
    //     console.log(sortedTeam.pop());
    // }

    do {
        console.log(sortedTeam.pop())
    } while (sortedTeam.length);

    sortedTeam.push("blastoise");

    for (let index = 0; index < sortedTeam.length; index++) {
        console.log("Pokemon at index " + index + " is " + sortedTeam[index]);
    }
}

// logTheTeam();

const logTheTeamAlternate = (targetSize = 4) => {
    if (pokemonTeam.length == targetSize) {
        console.log(`There are ${targetSize} pokemon in the team`);
    }
    if (pokemonTeam.length === targetSize) {
        console.log("This is from strict equals")
    }
}
logTheTeamAlternate();
logTheTeamAlternate(2);