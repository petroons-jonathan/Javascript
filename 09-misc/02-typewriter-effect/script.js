/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let txt = document.getElementById("target").innerHTML;
    let letters = [...txt];

    
    for(let i=0;i<letters.length; i++){
        letters[i] = `<span style="visibility:hidden">${letters[i]}</span>`;
    }

    document.getElementById("target").innerHTML = letters.join('');

    let count = 1;
   
    function typewriter(){
        
        if(count <= letters.length){
            let random = 50+ parseInt(Math.random()*100);

            document.querySelector(`#target span:nth-child(${count})`).style.visibility = "visible";
        
            setTimeout(typewriter, random);
            count++
        }
        else{
            console.log("C'est fini");
        } 
    }

    typewriter();
})();
