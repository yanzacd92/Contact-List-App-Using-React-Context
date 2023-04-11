import React from "react";
import Contact from "./contact.jsx";
import Modal from "./modal.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Modal />		
			<Contact />
			<Contact />
			<Contact />
			<Contact />
		</div>
	);
};

export default Home;
