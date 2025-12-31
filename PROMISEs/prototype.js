 function createUser(user, price){
        this.user = user
        this.price= price
 }

 createUser.prototype.increment = function(){
   this.price ++
 }
  // yaha pr increment ko pata nai chaega ki kis value ko increment karna hai to yaha prr hamlog this keyword ka use karenge 

 const chai = createUser("chai", 30)
 const tea = createUser("tea", 250)