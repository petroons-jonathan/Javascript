/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    document.getElementById("run").addEventListener("click", function () {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];


    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);


let adjectives_array=Array.from(adjectives)    // transform the set into an array
let getRandom= Math.floor(Math.random()*birds.length); // declaring the random calcul 
let getRandomBirds = birds[getRandom].name; // get the name of the birds randomly
let getRandomAdjectives= adjectives_array[Math.floor(Math.random()*adjectives_array.length)]; 
let female= "" // declare an empty variable
let article=""

if (birds[getRandom].hasOwnProperty("fem")) {
    female = "e"
    article ="La"
} // add a "e" if the random birds has the property fem
else {
    article ="Le"
}

let message = `${article} ${getRandomBirds} ${getRandomAdjectives}${female}` // syntax of the message 

document.getElementById("target").innerHTML=message


})

    // your code here



/* Au click sur le bouton choisir un nom d'oiseau au hasard et son adjectif 
dans la liste et le mettre à l'endroit prévu.
Si l'oiseau à la propriété fem = true 
Alors rajouter un e à l'adjectif
*/