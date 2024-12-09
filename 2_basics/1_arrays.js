// ~~~~~~~~~~~~~~ A R R A Y S ~~~~~~~~~~~~~~~~~~~~~~
const arr = [0, 1, 2, 3, 4, 5, true, "mitali"]
// arrays can have mixed datatype elements 
// they are resizable
// elements cant be accessed through strings only index
// shallow copy (reference like in heap)

const myarr = new Array(1,2,3,4)

//Array methods:
arr.push(6) // pushes element at the end
arr.pop() // removes last element
arr.unshift(0) // adds the mentionmed value at the start not optimal tho
arr.shift() // removes the first element
arr.includes(9) // false
arr.indexOf(9) // -1 (not existing)
arr.join() // 0,1,2,3,4,5,true,mitali gives in string format ig
arr.slice(1,3) // returns copy of sub array [1,3) => [1, 2]
arr.splice(1,3) // this removes the elements in this range [1,3] from the original array ****
