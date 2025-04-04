//singleton

//object literals
//Object.create

//symbol

const mySym = Symbol("key1")
const JsUser = {
    name: "ronak",
    age:19,
    [mySym] :"key1",//use [] to make it a symbol
    location:"delhi",
    email:"ronakdahiya81@gmail.com",
    isLoggedin: false,
    LastLoginDays:["monday","tuesday"]  
}

console.log(JsUser.email)
console.log(JsUser["email"])

//functions

JsUser.greetings = function(){
  console.log("hello world");
}

console.log(JsUser.greetings());