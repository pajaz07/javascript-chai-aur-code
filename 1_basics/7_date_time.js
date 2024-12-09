// ~~~~~~~~~~~~~~~~~~~~~ D A T E ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let myDate = new Date()
// console.log(myDate); // 2024-12-09T13:50:58.304Z
// console.log(myDate.toString()); // Mon Dec 09 2024 13:50:58 GMT+0000 (Coordinated Universal Time)
// console.log(typeof myDate); // object


// there are multiple functions for dates we can use any of them as per our convinience
// console.log(myDate.toDateString()); // Mon Dec 09 2024
// console.log(myDate.toLocaleString()); // 12/9/2024, 1:53:56 PM

// creating an arbitrary date
let myCreatedDate = new Date(2024, 11, 9) //yyyy, mm, dd, hr, minutes ;  months start from 0 **
// console.log(myCreatedDate.toDateString()); // Mon Dec 09 2024

let myCreatedDateTwo = new Date("2024-12-09")
// console.log(myCreatedDateTwo.toLocaleString()); // 12/9/2024, 12:00:00 AM

let myTimeStamp = Date.now() // gives milliseconds from 1 jan 1970 till now
// console.log(myTimeStamp); // 1733752981039

// there are many methods related to date like getHour, getDay, getMonth etc

// if we want more customization:
newDate.toLocaleString('default', {
    weekday: "long",
    // we can set every detail as per our needs
})