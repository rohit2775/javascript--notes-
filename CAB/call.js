
// Function ko immediately invoke karta hai
// this ko custom object se bind karta hai
// Arguments comma-separated pass hote hain

 function greet (){
    console.log(this.name);

 }

  const user  = {
    name : " ROHIT"
  }
console.log(greet.call(user));