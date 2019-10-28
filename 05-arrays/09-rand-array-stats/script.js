
/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", function () {

        function getRandom(max) { // declaring a function called getRandom
            return Math.floor(Math.random() * Math.floor(99)); // process to get a random number 
          }

        // declaring a random number for each case 
        firstCase = document.getElementById("n-1").innerHTML = getRandom(1);
        secondCase = document.getElementById("n-2").innerHTML = getRandom(1);
        thirdCase = document.getElementById("n-3").innerHTML = getRandom(1);
        fourthCase = document.getElementById("n-4").innerHTML = getRandom(1);
        fifthCase = document.getElementById("n-5").innerHTML = getRandom(1);
        sixthCase = document.getElementById("n-6").innerHTML = getRandom(1);
        seventhCase = document.getElementById("n-7").innerHTML = getRandom(1);
        eighthCase = document.getElementById("n-8").innerHTML = getRandom(1);
        ninthCase = document.getElementById("n-9").innerHTML = getRandom(1);
        tenthCase = document.getElementById("n-10").innerHTML = getRandom(1);

        // put all the value in a table so we can use it to calculate
        table= [
            firstCase,
            secondCase,
            thirdCase,
            fourthCase,
            fifthCase,
            sixthCase,
            seventhCase,
            eighthCase,
            ninthCase,
            tenthCase
        ]
    
        // declaring a function to do an addition of the array
        function table_addition(table) {
             sum = 0;	
             for(i=0;i<table.length; i++)
                 {		
                 if (!isNaN(Number(table[i])))
                     {		
                     sum += Number(table[i]);	
                     }		
                 }
             return sum;
         }
         sum=table_addition(table) // call the function and name a variable as "sum"
         
         // declaring the function to do the average of the table
         function table_average(table) { 

            var n = table.length;
            var somme=0;
            for(j=0; j<n; j++)
            {
                somme += table[j];
            }
            var aver = somme / n;
            return aver;

         }
         average=table_average(table) // call the function and named it average



        max = Math.max.apply(null, table) // get the highest number in the table 
        min = Math.min.apply(null, table) // get the smallest number in the table

        document.getElementById("min").innerHTML = min; // write into the "min" case the smallest number
        document.getElementById("max").innerHTML = max; // write into the "max" case the highest number
        document.getElementById("sum").innerHTML = sum; // write into the "sum" case the addition 
        document.getElementById("average").innerHTML = average; // write into the "average" case the average
    })
})();
