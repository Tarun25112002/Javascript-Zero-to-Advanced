//var is function scoped.

//exapmle
function name(){
    if(true){
        var myName = "Tarun";
    }
    console.log(myName);
}
// name();

//let and const are block scoped.
//exapmle
function myName(){
    if(true){
        let myName = "Tarun";
    }
    console.log(myName);
}
// myName();

// exapmle
function myName(){
    if(true){
        const myName = "Tarun";
    }
    console.log(myName);
}
// myName();

//var can be redeclared
//example
// var myName = "Tarun";
// var mynName = "Tarun Jha";
// console.log(myname);

//let and const cannot be redeclared
// let myRealName = "Tarun";
// let myRealName = "Tarun Jha";
// console.log(myRealName);


//var gets hoisted
//JavaScript moves variable declarations to the top of the scope before running the code.
//example
// console.log(age);
// var age = 23;
//let and const don't get hoisted

// console.log(age);
// let age = 23

// console.log(myAge)
// const myAge = 23