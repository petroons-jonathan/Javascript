/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    /*
     Code used in the exercice before, call a color and use it 

    document.getElementById("run").addEventListener('click', function() { // declaring a function on click on button "run"
    bgColor_Random = document.getElementById("color").value; 
    document.body.style.backgroundColor = bgColor_Random;
    */

        document.getElementById("run").addEventListener('click', function() { // call the function and use it on an event (here the click)
        document.body.style.backgroundColor = getRandomColor() // change the color for the random one, call the style background (what need to be changed) and the function (random color generator)
        })
        function getRandomColor() { // declare the function named "getRandomColor"
        var letters = '0123456789ABCDEF'; // random color generator 
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color; // return the random color 
      }

})();
