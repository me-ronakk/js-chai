// IF statement

if ( true ){
    //this funtion gonna execute 
}

if ( false ){
    //this funtion not gonna execute 
}

// operators : >(less than) , <(greater than) , >=(less thn or equals to) , <=(greater thn equals to) ,
// ==(equals to) , !=(not equals to) , ===(triple euqals to /stricts checking / also checks data types , eg ( 2==="2"))

const isUserloggedin = true
const temp = 55

if(temp < 50){
  console.log("less than 50")
}
else {
    console.log("temp is greater than 50")
}

//  //concept of scope:
// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`user power is ${power}`);
// }
// console.log(`user power is ${power}`);
 
//short hand execution:
const balance = 1000
 if(balance >500) console.log("test");


 //multiple if statement cases
 //&&(and statement) , ||(or statement)

 const userLoggedin = true
 const debitCard = true
 const googleLog = false
 const emailLog = false

 if(userLoggedin && debitCard){
    console.log("Allows to buy courses");
 }
 if(googleLog || emailLog){
    console.log("Allows to create account"); 
 } else{
    console.log("Account creation denied!");
    
 }