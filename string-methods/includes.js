//how to work includes string property;

// #includes
const browserType1 = "Hello world Salom";

// if (browserType1.includes("world Sa")) {
//     console.log("Found ! ");
// } else {
//     console.log("No  here!");
// }

function customIncludes(str, searchString) {
    if (searchString.length > str.length) {
        return false
    }
    for (let i = 0; i < str.length - searchString.length; i++) {
        let found = true;
        for (let j = 0; j < searchString.length; j++) {
            if (str[i + j] !== searchString[j]) {
                found = false
            }
        }
        if (found) {
            return true
        }
    }
    return false
}


function customIndexOf(str, searchString) {
    for (let i = 0; i < str.length - searchString.length; i++) {
        let found = true;
        for (let j = 0; j < searchString.length; j++) {
            if (str[i + j] !== searchString[j]) {
                found = false;
            }
        }
        if (found) {
            return i
        }
    }
    return -1
}

// let str = "Assalomu alaykum dunyo";
// let find = "alay"
// console.log(customIndexOf(str, find

// // #startsWith
// const browserType2 = "mozilla";

// if (browserType2.startsWith("zilla")) {
//     console.log("Found zilla!");
// } else {
//     console.log("No zilla here!");
// }

// // #endsWiths

// const browserType = "zilla";

// if (browserType2.endsWith("zilla")) {
//     console.log("Found zilla!");
// } else {
//     console.log("No zilla here!");
// }







function customSlice(str, l, j) {
    let newString = "";
    for (let i = l; i < j; i++) {
        newString += str[i]
    }
    return newString;
}

let l = 0, j = 4, str = "mozilla";

console.log(customSlice(str, l, j))

