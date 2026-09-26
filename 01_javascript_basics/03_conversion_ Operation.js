
let age = "33"

console.log(typeof age);
const Age = Number(age)
console.log(Age);

console.log(typeof Age);

// simple strings can be converted into numbers but strings like 33abs , 3b4b5 ... are directly converted into NaN 

let call = "5252541sefr"
 console.log(typeof call );

 let Call = Number (call)

 console.table([Call , typeof Call]);

// ┌─────────┬──────────┐
// │ (index) │ Values   │
// ├─────────┼──────────┤
// │ 0       │ NaN      │
// │ 1       │ 'number' │
// └─────────┴──────────┘



// lets convert undefined  datatype 

 let name = undefined
 let Name = Number(name)
 
 console.table([Name , typeof Name ]);


//  ┌─────────┬──────────┐
//  │ (index) │ Values   │
//  ├─────────┼──────────┤
//  │ 0       │ NaN      │
//  │ 1       │ 'number' │
//  └─────────┴──────────┘ 
 

// boolean conversion 

let isLoggedIn = 1 
let NewIsLoggedIn = Boolean(isLoggedIn)

console.table([NewIsLoggedIn, typeof NewIsLoggedIn]);


// ┌─────────┬───────────┐
// │ (index) │ Values    │
// ├─────────┼───────────┤
// │ 0       │ true      │
// │ 1       │ 'boolean' │
// └─────────┴───────────┘


// hence boolean values are converted into true or false 
// if the value has empoty string , it will convert it to false 
// " " = false
// " anything " = true


//********************************************************><<<<====>>>>***************************************************** */

                                                         // OPERATIONS //

// negative 
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**2);  this means power (2^2) 

console.log("2" +2+ 2);
console.log(2 +"2"+ 2);
console.log(2 +2+ "2");