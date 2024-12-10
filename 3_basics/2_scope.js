if(true){
    let a = 10
    const b = 20
    var c = 30
}
// {} is the scope

console.log(a); // gives error as it is not defined in the scope
console.log(b); // gives error as it is not defined in the scope
console.log(c); // 30 ; ideally shud hv given error, thats why we do not use var

