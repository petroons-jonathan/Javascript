/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        // your code here
        for (let i=0; i<=21; i++){ // declaring the condition
            let a = i % 2;
            // console.log (a) to see the pairs number
            if (a == 0) {
                console.log(i*i); // calculate the exponation
            }
        }

        
    });
})();
