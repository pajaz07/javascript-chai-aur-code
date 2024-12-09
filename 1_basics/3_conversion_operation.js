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