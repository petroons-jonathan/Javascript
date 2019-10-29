/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    class Dog extends Animal // declaring a class dog who is an extension of Animal
    {
        constructor(name) // constructor class
        {
            super() // need to be used to call the class
            this.name = name;
        }
        static greeting="Woof";
      }

      class Cat extends Animal // declaring a class dog who is an extension of Animal
      {
          constructor(name) // constructor class
          {
              super() // need to be used to call the class
              this.name = name;
          }
          static greeting="Miaouw"; // use it on Chrome doesn't work on Mozilla !!
        }
      
    
    

    document.getElementById("run").addEventListener("click", function (){

    const newDog = new Dog("Kyro"); // declaring a new dog with the name "Kyro"
    const newCat = new Cat("Garfield");

    console.log(newDog.sayHello());
    console.log(newCat.sayHello());

    })
    // your code here
})();
