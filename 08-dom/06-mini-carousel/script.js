/* becode/javascript
 *
 * /08-dom/06-mini-carousel/script.js - 8.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    let image_1 = gallery[0];
    let image_2 = gallery[1];
    let image_3 = gallery[2];
    let image_4 = gallery[3];
    let image_5 = gallery[4];

    let objet = document.getElementsByTagName("img")[0];

    document.getElementById("next").addEventListener("click", function () {

        objet.setAttribute("src", image_2)

    })

    // your code here
})();


/* 
Au click, 

L'attribut de la première image change pour la deuxième, 
et ainsi de suite jusqu'à la dernière

*/