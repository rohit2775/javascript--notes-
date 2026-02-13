 
 

const promiseOne = new Promise(function(resolve, reject){
     // async task 
     setTimeout(() => {
        console.log("Async task is complete"); 
        resolve()
     },1000);
})

promiseOne.then(function(){
    console.log("promise consumed");
})



 new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("hello bhai log kaise ho ");
        resolve()
    }, 1000);
 }).then(function(){
    console.log("ho gya promise ");
 })

 const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({name : " ROHIT", age : 12})
    }, 1000);
 })

 promiseThree.then(function(user){
    console.log(user);

 })             // kis tarah se data consymption hota hai  ,  ksie values aaati hai ........ resolve ke through 




 const promiseFour = new Promise(function (resolve,reject){
    setTimeout(() => {
       let error = false
       if (!error){
         resolve({username : "ROHIT", pass : "ROJ"})
       }
       else{
         reject("ERROR : something went wrong")                  // how to handle rejections 
       }
      
       
    }, 1000);                
 })

 promiseFour.then(function(user){
   console.log(user);
   return user.username
  }).then((username)=>{
   console.log(username);
  }).catch(function(error){
   console.log(error);                        /// chainaing of .then for getting the value
  }).finally(()=>{
   console.log("the promise is either resolved or get rejected");
  })


const promiseFive = new Promise(function(resolve, reject){


  setTimeout(() => {
       let error = true
       if (!error){
         resolve({username : "ROHITBHAI", pass : "ROJ"})
       }
       else{
         reject("ERROR : ROHITBHAI went wrong")                     // how to handle rejections 
       }       
      
       
    }, 1000);   

})

async function consumePromiseFive(params) {
//     const response = await promiseFive                    iss case me error kuch aur  type se ayega isi ko try catch se karne bolwga 
//     console.log(response);
        try {
         const response= await promiseFive
         console.log(response);
        } catch (error) {
         console.log(error);                     // ye sahi tarika hai 
        }
  
}
consumePromiseFive()




async function ROHIT(){
   try {
      const res= await fetch('https://api.github.com/users/rohit2775')
      const data =  await res.json()
      console.log(data);
   } catch (error) {
       console.log(error);
   }
}
ROHIT()


fetch('https://api.github.com/users/rohit2775')
.then((response)=>{
   return response.json()                               // uper wala code without async await and try catch .. 

}).then((data)=>{
   console.log(data);
})