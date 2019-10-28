/* becode/javascript
 *
 * /05-arrays/12-manipulate-set/script.js - 5.12: manipulation d'un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", function () {
    const fruits = new Set([
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ]);

    fruits.delete("pomme"); // delete "pomme" from the set
    fruits.delete("cerise");
    fruits.add("banane"); // add "banane" to the set
    fruits.add("kiwi");
    
    for(let item of fruits) // show all the set one by one
    console.log(item)
    
})
    // your code here
})();
