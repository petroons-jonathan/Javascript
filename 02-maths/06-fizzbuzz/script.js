/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(()=> {

    for(let number = 1; number <=100; number++) { // declaring a list of number starting at 1 to 100

        if (number % 3 === 0 && number % 5 === 0){ // number can be divide by 3 and by 5
            console.log("fizzbuzz " + number) // output in a console the word "fizzbuzz" and the number (start with the double condition)
        }

        else if (number % 3 === 0) { // number can be divide by 3
            console.log("fizz "+ number); // output in a console the word "fizz" and the number
        }
        else if (number % 5 === 0) { // number can be divide by 5
            console.log("buzz " + number); // output in a console the word "buzz" and the number
        }
        else { // if no condition call this 
            console.log("NON " + number); // output in a console only the number because there's no condition
        }
    }

    // your code

})();
