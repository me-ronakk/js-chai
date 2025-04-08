const user = {
    user: "ronak",
    price: 100,
    welcomeMessage: function(){
    console.log(`${this.user} , welcome to website`);
        console.log(this);
        
    }
}

//this talks about the current context , it only wrks with object not in direct function

console.log(user.welcomeMessage());
 
 user.user = "robin"
 user.welcomeMessage()
 console.log(this);
 
//  function chai(){
//     console.log(this); 
//  }
//  chai()

 const chai =() => {
console.log(this)
 }

//  chai()
    

// *************ARROW FUNCTION**************
// 1st method :-
const addTwo = (num1 , num2) => {
return num1 + num2
} 
console.log(addTwo(4 ,9));

// 2nd method:- always use () which works as a return funtion
const addThree = (num1 , num2 , num3) => (num1 + num2 - num3)
    console.log(addThree(5 , 9 ,10))

