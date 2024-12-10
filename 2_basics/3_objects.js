// singleton:
// Object.create

// object literals:
const JsUser = {  //it has key-value pair ; we can chaneg the values as well
    name: "mitali",
    age: 19,
    location: "pune",
    isLoggedIn: false,
    lastActive: ["monday", "saturday"],
}

//how to access?
// console.log(JsUser["name"]); // using []
// console.log(JsUser.location) // using .

// Object.freeze(JsUser) // makes the object non changeable no values can be changed 

JsUser.greeting = function(){
    console.log("Hellooo")
}
console.log(JsUser.greeting());

//writing func with the ibjects properties
JsUser.greetingTwo = function(){
    console.log(`Hello ${this.name}`)
}
console.log(JsUser.greetingTwo());