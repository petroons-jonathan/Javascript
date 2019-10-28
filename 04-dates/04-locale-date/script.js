/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
/*
    function horloge()
{
    var tt = new Date().toLocaleTimeString(); // hh:mm:ss
    var dd = new Date().toLocaleDateString();
 
	document.getElementById("target").innerHTML = dd + tt;
	setTimeout(horloge, 1000); // mise à jour du contenu "timer" toutes les secondes
}
horloge()
*/
function twDateLocale(_id,_date,_lang) { // name the function and the options belongs
    
    
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; // declaring the date as option

    var time = new Date().toLocaleTimeString(); // declaring the variable time

    document.getElementById("target").innerHTML = // declaring what that need to change 
    
    _date.toLocaleDateString( _lang,options).replace(/\b\w/, function(l){ return l.toUpperCase() }) + // declaring the date in french with an uppercase
     " " // adding a space between the date and the hour
     + time ; // adding the time
  }
  twDateLocale("target",new Date()); // declaring the function
})();
