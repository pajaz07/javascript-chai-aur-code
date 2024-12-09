const score = 100
// how to explixitly set the datatype:
const balance = new Number(200)

// console.log(score); // 100
// console.log(balance); // [Number: 200]
// console.log(balance.toString().length) // 3
// console.log(balance.toFixed(2)) // 200.00  for decimal point precision




//~~~~~~~~~~~~~~~~~~~ M A T H S ~~~~~~~~~~~~~~~~~~
// console.log(Math) //Object [Math] {}
// console.log(Math.abs(-2)) // 2
// console.log(Math.round(4.6)) // 5
// // we have pow, ceil, floor, max, min etc
// //the most used method : 
// console.log(Math.random()) // outputs random value between 0 and 1 (both inclusive)

const min=10
const max=20 // we want values between 10 and 20

console.log(Math.floor(Math.random() * (max-min+1)) + min);



