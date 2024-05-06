let num = 402; // call stack 123321=>402 Immutable

let user = {
    name: "Rustambek",
    age: 23
} // call stack 90890 =>56785w => {name:"Rustambek",age:23} Muttable

num = 1;
user.name = "John"; // 90890 =>56785w =>


//call stack static memory

//heap dinamik memory











let obj1 = { name: "Rustambek" };
let obj2 = obj1;
let obj3 = { ...obj1 };

obj1.name = "Developer"

console.log(obj1.name)
console.log(obj2.name)
console.log(obj3.name)
















