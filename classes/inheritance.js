 class User{
    constructor (username){
        this.username= username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
 }

 class Teacher extends User{
    constructor(username, email,password){
        super(username)
        this.email= email
        this.password= password
    }
    addCourse(){
        console.log(`new course was added by rohit gorai`);
    }
 }

 const ME = new Teacher("rohit","rohit2gmail.com","124")
 ME.addCourse()

 const YU = new User("ROHIT BHAI")

 YU.logMe()