
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


// more example 

const student1 = {
  name: "Aman"
};

const student2 = {
  name: "Rohit"
};

function sayName() {
  console.log(this.name);
}

sayName.call(student1); 
sayName.call(student2); 


// call with arguments 

function details(age, city) {
  console.log(`${this.name} is ${age} years old and lives in ${city}`);
}

const user1 = {
  name: "Rohit"
};

details.call(user1, 20, "Delhi");


