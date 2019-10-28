/* becode/javascript
 *
 * /05-arrays/01-get-element/script.js - 5.1: élément de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    
    // your code here
    document.getElementById("run").addEventListener("click",function () { // create a function on click 
        const fruits = [ // declaring the array 
            "pomme",
            "poire",
            "fraise",
            "tomate",
            "kiwi",
            "banane",
            "orange",
            "mandarine",
            "durian",
            "pêche",
            "raisin",
            "cerise",
        ];
        console.log(fruits[3]); // get the fourth element (index 3 because it starts at 0) and get Tomate
    })
    
})();
