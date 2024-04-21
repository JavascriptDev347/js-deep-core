let user = {
    name: "Rustambek",
    age: 22
};
let u = new Object({
    name: "Rustambek",
    age: 34,
    isAdmin: true,
    "first name": 'Toliq ism'
});


//delete
// console.log(u)
// delete u.isAdmin;
// console.log(u)

// console.log(u["first name"]) // to'liq ism;


let obj = {
    type: 'Car'
}

let obj1 = obj;
obj1.type = 'Univer'
// console.log(obj === obj1)
// console.log(obj1, obj)


//assign

let permissions1 = {canView: true};
let permissions2 = {canEdit: true};
let o = {name: "John"};
Object.assign(o, permissions1, permissions2);
// console.log(o)  //{ name: 'John', canView: true, canEdit: true }
let user1 = {
    name: "John",
    age: 30
};
let clone = Object.assign({}, user1)
// console.log(clone === user1) //false
