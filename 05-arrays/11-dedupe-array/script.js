/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", function () {
    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];
    function removeDuplicates(fruits) { // function to remove the duplicates 
        let unique = {};
        fruits.forEach(function(i) {
          if(!unique[i]) {
            unique[i] = true;
          }
        });
        return Object.keys(unique);
      }
      uniqueFruit = removeDuplicates(fruits) 
      for(i=0;i<uniqueFruit.length;i++) { // declaring that for each unique fruit show the value
          console.log(uniqueFruit[i]);
      }
      
    })
    // your code here
})();
