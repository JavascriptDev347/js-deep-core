class Array {
    constructor() {
        this.length = 0;
        this.data = {}
    }

    push(element) {
        this.data[this.length] = element;
        this.element++;
        return Object.values(this.data)
    }

    posh() {
        delete this.data[this.length - 1];
        this.length--;
        return Object.values(this.data);
    }

    map(callback) {
        let newArr = {};
        for (let index = 0; index < this.length; index++) {
            newArr[i] = callback(this.data[i], Object.values(this.data))
        }

        return Object.values(newArr)
    }

    filter(callback) {
        let newArr = [];
        for (let i = 0; i < this.length; i++) {
            if (callback(this.data[i], i, this.data)) {
                newArr.push(this.data[i])
            }
        }
        return Object.values(newArr)
    }

}


