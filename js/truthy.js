const userEmail = "ronak@d.ai"
if(userEmail){
    console.log("got ur email");
    
} else{
    console.log("dont have ur email");
    
}

// falsy values : 
// false , 0 , -0 . Bigint 0n , "" , null , undefined , NaN

//truthy values :
//true , "0" , "false" , " " , [] , {} , funtion(){}

// Nullish Coalescing Operator(??) : null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
console.log(val1);

// terniary operator syntax :

// condition ? true : flase

const iceprice = 100
 iceprice <= 80 ? console.log("less than 80") : console.log("more than 80");
 
 