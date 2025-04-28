import React from "react";
import Counter from "./Counter";
import DemoMe from "./DemoMe";

//create your first component
const Home = () => {
	return (
		<>
			<div className="text-center">
				<h1 className="text-center mt-5">Hello It's working!</h1>
			</div>
			<Counter/>
			<DemoMe/>
			
		</>
	);
};

export default Home;