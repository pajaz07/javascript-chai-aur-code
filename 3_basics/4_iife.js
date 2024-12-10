// ~~~~~~~~~~ Immediately Invoked Function Expressions ~~~~~~~~~

(function chai(name){ //named iife
    console.log(`DB CONNECTED`);
    
})('mitali'); // ';' is imp to end the scope of this func

// ()(): first () for func definition and second () for execution
// IIFE:
//      function that is executed immediately
//      global scope ke pollution ko hatane ke liye **for interview

( () => {   //  iife using arrow func ; unnamed iife
    console.log(`DB CONNECTED`);
})