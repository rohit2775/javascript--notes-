 
 // goal , kya hm object ko iterable hone se rok sakte hai 
 // // kya hm log math.pi , ya fir koi bhi constant value jo ki javascript me availabke hai user change krr sakte hai 

    // const descriptor =  Object.getOwnPropertyDescriptor(Math , "PI")
    // console.log(descriptor);

    //  getOwnPropertyDescriptor  :isse kisi bhi object ke key value ke properties dekhe jaa sakte hai . 

 
    // it will give this 

//     {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// note : hm inbuilt javascript ke object e key values ko change nai krr sakte , 
// agar hm khud se object create krte hai to usme ye values  ko set karna hamare haath me rehta hai  

const Shop= {
     name : "shoe shop",
     price : 111,
     isAvailable : true
}

console.log(Object.getOwnPropertyDescriptor(Shop , "name"));
Object.defineProperty(Shop ,"name",{
    writable : false,
    enumerable : false
})



// with the use of define property we can change the properties

console.log(Object.getOwnPropertyDescriptor(Shop , "name"));


// {
//   value: 'shoe shop',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
// {
//   value: 'shoe shop',
//   writable: false,
//   enumerable: false,
//   configurable: true
// }
