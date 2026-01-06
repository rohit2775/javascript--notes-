 class User{
constructor(username , email , password ){
    this.username = username
    this.email = email
    this.password = password

}
 encryptPassword (){
    return `${this.password}`
 }

 }

 const user11= new User("rohit ", "rg@email.com", "123")
 
 console.log(user11.encryptPassword())