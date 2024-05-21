//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Home from "./component/home"

// include your styles into the webpack bundle
import "../styles/index.css";

let counter = 0;
console.log(counter)

setInterval(function(){
    const six = Math.floor(counter/1000000) % 10;
    const five = Math.floor(counter/10000) % 10;
    const four = Math.floor(counter/1000) % 10;
    const three = Math.floor(counter/100) % 10;
    const two = Math.floor(counter/10) % 10;
    const one = Math.floor(counter/1) % 10;

    ReactDOM.render(
    <Home digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six}/>, 
    document.querySelector("#app")
    )
    counter++
    console.log(counter)
},1000)




