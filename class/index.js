class MyClass {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name
    }

    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short.");
            return;
        }
        this._name = value;
    }


    sayHello() {
        console.log('Hi ' + this.name)
    }
}

let user = new MyClass('Rustambek')
// user.sayHello()
// console.log(typeof MyClass) //function

let
    userClass = class {
        sayhi() {
            console.log(123)
        }
    }
new userClass().sayhi()