
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
    // console.log(elem);
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

// for (const [key ,value] of myobj) {
    //   console.log(key , ':-', value);


// }

// output TypeError: myobj is not iterable


//pr  for in loop objects prr kaam krta hai 

//example :-

// var myobj = {
//     name : "rohit ",
//     class : 3,
//     age : 34,
//     isloggedin : "yes "
// }

// for (const key in myobj) {
//    console.log( `${key}  is ${myobj[key]}`);
//     }  
// ?? kya ye arrays pr bhi kaam karega ??

// lets check 

let arr =["js", "swift", "php","python "]

for (const key in arr) {
//    console.log(`${key} : ${arr[key]}`);

}

// yes arrays pr for in loop kaam karta hai 

// ?? kya map pr for in loop kaam karta hai ??

// lets check 

var map = new Map()
 
 map.set('IN','INDIA')
 map.set('RS','RUSSIA')
 map.set('BR','BRITAIN')

 for (const key in map) {
  
console.log(key);
    }
 // so, no errors, nothing in the console it means it is not iterable 


 // array methods 

 let arr1 = ["rohit","rahul","raj","rounak"]

//  arr1.forEach( function arr (elem){
//     console.log(elem);

//  })

 // can also  run it by giving refrence 
 
 function printarray (elem){
    // console.log(elem);
 }

 arr1.forEach(printarray) // function ks refrence dena hai naki usko execute krna hai 
 
// foreach ek aaisa array method hai jo ki array ke elements , index , aur har ek element pura ka pura element rakhne ka takat rakhta hai 

arr1.forEach((item, index , arr)=>{
    // console.log(item, index, arr);
})
//output will be
//  rohit 0 [ 'rohit', 'rahul', 'raj', 'rounak' ]
//rahul 1 [ 'rohit', 'rahul', 'raj', 'rounak' ]
//raj 2 [ 'rohit', 'rahul', 'raj', 'rounak' ]
//rounak 3 [ 'rohit', 'rahul', 'raj', 'rounak' ]

array1 =[
    {
        name:"rohit",
        age :23
    },
    {
        name:"rohan",
        age :22
    },
    {
        name:"riya",
        age :13
    }
]

array1.forEach((item)=>{
    // console.log(item.name);
})


// forEach maximum time backend me use hoga aur databanse me data above like format me rahega , iss tarah se access kr sakte hai 
 

// aray methods  array.map() 
//example 

let array2 = [20,30,40,50,60,70,80]

const answer = array2
                     .map((num)=> num*10)
                     .map((num)=> num *20)
// map me naya array return hua hai jo ki dono hi multiplication ke baad ka result hai 


// console.log(answer);
//    [4000,  6000,
//    8000, 10000,
//   12000, 14000,
//   16000
// ]


// array  methods 2... array.reduce 

const arr3= [1,2,3,4,5,6,7]

 const ans2=arr3.reduce(function(acc, currvalue){
    // console.log(`the accumulator is ${acc} and currentvalue is ${currvalue}`); // logic samajhne ke liye
    return acc+currvalue 
},0)                                   // here 0 is the value for accumulator , initialization 
console.log(ans2);


// terms related to array.reduce() method 

// accumulator = woh box ya jagah jisme result banta jaa raha hai.
// currentValue = abhi ka number ya element jis par kaam ho raha hai.


// starting js DOM    