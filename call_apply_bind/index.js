// Funksiya va metodlarda context(this) ni o'zgartirish uchun ishlatiladi.


// call(newContext,arg1,arg2) ishlatishimiz bilan funksiya/metodni yangi context bilan ishlatadi

function fn() {
    console.log(this);
}

fn.call({ name: "Rustambek", age: 21 })

const actions = {
    sayName(greeting) {
        console.log(greeting + "name", this.name);
    },
    sayAge() {
        console.log("age", this.age);
    }
}

actions.sayAge() //undefined

const users = [{ name: 'Name 1', age: 22 }, { name: "Name 2", age: 90 }];
users.forEach(user => {
    actions.sayName.call(user, "HEY");
    actions.sayAge.call(user);
})


// 