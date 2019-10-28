/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    let a= document.getElementById("op-one").value
    let b= document.getElementById("op-two").value


    const performOperation = operation => {
        // perform the operation
        switch (operation) {
            case "addition":
                    alert(parseInt(a)+parseInt(b))
                break
            case "substraction":
                alert(parseInt(a) - parseInt(b))
                break
            case "multiplication":
                alert(parseInt(a) * parseInt(b))
                break
            case "division":
                alert(parseInt(a) / parseInt(b))
                break
            default:
                alert("Veuillez remplir les cases")
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
