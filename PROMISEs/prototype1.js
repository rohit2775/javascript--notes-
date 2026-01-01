 

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


Array.prototype.Name = function(){
  console.log(`the only prototype here only for arrays `);
}

myhouse.Name()
// HouseNo.Name()

//for the HouseNo.Name()the wil bwe like this 

//     /home/rohit/Desktop/WORK/javascript--notes-/PROMISEs/prototype1.js:30
// HouseNo.Name()
//         ^

// TypeError: HouseNo.Name is not a function
//     at Object.<anonymous> (/home/rohit/Desktop/WORK/javascript--notes-/PROMISEs/prototype1.js:30:9)
//     at Module._compile (node:internal/modules/cjs/loader:1760:14)
//     at Object..js (node:internal/modules/cjs/loader:1892:10)
//     at Module.load (node:internal/modules/cjs/loader:1480:32)
//     at Module._load (node:internal/modules/cjs/loader:1299:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:328:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:245:24)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
//     at node:internal/main/run_main_module:33:47
