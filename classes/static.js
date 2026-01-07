 
 class User {
    constructor(username){
        this.username= username
    }
     static   logMe(){
        console.log(`the username is ${this.username}`);
    }
 }


 const ROHIT = new User("ROHIT")

 

//   it will give error like this 
// TypeError: ROHIT.logMe is not a function
//     at Object.<anonymous> (/home/rohit/Desktop/WORK/javascript--notes-/classes/static.js:14:8)
//  JavaScript me static keyword ka use class ke aise methods ya properties banane ke liye hota hai jo object (instance) se nahi balki direct class se belong karte hain.
//  object ke through access nahi hote

// sirf class name ke through access hote hain