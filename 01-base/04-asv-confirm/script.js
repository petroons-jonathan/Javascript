/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
})();



function confirmation() {

    let age= prompt("Quel est votre âge ?");
    let genre= prompt("Quel est votre sexe ?");
    let ville=prompt("D'où venez-vous ?");

    if (confirm(age+" "+genre+" "+ville)) {
    alert("Bienvenu")
    }
    else {
        confirmation();
    }
}
confirmation();
