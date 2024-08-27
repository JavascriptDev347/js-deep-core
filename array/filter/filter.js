function myFilter(callback) {
    let len = this.length;
    let newArray = [];
    for (let index = 0; index < len; index++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}



function FILTER(array, callback) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }

    return result;
}
