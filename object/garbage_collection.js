//What happens when something is not needed any more?
// How does the JavaScript engine discover it and clean it up?

let user = {name: "Asilbek"};
let admin = user;
admin.name = "Rustambek"; //user.name is changed and first value cleaned by garbage collection
// console.log(user.name);

//interlinked objects

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
    return {
        father: man,
        mother: woman,
    }
};

// Interlinked objects
let family = marry({name: "Johnson"}, {name: "Asia"});
