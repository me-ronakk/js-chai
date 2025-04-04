//array = collection of multipule items in single object
 // zero based indexing

const myArr = [0,1,2,3,4,5]
const frnds = ["shivam","riya","nikita","vinita"]
console.log(frnds[2]);

//arrays methods :

myArr.push(6) //add values at the end
myArr.pop() //remove last value of array
myArr.unshift(9)//add values at the starting
myArr.shift(9)//remove values from the starting
console.log(myArr);

const newArr = myArr.join()

console.log(myArr);
console.log(typeof(newArr));