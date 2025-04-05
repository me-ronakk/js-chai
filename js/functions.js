function sayMyName(){
    console.log("R");
    console.log("O");
    console.log("N");
    console.log("A");
    console.log("K");
}

//sayMyName()

function addTwoNum(number1 , number2){
   // console.log(number1 + number2);
    return number1 + number2
}

//addTwoNum(3 , 5)

function loginUsermes(username){
    if(!username){
        console.log("please enter a username")
    }
  return `${username} jst logged in`
}
 console.log(loginUsermes())
// (...) these dots are rest and spread value
 function calculatecartprice(...num1){
    return num1
 }

console.log(calculatecartprice(200, 400, 500))

//function through arrays 

const newArray = [200,400,600,800]

function gettingArray(getArray){
  return(getArray[3])
}

console.log(gettingArray(newArray));

//functions through objects
 const object1 = {
    username: "Ronak",
    price: 200,

}

function getObject (getObj){
   console.log(`user ${getObj.username} just loggedIn added to cardt item worth $${getObj.price}`)
}

getObject(object1)