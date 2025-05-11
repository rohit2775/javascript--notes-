
// contrl flow 
// if 


// // odd even 
// let num = prompt("Enter a number:");
// num = Number(num);

// if (num % 2 === 0) {
//     console.log("Even number");
// } else {
//     console.log("Odd number");
// }

// //positive ,negative , zero 
// let num = Number(prompt("Enter a number:"));

// if (num > 0) {
//     console.log("Positive");
// } else if (num < 0) {
//     console.log("Negative");
// } else {
//     console.log("Zero");
// }

// vowel or consonant
// let ch = prompt("Enter a character:").toLowerCase();

// if ("aeiou".includes(ch)) {
//     console.log("Vowel");
// } else if (ch >= 'a' && ch <= 'z') {
//     console.log("Consonant");
// } else {
//     console.log("Not an alphabet");
// }

// loops in javascript 

// 1 for loop
// basic syntax 

// for (let i  = 0; i  < 10 ; i ++) {
//     const element = array[i ];

// }

// mostly used for arrays and its operations 


// while loop and do while loop 

// initialization is done globaly or outside the scope  then the condition is checked increment or decrement also needed to terminste the program 
 
// let a= 0

// while (a<=10) {
 
//     console.log('hello rohit ');
//     a+=1
// }


// do while loop 

// initializatiobn is done globaly or outside the scope , then do executes the code whatever is written on its scope ,, thereafter the condition is checked 

// increment or decrement is also important to terminate the loop 
 
// let  b = 22


// do {
//     console.log('hello rohit ');
//     b-=3
// } while (b>=1);


// higher order array functions 

// for... of
let myarray =["rohit","rahul","rishav","gyan","google","facebook "]

for (const elem of myarray) {
    // console.log(elem)

    
}

let name = "ROHIT"

for (const elem of name) {
    console.log(elem);
 // string ke objects ko ek ek krke acces kiya jaa sakta hai 
 //output will be
 // R
 //O
 //H
 //I
 ///T 

}

//map

// var map = new Map()
 
// map.set('IN','INDIA')
// map.set('RS','RUSSIA')
// map.set('BR','BRITAIN')

// // console.log(map);

// for (const key of map) {
//     console.log(key); //it wil give the output in  array format 

   
// }

//  // to change or to destructure the output

//  for (const [key , value] of map) {
      
//      console.log(key , ':-', value);
//  }


// for of objects pr kaam nai krta hai 

var myobj ={
     name:"rohit",
     age : 20,
     class : 3
}

for (const [key ,value] of myobj) {
      console.log(key , ':-', value);

}

// output TypeError: myobj is not iterable