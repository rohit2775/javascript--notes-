 const user = {
  name: "Rohit",
  greet: function () {
    console.log("Hello", this.name);
  }
};

const greetFn = user.greet;
greetFn(); 


// bind() is a JavaScript method that creates a new function with a fixed this value, bound permanently to a specific object.bind() ek naya function banata hai aur us function ka this permanently kisi ek object ke saath jod deta hai, chahe function kahin se bhi call ho.

// bind() ek naya function banata hai aur us function ka this permanently kisi ek object ke saath jod deta hai, chahe function kahin se bhi call ho.

function sayName() {
  console.log(this.name);
}

const User = { name: "Rohit" };

const fixed = sayName.bind(user);
fixed(); // Rohit


//one more example 

 function HELLO(){
  console.log(this.name);
 }
const pple= {name : "rahul"}

const nnee = HELLO.bind(pple)
nnee()