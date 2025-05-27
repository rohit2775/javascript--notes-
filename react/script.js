import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, " hello rohit bhai kaise ho")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


// import React from "react";
// import ReactDOM from "react-dom/client";
// // react.createElement is a object , when we rebder it it becomes an html element  
// // const heading = React.createElement("h1", {id: "heading"},"hello rohit, kaise ho bhai")
// // console.log(heading)

// // const jsxheading =(<h1 id="heading"> rohit bhai kaise ho  sab badiya </h1>)
// // console.log(jsxheading)
// const root = ReactDOM.createRoot(document.getElementById("root"))
// // root.render(jsxheading) // this is how we render react element 
//  // jsx =>babel transpiles it to  react.createElement =>React.createelement-js Object =>HTMLElement(render )
//  // jsx transpiled before it reaches the js - parcel  - babel
 
// // react components 
// // class based component  - old way 
// // functional component  - new way writing 

// // react functional component 
//  const Title =() => (
//     <h1 className="title">
//         aur rohit bhai sab badhiya 
//     </h1>
//  );    // we can inject a function inside jsx 
// const name = "rohit"

// // the jsx prevent cross site scripting attacks for the user 
// const HeadingComponent  = ()=>( // this is how youu can render component inside component 
//     <div id="heading">
//         <Title />
        
//         {name}
//        {console.log("hello")}    {/* we can write any javascript indside the curly braces  */}
//             {/* inside this we can write any javascript expression  */}
//         <h1 className="heading">
//             hello rohit bhai sab badhiya aur kaise ho 
//         </h1>
//     </div>
// )
// root.render(<HeadingComponent />) // this is how we render react functional component 


// // we can also inject title as <Title></Title> // same things will be done 