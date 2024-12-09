const accountId = 101                    
//must be initialised with some value, cant be changed later everything below can be changed

let accountEmail = "parth@gmail.com"
// used this instead of var due to scope problems

var accountPassword = "12345678"
// used in old times, not used now, DO NOT USE var now

accountCity = "Pune"
// this works but is not preferred

let accountState;
// if we declare but not initialise varibales in js it gives 'undefined' (by default)

console.table([accountId, accountEmail, accountPassword,accountCity, accountState])