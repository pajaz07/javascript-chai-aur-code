// ~~~~~~~~~~~~~ singeton objects ~~~~~~~~~~~~~~
const tinderUser = new Object()
tinderUser.id = "123"
tinderUser.name = "ros"
// console.log(tinderUser); // { id: '123', name: 'ros' }

// ~~~~~ objects in objects
const regularuser = {
    age: 20,
    fullname: {
        userfullname: {
            firstname: "ros",
            lastname: "verma",
        }
    }
}
// console.log(regularuser.fullname) //{ userfullname: { firstname: 'ros', lastname: 'verma' } }
// console.log(regularuser.fullname.userfullname.firstname) // ros

// ~~~~~ combining two objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign({}, obj1, obj2) //{} makes an empty target obj and others are source, good practice
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//this is used more than the above one
const obj3 = {...obj1, ...obj2}
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// ~~~~~~~~~~~~~ destructuring objects ~~~~~~~~~~~~~~
const course = {
    coursename: "js playlist",
    price: "999"
}

// just a small optimization
const {coursename: cname} = course
console.log(cname); // js playlist
