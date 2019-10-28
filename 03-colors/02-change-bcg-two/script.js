/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here


    document.getElementById("run").addEventListener('click', function() { // declaring a function on click on button "run"
        bgColor_Name = document.getElementById("color").value; 
        document.body.style.backgroundColor = bgColor_Name;
        /*
        if (bgColor_Name != " ") {
            console.log("Ceci n'est pas une couleur");
        }
        */
    })
    
/*      Code beaucoup beaucoup trop long... 

        document.getElementById("run").addEventListener("click", function(){
        let valeur= document.getElementById("color").value; // taking the input value
        console.log(valeur)
        if (valeur.toLowerCase() == "green") {
            document.body.style.backgroundColor= "green";
        }
        else if (valeur.toLowerCase() == "blue") {
            document.body.style.backgroundColor= "blue";
        }
        else if (valeur.toLowerCase() == "yellow") {
            document.body.style.backgroundColor= "yellow";
        }
        else if (valeur.toLowerCase() == "red") {
            document.body.style.backgroundColor= "red";
        }
        else if (valeur.toLowerCase() == "violet") {
            document.body.style.backgroundColor= "violet";
        }
        else if (valeur.toLowerCase() == "orange") {
            document.body.style.backgroundColor= "orange";
        }
        else {
            alert("Veuillez indiquer une couleur en anglais")
        }
    })
    */
})();

/*  Au click sur le bouton 
    Prendre la valeur de l'input, 
    SI la valeur EST une couleur x ALORS 
    Faire passe le body dans la couleur x
    SINON alerter de recommencer. 

*/
