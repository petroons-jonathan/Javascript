/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let pass = document.getElementById("pass-one"); // get the input element called "pass-one"

   // console.log(pass)

    pass.addEventListener("input", function (){ // create an event on an input

        let check = document.getElementById("validity"); // get the element "validity"
        let num = /\d/g; // RegEx to get a number on the global check 
        let checkNum = pass.value.match(num); // compare the match value 
        console.log(check);

        if (pass.value.length >= 8 && checkNum && checkNum.length >= 2){ // if the pass value length is over or equal 8 and if the checknum is correct and compose by less 2 number
            check.innerHTML="ok"; // write ok in the check 
        }
        else {
            return false;
        }
    })
})();
