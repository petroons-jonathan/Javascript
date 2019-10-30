/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let password = document.getElementById("pass-one").maxLength = "10"; // declaring that the maximum length is 10

   // console.log(password); show the max Lenght of pass one

    let counter = document.getElementById("counter"); // get the element counter

    // console.log(counter);

    document.getElementById("pass-one").addEventListener("input", function(){ // declaring a function on the event "input"

        counter.innerHTML = document.getElementById("pass-one").value.length +"/10"; // the counter change by the innerHTML on the value length
        
    })
})();
