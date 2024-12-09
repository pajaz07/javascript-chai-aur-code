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

/*
Primitive datatypes:
    1. String
    2. Number
    3. Boolean
    4. null
    5. undefined
    6. Symbol
    7. BigInt

Non-primitive (reference):
    1. Array
    2. Objects
    3. Functions

*/

const arr_letters = ["aaa", "bbb", "ccc"]

let myObj={
    name: "Parth",
    age: 20,
}

const myFunc = function(){
    console.log("hellooo");
    
}


