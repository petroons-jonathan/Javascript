/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

//     var color_td = "#ccc";
// document.write("<table>");

// for(var i = 1; i <= 10; i++) {

// 	document.write("<tr>");

// 	for(var j = 1; j <= 10; j++) {

// 		// if(j == 1 || i == 1) {
// 		// 	color_td = "#ccc";
// 		// }
// 		// else {
// 		// 	color_td = "#fff";
// 		// }

// 		document.write("<td style='width:30px;background-color:" + color_td + "'>" + i*j + "</td>");
// 	}
// 	document.write("</tr>");
// }

// document.write("</table>");
})();

let tableTarget = document.getElementById("target"); // get the element target 
let tableElement = document.createElement("table"); // create the element table
let tableBody = document.createElement("tbody"); // create the element "table body"

for(let i = 1; i <= 10; i++){ // create a loop who start at 1 to 10

    let row = document.createElement("tr"); // create the element "table row"

    for(let j = 1; j<=10; j++){ // create a loop who strat at 1 to 10 

        let cell = document.createElement("td"); // create the element "table data-cell"
        let cellTxt = document.createTextNode(i*j); // create a texte with the value of i * j
        cell.appendChild(cellTxt); // call the td with the cell text
        row.appendChild(cell); // call the row with the cell 
    }

    tableBody.appendChild(row); // call the table body with the row 
}

tableElement.appendChild(tableBody); // call the table with the table body
tableTarget.appendChild(tableElement); // call into the target the table element 