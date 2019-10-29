/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let objet = document.getElementsByTagName("img")[0]; // choose the element img with the index 0
    let ref= objet.getAttribute("src");    // get the attribute of "src"
    let refOut = objet.getAttribute("data-hover"); // get the attribute "data-hover"


    console.log(ref) // show the "refHover" variable

    objet.onmouseover = function() { // function on mouse over 

        objet.setAttribute("src", refOut); // change the src to the refOut
        console.log(refOut); // show the "refOut" variable
    }

    objet.onmouseout = function() { // function on mouse out

        objet.setAttribute("src", ref); // change the src to the refHover
        console.log(refHover) // show the "refHover" variable 

    }

})();
