import prompt from "prompt-sync"
const input = prompt()
let day = input("Enter First letter of day: ")
switch(day){
    case 'S':{
console.log("Sunday")
break;
    }
    case 'M':{
        console.log("Monday")
        break;
    }
    case 'T':{
        console.log("Tuesday");
        break;
        
    }
    case 'W': {
        console.log("Wednesday")
        break;
    }
    case 'T':{
        console.log("Thursday")
        break;
    }
    case 'F':{
        console.log("Friday")
        break;
    }
    case 'S':{
        console.log("Saturday")
        break;
    }
    default:{console.log("Wrong Input")}
}