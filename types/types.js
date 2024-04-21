//Primitive types
// number
// for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
let num = 2024
//bigInt
//for integer numbers of arbitrary length.
const bigInt = 1234567890123456789012345678901234567890n;

//String
//for strings. A string may have zero or more characters, there’s no separate single-character type.
let str = "Assalomu alaykum"

// Boolean
// for true/false.
let b = true, a = false;

//null
// for unknown values – a standalone type that has a single value null.
let age = null;

//Undefined
// for unassigned values – a standalone type that has a single value undefined.
let name; //undefined

//Symbol
//for unique identifiers.
let id1 = Symbol("id");
let id2 = Symbol("id")
console.log(id1 === id2)

//non-primitive
//Object
// for more complex data structures.
let obj = {}
