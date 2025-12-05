let fruits = ["Apple", "Mango", "Banana",["Badam", "Kaju", ["Tarun", "Kumar"]]]

//push -> add item in last of the array.
//pop -> remove item from last of the array.
//unshift -> add item in start of the array.
//shift -> remove item from start of the array.
// ...fruits -> spread operator it spread all items inside array
//example for nested array we use flat(Infinity)
console.log(...fruits.flat(Infinity))