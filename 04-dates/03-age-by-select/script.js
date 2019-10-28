/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

    // your code here
    (() => {
        document.getElementById("run").addEventListener("click", () =>{
            //récupération de la valeur des données entrées par l'utilisateur et on assigne la valeur à une variable
            let day = document.getElementById("dob-day").value;
            let month = document.getElementById("dob-month").value;
            let year = document.getElementById("dob-year").value;
    
            //récupération de la date (jour, mois, années) du jour
            let current_date = new Date();
            let current_day = current_date.getDate();
            let current_month = current_date.getMonth();
            let current_year = current_date.getFullYear();
    
            //calcul de l'âge
            let age = current_year - year;
    
            //condition1: si le mois actuel est égal au mois entré par l'utilisateur ET SI le jour actuel est plus grand ou égal au jour entré par l'utilisateur
            // alors on affiche l'âge. 
            if (current_month+1 == parseInt (month) && current_date>= parseInt(day)){
                console.log(age)
                }else if (current_month+1 <= parseInt(month)){ //Sinon si le mois actuel est plus petit ou égal au mois entré par l'utilisateur, alors on affiche l'âge moins 1
                console.log(age-1)
                }else{ //Si aucune des conditions au-dessus n'est correcte, alors on affiche l'âge
                console.log(age)
                }
            
        });
})();


/* Chose dont j'ai besoin => Le jour indiqué dans l'input, = let jour= document.getElementById("dob-day").value;
                            Le mois indiqué dans l'input, = let mois= document.getElementById("dob-month").value;
                            L'année indiqué dans l'input.  = let annee= document.getElementById("dob-year").value;

                            Le jour, le mois et l'année actuelle. 
                                                                 

    Ce que je dois faire => Calculer le temps entre la date indiquée et la date du jour 

                            DateDuJour - DateIndiquée. 

                            */

