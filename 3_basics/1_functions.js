// ~~~~~~~~~~~ functions ~~~~~~~~~~~
function sayMyName(){
    console.log("p");
    console.log("a");
    console.log("r");
    console.log("t");
    console.log("h");
}

sayMyName // this is reference
// sayMyName() // this is execution


// function with parameter
function sum(num1, num2){
    console.log(num1 + num2); 
}
// sum(3,4) //7
// sum(3,"4") //34
// sum(3,null) //3

//if we want to store the sum in some other variable result, we will have to return num1+num2
//note: if we call a function expecting parameters but do not pass any, it gives undefined

function loginMessage(user= "ros"){ // this is the default value of the parameter, 
                                    // if nothing is passed while calling this will be used
    console.log("hii");
    
}


// when we are writing a func for shopping cart, we do not know how many parameters we will be needing 
// use rest operator (...)
function calculateCartPrice(...num1){ // if (val1, val2, ...val3) => first two parameters will be val 1 & 2 and rest val3
    return num1
}
console.log(calculateCartPrice(10,20,30)); // [ 10, 20, 30 ] we can easily calculatre sum for this array


//~~~~~ passing obj as parameters
const user = {
    name: "mits",
    age: 19,
}

function handleUser(anyObj){
    console.log(`user is ${anyObj.name}`);
    
}

handleUser(user) // user is mits ; if any parameter or key is not present, it gives undefined