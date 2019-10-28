/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", function () {

        let moi= { 
            lastname:"Petroons",
            firstname:"Jonathan",
            age:27,
            city:"Bruxelles",
            country:"Belgique"
        }
        console.log(Object.values(moi))
        console.log(moi)
        console.log(`Je m'appelle ${moi.lastname} ${moi.firstname} j'ai ${moi.age} ans je viens de ${moi.city} en ${moi.country}`)


    })
})();
