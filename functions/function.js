// Function Declaration
// In JavaScript, a function is not a “magical language structure”, but a special kind of value.
// The syntax that we used before is called a Function Declaration:
let age_1 = 2001;

function showMessage() {
    let name = "Rustambek";
    console.log("My name is ", name);
    console.log(age_1) // ishlaydi
}

showMessage();
// console.log(name) // xato

// Function expressions
// There is another syntax for creating a function that is called a Function Expression.
// It allows us to create a new function in the middle of any expression.
let sayHi = function () {
    console.log("expression function")
}

// A Function Expression is created when the execution reaches it and is usable only from that moment.
//     Once the execution flow passes to the right side of the assignment let sum = function… – here we go, the function is created and can be used (assigned, called, etc. ) from now on.
//     Function Declarations are different.
//     A Function Declaration can be called earlier than it is defined.


// That’s because a Function Declaration is only visible inside the code block in which it resides.
let age = 16; // take 16 as an example
if (age < 18) {
    welcome();               // \   (runs)//  |
    function welcome() {     //  |
        alert("Hello!");       //  |  Function Declaration is available
    }                        //  |  everywhere in the block where it's declared
                             //  |
    welcome();               // /   (runs)

} else {
    function welcome() {
        alert("Greetings!");
    }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined

// The correct approach would be to use a Function Expression and assign welcome to the variable that is declared outside of if and has the proper visibility.
