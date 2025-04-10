// for of loop :

// ["", "", "", ""]
// [{} , {} ,{}, {}]

 const arr = [1, 2, 3,4 ,5]

for (const num of arr) {
    console.log(num);
    
}

const greeting = "hello world"
for (const greet of greeting) {
    console.log(`each char of greeting is ${greet}`);
    
}

//maps are known for the unique entry

const map = new Map()
map.set('IN', "India")
map.set('USA', "Unites State of America")
map.set('Fr', "France")

console.log(map);

for (const [key, value] of map) {
    console.log(key ,' :-', value);
    
}

const obj = {
    'game1': "BGMI",
    'game2': "skylines"
}

for (const key in obj) {
   console.log(`${key} is for ${obj[key]}`);
   
}

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newnums = num.filter((num) => num > 4)
console.log(newnums);
