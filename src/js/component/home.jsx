import React from "react";
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClock} from '@fortawesome/free-solid-svg-icons'

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";


const Home = ({digitOne, digitTwo, digitThree, digitFour, digitFive, digitSix}) => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">¡Simple Counter!</h1>
			<div className='bigCounter'>
            <div className="calendar">
                <FontAwesomeIcon icon={faClock} />
            </div>
			<div className="four">{digitSix}</div>
			<div className="four">{digitFive}</div>
            <div className="four">{digitFour}</div>
            <div className="three">{digitThree}</div>
            <div className="two">{digitTwo}</div>
            <div className="one">{digitOne}</div>
        </div>
		</div>
	);
};

Home.propTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
}

export default Home;
