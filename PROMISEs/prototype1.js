 

 let myhouse = ['house1','house2']
 
 let HouseNo ={
     house1 : "BIRSANAGAR",
     house2 : "KOLKATA",
     
     getHouse1 :function(){
          console.log(`the house1 is at ${this.house1}`);
     }


 }
Object.prototype.ghar = function(){
  console.log(`ghar sab jagah hai mera bhai `);
}

HouseNo.ghar()
myhouse.ghar()

// here we can see that  if we define a prototype like object.prototype.name ... then it should be accessed bya nay array , object , function       . but if we define a prototype to array , it will only be accessed by thhe arrays only , not for objects and functions  