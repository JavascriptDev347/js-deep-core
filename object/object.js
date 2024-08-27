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

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
let o = { name: "John" };
Object.assign(o, permissions1, permissions2);
// console.log(o)  //{ name: 'John', canView: true, canEdit: true }
let user1 = {
    name: "John",
    age: 30
};
let clone = Object.assign({}, user1)
// console.log(clone === user1) //false







const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function () {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
        console.log(`Hi! I'm ${this.name[0]}.`);
    },
};

// console.log(person["name"])

const person1 = {
    name: "Chris",
    introduceSelf() {
        console.log(`Hi! I'm ${this.name}.`);
    },
};

const person2 = {
    name: "Deepti",
    introduceSelf() {
        console.log(`Hi! I'm ${this.name}.`);
    },
};

// console.log(person1 == person2)

//Object create method

const ObjectPrototypes = {
    great() {
        console.log(`Salom ${this.name}`)
    }
}

const newObject = Object.create(ObjectPrototypes)

// newObject.great()

function Person(name) {
    this.name = name
}

Object.assign(Person.prototype, ObjectPrototypes)

console.log(typeof ObjectPrototypes)


