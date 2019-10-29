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

    
    // image.setAttribute("src", image_2)


    let image = document.getElementById("img");
    // let image_1 = gallery[0];
    // let image_2 = gallery[1];
    // let image_3 = gallery[2];
    // let image_4 = gallery[3];
    // let image_5 = gallery[4];


    document.getElementById("next").addEventListener("click", function () {
        let check = document.getElementById("img");
        console.log(check);
        let checkSrc = check.attributes.src.nodeValue;
        console.log(checkSrc);
        // décomposer src 

        if(checkSrc == gallery[4]){
            image.setAttribute("src",gallery[0])
        }
        else {
            for (let i = 0; i < gallery.length; i++) {

                console.log(gallery[i]);
    
                if (checkSrc == gallery[i]){
    
                    image.setAttribute("src",gallery[i+1])
                }
                // if (checkSrc == gallery[4]){
                //     image.setAttribute("src",gallery[0])
                // }
            }
        }
        
    })


})();

            /*
            première partie 

            if(checkSrc == gallery[0] ){ 

             image.setAttribute("src",gallery[1])
            }
            if (checkSrc == gallery[1]){
                
                image.setAttribute("src",gallery[2])
            }
            if (checkSrc == gallery[2]){
                
                image.setAttribute("src",gallery[3])
            }
            if (checkSrc == gallery[3]){
                
                image.setAttribute("src",gallery[4])
            }
            if (checkSrc == gallery[4]){

                image.setAttribute("src",gallery[0])
            }
            */
/* 
Au click, faire passer l'attribut de la source de la première image à la deuxième jusqu'à la fin. 

If, 
Si la source de l'image est égal à l'url de la gallerie alors remplacé par l'image 2, 


let image = document.getElementsByTagName("img")[0];

*/