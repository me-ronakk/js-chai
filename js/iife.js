//IIFE = Immediately Invoked Function Expressions 
// to avoid the pollution(variables , functions) of global scope and to execute function immediately
// syntax = ()()


//named iife
(function chai (){
console.log("ronak dahiya");

})(); // last () to execute the functions directly

//unnamed iife anmd parameter iife
// using iife in arrow funtion
( (name)=>{
    console.log(`ronakdahiya ${name}`);
    
})("shivam");