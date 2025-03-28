// # primitive datatypes =>

// 7 category : string, number , boolean , null ,
//  undefined , symbol, bigInt

//JAVASCRIPT IS DYNAMICALLY DESIGNED

// non-primitive datatype (reference type)=>

// array , objects, functions
 
// mrmory //

//stack memory(primitive) getting copy of the reference , no original value is changed in update

// heap memory(non-primitive) getting original copy , original value gets changed if changed in update 

let myYoutubename = "ronakdahiyadotcom"
 
let anothername = myYoutubename
anothername = "robindahiya"

console.log(myYoutubename);
console.log(anothername);
