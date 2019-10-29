/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
        
    // your code here
   let objet = document.getElementById("source");  // get the element "source"
    ref= objet.getAttribute("data-image"); // get the attribute of the element 

    var figTag = document.getElementById("target"); // get the element "target"

    var imgTag = document.createElement("img"); // create a new element "img"
        imgTag.innerHTML = figTag.innerHTML; 

        figTag.parentNode.insertBefore(imgTag, figTag); 
        figTag.parentNode.removeChild(figTag);
    
    let objet2 = document.querySelector("img"); // choose the first css class img
    ref2= objet2.setAttribute("src", ref);

    objet.parentNode.removeChild(objet); // delete 
    
    console.log(ref); 
    
    /*
    let ref = document.getElementById("source").getAttribute("data-image");

    document.createElement("img").innerHTML = document.getElementById("target");

    document.getElementById("target").parentNode.insertBefore(document.createElement("img"), document.getElementById("target"));
    document.getElementById("target").parentNode.removeChild(document.getElementById("target"));

    let ref2= document.querySelector("img").setAttribute("src", ref);

    document.getElementById("source").parentNode.removeChild(document.getElementById("source"));

    console.log(ref)
    */
    
})();
