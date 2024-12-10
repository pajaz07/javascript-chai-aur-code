const user = {
    name: "mits",

    welcomeMessage: function(){
        console.log(`${this.name}, welcome`);
        // console.log(this); // this will give all the variables, keys pairs in this obj
    },
    
    
}
user.welcomeMessage() // mits, welcome
user.name = "ros"
user.welcomeMessage() // ros, welcome
// console.log(this); // {} empty as there's no context in global

// function chai(){
//     let username = "parth"
//     console.log(this.username); //undefinded cus we do not use 'this' in a function, only in obj  
// }
// chai()

const chai = () => {
    let username = "parth"
    console.log(this.username); // still undefined
}
chai()

//~~~~~~~~~~ arrow function
const sum = (num1, num2) => { // basic arrow function
    return num1+num2
}

const sumTwo = (num1, num2) => (num1+num2) // implicit returned arrow function ; useful in react
    