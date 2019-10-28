/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
})();

let gateau = prompt('Voulez-vous du gâteau ?', ["Oui ou non"]); // [default value] can be used without [ ] type after comma

if (gateau == "oui") {
    alert("félicitation!")
}
else if  (gateau == "Oui") {
    alert("félicitation!")
}
else {
    alert( "du gâteau, ça ne se refuse pas !")
}

