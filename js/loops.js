// for loop : start ; stop ; step

//  for (let i = 0; i < 10 ; i++) {
//     const element = i;
//     if(element === 5){
//         console.log("5 is the best number");
        
//     }
//     console.log(element);
    
//  }

//   for (let i = 0; i <= 10; i++) {
//     console.log(`outer loops values ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//        console.log(`inner loops value ${j}`);
       
        
//     }
    
//   }

//lopps in array

   let myArray = ["flash" , "batman" , "superman" , "spiderman"]

  for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(`list of my superheroes ${element}`);
     
  }

  //break and continue

  for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log(`detected 5`);
        break
    }
    console.log(`value of i is ${index}`);
    
    
  }

  
  for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log(`detected 5`);
        continue
    }
    console.log(`value of i is ${index}`);
    
    
  }