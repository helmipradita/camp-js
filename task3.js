const printSegitiga = 5
let string = "";

for (let i = 1; i <= printSegitiga; i++) {
    for (let j = 0; j < i; j++) {
        string += i;
    }
    string += `\n`;
}
console.log(string);