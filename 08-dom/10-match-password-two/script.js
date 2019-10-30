/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", function() { // add an event on click 

        let password_1 = document.getElementById("pass-one").value; // get the value of the input "pass-one"
        let password_2 = document.getElementById("pass-two").value; // get the value of the input "pass-two"

        //console.log(document.getElementById("pass-one"));
        console.log(password_1); // check the result of .value used twice (for both)
        console.log(password_2);

        function validate() { // create a function for the validation 

        if (password_1 == "" || password_2 == ""){ // if the value of the password 1 is empty or the password 2 is empty
            alert("Veuillez remplir tous les champs");
        }
        else if (password_1 != password_2){ // if the value of the password 1 isn't the same as the value of password 2 
            alert("Votre mot de passe est incorrect");
            document.getElementById("pass-one").value="error"; // change the value to "error" in the input
            document.getElementById("pass-two").value="error";
        }
        else if (password_1 == password_2){ // if the value of the password 1 is the same as the value of password 2 
            alert("Votre mot de passe est correct")
        }
        else {
            return false; // if any condition is true 
        }
    }
    validate(); // call the function 

    })
})();
