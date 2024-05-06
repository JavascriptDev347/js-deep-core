class StringMethods {
    #data

    constructor(data) {
        this.#data = data;
        this.length = data.length;
    }

    toLowerCase() {
        let result = "";
        for (let i = 0; i < this.length; i++) {
            let code = this.#data.charCodeAt(i)
            if (code > 64 && code < 91) {
                // String.fromCharCode() converts Unicode values to strings
                result += String.fromCharCode(code + 32);
            } else {
                result += str.charAt(i);
            }
        }
        return result
    }

}

let str = new StringMethods("SALOM")




let s = "Hello world"

//stringdan kerakli qismlarni ajratib olish
console.log(s.substring(1, 4))
console.log(s.slice(1, 4));
console.log(s.slice(-3))
// split stringni belgiga kora massivga ugirib berad
console.log(s.split(" "));
//  berilgan parametrni boshidan boshlab qidiradi birinchi uchraganini indexsini korsatad
console.log(s.indexOf("l"))
// oxiridan qidiradi va birinchi uchraganini chiqaradi
console.log(s.lastIndexOf("l"))

// Boolean searching functions in ES6 and later
console.log(s.startsWith("Hell")) //true: the string starts with
console.log(s.endsWith("!"))// => false: s does not end with that
console.log(s.includes("or")) // => true: s includes substring "or"

// Creating modified versions of a string
console.log(s.replace("llo", "ya"))// => "Heya, world"
console.log(s.toLowerCase())// => "hello, world")


// Inspecting individual (16-bit) characters of a string

console.log(s.charAt(0)) // => "H": the first character)
console.log(s.charCodeAt(0)) // => 72: 16-bit number at the specified position)

