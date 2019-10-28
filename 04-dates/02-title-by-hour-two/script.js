/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here

    today= new Date(); // declaring the new date
    let heure= today.getHours(); // declaring the variable and get the hour of the day
    let minute= today.getMinutes(); // declaring the variable and get the minutes
    let global= heure.toString() + minute.toString(); // calculate the hour and the minute

    if (minute < 10) {
        "0" + minute;  // declaring that the minutes need to have a 0 before it until 10. ex 10h01 minute
    }

    let present= parseInt(global); // declaring all the value in a number

if (present < 1730 ){ // 1730 is for 17H30 only in number 
    document.getElementById("target").innerHTML="Bonjour " + heure + "h" + minute; 
}
else {
    document.getElementById("target").innerHTML="Bonsoir " + heure + "h" + minute;
}
})();
