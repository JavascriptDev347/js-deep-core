function myReduce(callback, accumlator) {
    let len = this.length;
    let result = accumlator ? accumlator : null;
    for (let i = 0; i < len; i++) {
        result = callback(result, this[i]);
    };

    return result;
}