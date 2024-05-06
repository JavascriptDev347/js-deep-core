// // let arr = [1, 24, 1, 1, 343, 5, 5, 6, 7, 2, 3, 5, 1, "ar", "salom", "ar"];

// let users = [];

// let a = arr.forEach((u) => {
//     if (users.length === 0) {
//         users.push(u)
//     } else {
//         // let f = users.includes(u)
//         let f = users.find(user => user == u)
//         if (!f) {
//             users.push(u)
//         }
//     }

// })

// console.log("Natija", a);


// let removeDuplicates = function (nums) {
//     let i = 0;
//     for (let j = 1; j < nums.length; j++) {
//         if (nums[i] !== nums[j]) {
//             i++;
//             nums[i] = nums[j];
//         }
//     }
//     return i + 1;


// };

// console.log(removeDuplicates([1, 1, 2]))


// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var singleNumber = function (nums) {
//     let r = 0;
//     for (const num of nums) {
//         r ^= num;
//     }
//     return r

// };

// console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]))


// function greaterThan10(n) { return n > 10; }

// var filter = function (arr, fn) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {

//         if (fn(arr[i])) {
//             result.push(arr[i])
//         }
//     }
//     return result

// };

// filter([0, 10, 20, 30], greaterThan10)


// let functions = [x => x + 1, x => x * x, x => 2 * x], x = 4;

// var compose = function (functions) {
//     if (functions.length === 0) {
//         return function (x) { return x; };
//     }

//     return functions.reduceRight(function (prevFn, nextFn) {
//         return function (x) {
//             return nextFn(prevFn(x));
//         };
//     });
// };

// console.log(compose(functions)(x))

// var addTwoNumbers = function (l1, l2) {
//     let len = l1 > l2 ? l1.lenght : l2.length
//     let res = [];
//     for (let i = 0; i < len; i++) {
//         if (l1[i] + l2[i] === 10) {
//             res[i] = 0;
//             console.log('r', res[i], i);
//         }
//         res.push(l1[i] + l2[i])
//     }

//     return res
// };

// let l1 = [2, 4, 3], l2 = [5, 6, 4];
// console.log(addTwoNumbers(l1, l2))


// let a;
// let index = 0;
// try {
//     a[index++]
// } catch (error) {
//     index;
// }
// console.log('a',index);


// let point = { x: 1, y: 1 };
// console.log("x" in point);

//garbage collection

