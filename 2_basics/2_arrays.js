const marvel= ["thor", "ironman", "cap"]
const dc= ["superman", "batman"]

// marvel.push(dc)
// console.log(marvel); // [ 'thor', 'ironman', 'cap', [ 'superman', 'batman' ] ] array in array problem!
const allHeros = marvel.concat(dc) 
// console.log(allHeros); // [ 'thor', 'ironman', 'cap', 'superman', 'batman' ] better

//spread method
const all_new_heros = [...marvel, ...dc] // [ 'thor', 'ironman', 'cap', 'superman', 'batman' ] spreads each element

//flat method
const messy_arr = [1,2,3, [4,5],6,[7,[8,9]]]; //depth is 3
const clean_arr = messy_arr.flat(Infinity) //mention depth
// console.log(clean_arr); // [1, 2, 3, 4, 5,6, 7, 8, 9]

// conversion to array
Array.isArray("mitali") // false cus its a string
Array.from("mitali") // ['m', 'i', ...]




