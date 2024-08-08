import React from "react";
import ReactDOM from "react-dom/client";
import image1 from './images/download.jpeg'
import './style.css';
// var date = new Date()
// var hour = date.getHours()
// var message = ""
// if (hour < 12) {
//     message = "Morning"
// } else if(hour >= 12 && hour <= 4) {
//     message = "After Noon"
// } else if(hour>4){
//     message = "Evening"
// }
let style={}
var marks = prompt('Enter Marks');
var message = "";
if (marks <= 40) {
    message = "Fail";
    style.color="red";
} else if (marks > 40 && marks < 50) {
    message = "Pass with Third division";
    style.color="green";
} else if (marks >= 50 && marks < 60) {
    message = "Pass with Second division";
    style.color="green";
} else if (marks >= 60 && marks < 70) {
    message = "Pass with First division";
    style.color="green";
} else if (marks >= 70 && marks <= 100) {
    message = "Pass with Distinction";
    style.color="green";
} else {
    message = "Invalid Entry";
    style.color="red";
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>  {/* Wrap elements in <Fragment> to group them together in situations where you need a single element. Grouping elements in Fragment has no effect on the resulting DOM; it is the same as if the elements were not grouped. The empty JSX tag <></> is shorthand for <Fragment></Fragment> in most cases.  */}
        <h1>Welcome to React world</h1>   
        <h1 className="text">Welcome to React</h1>   
        <h1 style={style}>{message}</h1>
        <img src={image1} alt="image1" />
        <img src="logo192.png" alt="logo" />
    </>
);