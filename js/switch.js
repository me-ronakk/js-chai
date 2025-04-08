//switch case statement basic syntax:

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// shift + alt + down arrow key to make a copy of the selected part

const month = 3

switch (month) {
    case 1:
        console.log("January");
        
        break;
    case 2:
        console.log("February");
        
        break;// breaks the control flow in case here if break was comment out thn march april both would have been outputed
    case 3:
        console.log("March");
        
        break;
    case 4:
        console.log("April");
        
        break;

    default:
        console.log("Default case match");
    
        break;
}