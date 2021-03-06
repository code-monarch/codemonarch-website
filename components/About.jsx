import React, { useEffect } from "react";


import styles from "@/components/about.module.css";
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
				<h3 className={`${styles.h3} ${"wow fadeInUpBig"}`}>About us</h3>
				<div
					className={`${styles.textWrapper} ${"wow fadeInUpBig"}`}
					data-wow-delay='40ms'>
					<p
						className={styles.p}>
						We're a team of experienced developers and designers skilled in
						building / designing proven software solutions that boosts
						businesses and promote organizational sustainability. We help in
						taking
						<b> ideas </b>
						from conception to <b> production </b>and improve sales by engaging
						more clients in your space.
						<br />
						Join <b>hundreds</b> of businesses who are doing more with
						technology. Get the product / service you desire{" "}
						<b>within your budget.</b>
						<br />
					</p>

					<span className={styles.consult} onClick={toggleModal}>
						Get free consultation
					</span>
				</div>
			</div>
			{/* <Modal toggleModal={toggleModal} /> */}
		</div>
	);
};

export default About;
