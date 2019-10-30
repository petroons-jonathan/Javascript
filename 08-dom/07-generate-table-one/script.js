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





    var nbre_lignes = prompt("saisir le nombre de lignes du tableau") ;
	if (nbre_lignes >50 ) {ventier =50 ; alert("nombre de lignes limitée à 50"); }
	document.getElementById("target").innerHTML=("<table>");
	for (i=0;i<=nbre_lignes; i++)
	{
		document.getElementById("target").innerHTML=("<tr>");
		document.getElementById("target").innerHTML=("<td>col 1 </td>");
		document.getElementById("target").innerHTML=("</tr>");
	}
    document.write("</table>");
    

})();
