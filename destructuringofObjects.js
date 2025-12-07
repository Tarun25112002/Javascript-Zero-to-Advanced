//destructuring of objects
let user = {
    name: "Tarun",
    age: 23,
    dob: 25112002
}
const {name} = user
//if we want to use custom var name then
const{name:myname, ...other}= user
console.log(other);
                                   