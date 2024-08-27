// let
// let let_variable = "Hello world", let_variable2 = "Salom";
let name  = "Rustambek"

// We can declare variables to store data by using the var, let, or const keywords.

// let – is a modern variable declaration.
// var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
// const – is like let, but the value of the variable can’t be changed.

function findGlasses(arr) {
    const pattern = /O-+O/;
    for (let i = 0; i < arr.length; i++) {
      
        if (pattern.test(arr[i])) {
            return i;
        }
    }
    return -1;
}

findGlasses(["floor", "the floor again", "pockets", "bed", "cabinet", "the top of my head O-#O"])
