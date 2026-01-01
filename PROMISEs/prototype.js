 function createUser(user, price){
        this.user = user
        this.price= price
 }

 createUser.prototype.increment = function(){
   this.price ++
 }
 createUser.prototype.printme = function(){
    console.log(`the price of ${this.user}  is  ${this.price}`);
 }
  // yaha pr increment ko pata nai chaega ki kis value ko increment karna hai to yaha prr hamlog this keyword ka use karenge 

 const chai = new createUser("chai", 30)
 const tea = new createUser("tea", 250)

 // if we donot use the new keyword here , then it will give an error , you can check it without new keyword 
 
 chai.printme()
