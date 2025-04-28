import React from "react";
import Counter from "./Counter";
import DemoMe from "./DemoMe";

//create your first component
const Home = () => {
	return (
		<>
			<div className="text-center">
				<h1 className="text-center mt-5">Counter</h1>
			</div>
			<Counter/>
		</>
	);
};

export default Home;