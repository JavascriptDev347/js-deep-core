// function myFunc(){log(12)}
// var h = undefined
//let l
//const c

// console.log(h);
// console.log(l, c); //tdz start
// TDZ - temporayly dead zone


console.log(sum(10, 4))


function myFunc() {
    console.log(12);
}

if (false) {
    console.log(3);
}

var h = "Hello";
let l = 123; //end
const c = "SALOM";

function sum(a, b) {
    return a + b;
}


