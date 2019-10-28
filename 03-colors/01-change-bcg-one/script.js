/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    red.onclick = bgColorRed; // create an onclick function for the background color red
    function bgColorRed (event){ // create the function with the name bgColorRed on event
    document.getElementById("red").style.backgroundColor= "red"; // tell what the function need to do using "style.backgroundColor" to change it
    }

    green.onclick = bgColorGreen; // create an onclick function for the background color green
    function bgColorGreen (event){ // create the function with the name bgColorGreen on event
    document.getElementById("green").style.backgroundColor= "green"; // tell what the function need to do using "style.backgroundColor" to change it
    }

    yellow.onclick = bgColorYellow; // create an onclick function for the background color yellow
    function bgColorYellow (event){ // create the function with the name bgColorYellow on event
    document.getElementById("yellow").style.backgroundColor= "yellow"; // tell what the function need to do using "style.backgroundColor" to change it
    }
    
    blue.onclick = bgColorBlue; // create an onclick function for the background color blue
    function bgColorBlue (event){ // create the function with the name bgColorBlue on event
    document.getElementById("blue").style.backgroundColor= "blue"; // tell what the function need to do using "style.backgroundColor" to change it
    }
})();
