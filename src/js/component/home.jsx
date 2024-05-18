import React from "react";
import SecondsCounter from "./SecondsCounter";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";


const Home = (props) => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Simple Counter!</h1>
			<SecondsCounter {...props} />
		</div>
	);
};

export default Home;
