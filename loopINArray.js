let fruits = ["apple", "mango", "grapes", "banana"]
//  let newfruits = []
// for(let i = 0; i<fruits.length; i++){
   
//     newfruits.push(fruits[i].toLocaleUpperCase())
    
// }
// console.log(newfruits);

// for in vs for of
for(let fruit of fruits){
    console.log(fruit);
    
}
for(let index in fruits){
console.log(index);

}