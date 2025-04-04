

//object literals


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

// console.log(JsUser.email)
// console.log(JsUser["email"])

//functions

JsUser.greetings = function(){
  console.log("hello world");
}

console.log(JsUser.greetings());

//songleton const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "123ronak"
tinderUser.name = "ronak"
tinderUser.isLogin = true

console.log(tinderUser);

const regularUser = {
    email:"ronak@gmail.com",
    fullname:{
      userfullname:{
        firstname:"hitesh",
        lastname:"dahiya"

      }
    }
    
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj3 = Object.assign({}, obj1 , obj2)
console.log(obj3);

//JSON IS WRITTEN IN FORM OF OBJECT BUT WITHOUT DECLARING NAME
// both key value pair are treated as strigs
//some times we also get the value of json in form of arrays too


// {
//  "name": "ronak",
//  "coursename": "javascript",
//  "price": "free"
// }