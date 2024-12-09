/*
MEMORY: STACK AND HEAP

Stack- Primitive
Heap- Non-primitive
*/

//For primitive (stack)
let nameOne = "parth"
let nameTwo = nameOne
nameTwo = "mitali"

console.log(nameOne)  // parth
console.log(nameTwo)  // mitali
//here when we assign one variable to another, we create a duplicate/ copy of the first 

//For non-primitive (heap)
let userOne = {
    age: 20,
}
let userTwo = userOne
userTwo.age = 19

console.log(userOne.age)  // 19
console.log(userTwo.age)  // 19
//here when we assign one non primitive datatype (obj here) to another, 
// we give reference of the first object, therefore when we change something for second it also chanegs for first

// NOTE:
//      stack me copy hi milta hai, changes are made in the copy
//      heap me reference milta hai, chanegs are made in the original
