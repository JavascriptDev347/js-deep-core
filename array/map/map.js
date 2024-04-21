function myMap(callback) {
    let newArray = [];
    let len = this.length
    for (let i = 0; i < len; i++) {
        newArray.push(callback(this[i], i, this));
    }

    return newArray;

}

Array.prototype.myMap = myMap;
let array = [1, 2, 3, 4];
const newArray = array.myMap(el => el * 2);
console.log(newArray);