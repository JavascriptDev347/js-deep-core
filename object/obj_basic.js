let msg = "Johnson";
let phrase = msg;

let user = {
    name: "Johnson",
}
let admin = user;

admin.name = "Rustambek";
// console.log(user);

let a = {};
let b = a; //copy the reference
// console.log(a == b);//true
// console.log(a === b)//true


const obj = {
    name: "Johnson",
}
obj.name = "Johnson 2";
// console.log(obj);

//OBJECT ASSIGN
let obj2 = {
    name: "Johnson",
}
let obj3 = {};
for (let key in obj2) {
    obj3[key] = obj2[key];
}
obj3.name = "Johnson 2";
// console.log(obj2); //   still Johnson in the original object

/**
 * Object assign structure
 * this first argument dest is target object
 * Further arguments is a list of source object
 * It copies the properties of all source objects into the target dest,
 * and then returns it as the result.
 * */
// Object.assign(dest, ...sources);

let obj4 = {name: "Johnson", surname: "Smith"};
let per1 = {canEdit: true};
let per2 = {canWrite: true};
Object.assign(obj4, per1, per2, {age: 24});
// console.log(obj4);

//structuredClone property
let u = {
    name: "Johnson",
    age: 24,
    sizes: {
        weight: 60,
        height: 165
    }
}
const clone = structuredClone(u);
console.log(clone.sizes === u.sizes) // false if we do not use structuredClone it will be true
clone.sizes.height = 175;
console.log(u.sizes) // do not change
//  when object has got function property structuredClone does not work

console.log(123)
