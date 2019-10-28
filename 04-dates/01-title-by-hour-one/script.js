/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
/* work base 
    today= new Date();

if (today.getHours() >=0 && today.getHours() < 18) {
    document.getElementById("target").innerHTML="Bonjour"; 
}
else {
    document.getElementById("target").innerHTML="Bonsoir";
}
*/
    
    function horloge()
    {
    let time=new Date(); 
    let tt = new Date().toLocaleTimeString(); // hh:mm:ss
    setTimeout(horloge, 1000); // mise à jour du contenu "timer" toutes les secondes

    if(time.getHours() >= 0 && time.getHours() < 18) { // if <= was used the timer will show "Bonsoir" until 18:59 because of the = 
    document.getElementById('target').innerHTML='Bonjour '+ tt; // change content of "target" by "Bonjour"
    } 
    else { 
    document.getElementById('target').innerHTML='Bonsoir '+ tt;
    } 
}

horloge ()

    /*
    Test 
    This function will give the real timer
    function horloge()
{
    var tt = new Date().toLocaleTimeString(); // hh:mm:ss
    setTimeout(horloge, 1000); // mise à jour du contenu "timer" toutes les secondes
    document.getElementById("target").innerHTML = tt;
}
    horloge ()
    */


    /*
    Si l'heure affiché est entre 0 et 18 alors dire Bonjour
    Sinon dire Bonsoir 
    */
})();
