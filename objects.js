// let user = {
//   " user name": "Tarun",
//     age: 23,
//     course: "B-Tech"
// }
//here i want to add a new key value pair

// user.dob = 25_11_2002   //adding elements by dot . notaion
// console.log(user.dob); //accessing elements by dot . notaion  

//now here adding element by square bracket 
// user["dob"] = 25112002
// accessing elements by square bracket method
//console.log(user["dob"]);


//diffrence b/w dot and square bracket 
// i we a a key in which the name of key having space like this

//use name => then in this case we cant use dot notaion
//where by square bracket way we can access it
//example
//user.user name is not valid
//where in case of array bracket square


//iteration in objects
let user = {
    name: "Tarun",
    dob: 25112002,
    subjects: ["maths", "science", "eng", "sst"]
}
// for (let key in user){
//     console.log(key, user[key]);
    
// }

// we can also use Object.keys(object ka naam) to iterate an object.

//console.log(Object.keys(user))
// it is returning an array of keys so now we ca check its type
//console.log(typeof Object.keys(user))
//here i am iterating this object by converting its key into array by using Object.keys and then we can use for of loop to iterate.
let myArray = Object.keys(user)
for(let key of myArray){
    console.log(user[key]);
}