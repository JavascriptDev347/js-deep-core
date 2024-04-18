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
console.log(str.toLowerCase())

