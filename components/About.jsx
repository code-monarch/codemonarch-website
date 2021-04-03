import React, { useEffect } from "react";


import styles from "../styles/about.module.css";
// import Modal from "./Modal"

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

const About = ({toggleModal}) => {
	// instantiate wow js
	useEffect(() => {
		new WOW().init();
	}, []);

	return (
		<div id='about' className={styles.container}>
			<div className={`${styles.AboutTitle} ${"wow fadeInUpBig"}`}>
				<h3>About us</h3>
				<p>
					We're a group of experienced developers and designers skilled in
					building / designing proven software solutions that boosts businesses
					and promote organizational sustainability. We help in taking an
					<b> idea </b>
					from conception to <b> production </b>and improve sales by engaging more
					clients in your space.
					<br />
					Join <b>hundreds</b> of businesses who are doing more with technology.
					Get the product / service you desire <b>within your budget.</b>
					<br />
				</p>

				<span
					className={styles.consult}
					onClick={toggleModal}>
					Get free consultation
				</span>
			</div>
			{/* <Modal toggleModal={toggleModal} /> */}
		</div>
	);
};

export default About;
