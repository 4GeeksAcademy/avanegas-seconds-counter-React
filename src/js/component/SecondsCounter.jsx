import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClock} from '@fortawesome/free-solid-svg-icons'


const SecondsCounter = (props) =>{
    return(
        <div className='bigCounter'>
            <div className="calendar">
                <FontAwesomeIcon icon={faClock} />
            </div>
            <div className="four">{digiFour}</div>
            <div className="three">{digiThree}</div>
            <div className="two">{digiTwo}</div>
            <div className="one">{digiOne}</div>
        </div>
    )
}

SimpleCounter.proppTypes = {
    digiFour: PropTypes.number,
    digiThree: PropTypes.number,
    digiTwo: PropTypes.number,
    digiOne: PropTypes.number
}

let counter = 0;

setInterval(function(){
    const four = Math.floor(counter/1000)
    const three = Math.floor(counter/100)
    const two = Math.floor(counter/10)
    const one = Math.floor(counter/1)

    counter++
},1000)    

export default SecondsCounter;