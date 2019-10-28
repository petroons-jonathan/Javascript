/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value IMPORTANT

    let a = document.getElementById("op-one").value; // declaring the value of the element
    let b = document.getElementById("op-two").value;

    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition
        alert(parseInt(a)+ parseInt(b)); // operation with a double parseInt
    });

    document.getElementById("substraction").addEventListener("click", () => {
        // perform an substraction
        alert(parseInt(a-b)); // operation with a single parseInt
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
        alert(parseInt(a*b)); // operation with a single parseInt
    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
        alert(parseInt(a/b)); // operation with a single parseInt
    });
})();
