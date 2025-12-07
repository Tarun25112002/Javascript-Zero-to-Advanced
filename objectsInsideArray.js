let users = [
    {
        userName: "Tarun",
        age: 23
    },
    {
        userName: "Tanvi",
        age: 25
    },
    {
        userName: "Sunita",
        age: 50
    },
    {
        userName: "Dhirendra",
        age: 54
    }
]
// iteration in objects in array
// for(let user of users){
//     console.log(user);
    
// }


// destruring nested object in array

const [{userName: userName1}, {userName: userName2}, {userName: userName3}, {userName: userName4}] = users;
console.log(userName1, userName2);
