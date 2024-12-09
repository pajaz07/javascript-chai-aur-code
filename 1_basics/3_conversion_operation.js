let score = "53"
console.log(typeof score)

let scoreinNum = Number(score)  // datatype conversion 
console.log(typeof scoreinNum);

/*
but if here we had score="33abc", 
it should not be converted to number 
but it will be converted and the value of scoreinNum will be NaN (not a number)
It is a small issue in JS
*/

let val=3
let negval = -val //negation

// These are not preferrable 
console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

// == check if values are equal ("2" == 2 => true)
// === strict check: also checks datatype ("2" === 2 => false)
