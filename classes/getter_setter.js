 
 class User {
     constructor(email , pass){
        this.email = email
        this.pass = pass
     }

     get pass (){
        return this._pass.toUpperCase()     
     }
     set pass(value){
        this._pass = value          
     }

     get email(){
      return `ROHII${this._email.toUpperCase()}`
     }
     set email(value){
        this._email = value
     }
}

 const Rohit = new User("rohit@124" , "rohit")
 console.log(Rohit.email)



//     A getter is a method that is used to read or access an object’s property,
// and a setter is a method that is used to update or modify the value of an object’s property with proper control and validation.
 
 // note : here the underscore is being used ,because the constructor is also assigning the values ans getter - setter also , so we have used  the underscore with the variables so that they can act as  private  members  