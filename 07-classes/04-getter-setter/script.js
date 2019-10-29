/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Person { // declaring a person 
        constructor(firstname, lastname){ // construct the class person with lastname and firstname
            this.firstname = firstname;
            this.lastname = lastname;
        }
        
        get name(){
            return `${this.firstname} ${this.lastname}`; // use a get to return the firstname and the lastname 
        }
        set name(str){
            this.firstname + this.lastname;
        }
    }

    document.getElementById("run").addEventListener("click", function () {

        let newPerson1 = new Person("Jimi","Hendrix"); // declare the variable with "Jimi" as firstname and "Hendrix" as lastname
        let newPerson2 = new Person("Sid","Vicious");

        console.log(newPerson1.name); // console log the variable newPerson1 with his value and call the function
        console.log(newPerson2.name);
    })
})();
