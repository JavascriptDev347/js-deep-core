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