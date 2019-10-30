/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    let tableTarget = document.getElementById("target"); // get the element target 
     
    let tableElement = document.createElement("table"); // create an element "table"
    let tableBody = document.createElement("tbody"); // create an element "tbody"
   
    // let numberLines = prompt("saisir le nombre de lignes");

    // if (numberLines > 10){
    //     ventier =10; alert("veuillez saisir un chiffre entre 1 et 10");
    // }

    for (let i = 0; i < 10; i++) { // loop to get 10 lines

      let row = document.createElement("tr"); // create an elment "table row"
   
      for (let j = 0; j < 1; j++) { 

        let cell = document.createElement("td"); 
        let cellText = document.createTextNode("Line n° "+(i+1)); // get a message for each lines with her number
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
   

      tableBody.appendChild(row); // call the creation of the element
    }
   

    tableElement.appendChild(tableBody); // call the creation of the element

    tableTarget.appendChild(tableElement); // call the creation of the element
})();

