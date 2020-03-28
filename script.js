class HexaDecimal {
    constructor() {
        this.array1 = [];
        this.array2 = [];
        this.temp = null;
        this.abcAlphabet = ["A", "B", "C", "D", "E", "F"]
    }
    createArray() {
        let i;
        for (i = 0; i < 6; i++) {
            let userVal = Math.floor(Math.random() * 15) + 1;
            this.array1.push(userVal);
        }
        let arrayLength = this.array1.length
        for (i = 0; i <= arrayLength + 1; i++) {
            if (this.array1.length != 0) {
                this.temp = this.array1.shift();
                if (9 < this.temp && this.temp < 16) {
                    this.temp = this.temp - 9
                    this.array2.push(this.abcAlphabet[this.temp - 1])
                } else {
                    this.array2.push(this.temp)
                }
                this.temp = null
            } else {
                return this.array2
            }
        }
    }
    unpackArray() {
        let tempString = '#', array2Length = this.array2.length, i;
        for (i = 0; i < array2Length; i++) {
            tempString = tempString + this.array2[0];
            this.array2.shift()
        }
        return tempString;
    }
}
function getHex() {
    let i = null, newHex = [];
    for(i=0;i<3;i++) {
        const user = new HexaDecimal;
        user.createArray();
        newHex.push(user.unpackArray());
    }
    document.getElementById('demo').style.backgroundColor = newHex[0]
    document.getElementById('demo2').innerHTML = newHex[0]
}
getHex()
