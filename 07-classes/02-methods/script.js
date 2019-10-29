/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Person {
        constructor(firstname, lastname) {  // create the class with constructor (only one per class)
          this.firstname = firstname;
          this.lastname = lastname;
        }
       
        get sayHello() { // method to get the function hello 
          return this.hello();
        }
      
        hello() {
          return `${this.firstname} ${this.lastname}`; // function "hello" who return the firstname and the lastname
        }
      }
      
      const newPerson = new Person("Jimi","Hendrix"); // give a value to the class (Jimi for the firstname and Hendrix for the lastname)

      const newPerson2 = new Person("Sid","Vicious");

      document.getElementById("run").addEventListener("click", function () { // create an event on click 

      console.log(newPerson.sayHello); // declaring the method and value
      console.log(newPerson2.sayHello);

      })
})();
