//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Home from "./component/home"

// include your styles into the webpack bundle
import "../styles/index.css";

let counter = 0;

setInterval(function(){
    const four = Math.floor(counter/1000)
    const three = Math.floor(counter/100)
    const two = Math.floor(counter/10)
    const one = Math.floor(counter/1)

    ReactDOM.render(
    <Home digitOne={one} digitTwo={two} digitThree={three} digitFour={four}/>, 
    document.querySelector("#app")
    )
    counter++
},1000)




