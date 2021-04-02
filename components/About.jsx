import React, { useEffect } from "react";
import Link from "next/link";

import styles from "../styles/About.module.css";
// import Modal from "./Modal"

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

const About = ({openModal, toggleModal, hideConsultBtn}) => {
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
					className={hideConsultBtn ? styles.hideConsult : styles.consult}
					onClick={toggleModal}>
					Get free consultation
				</span>
			</div>
			{/* <Modal toggleModal={toggleModal} /> */}
			<div className={openModal ? styles.modalWrapper : styles.modalClosed}>
				<div className={styles.flex}>
					{/*  Call */}
					<div className={`${styles.phoneNumber} ${styles.buttons}`}>
						<img className={styles.icon} src='/phone.png' alt='call us' />
						<a href='tel:+2349036075477'>Call</a>
					</div>

					<div
						onClick={toggleModal}
						className={`${styles.message} ${styles.buttons}`}>
						<img
							className={styles.icon}
							src='/message.png'
							alt='send us a message'
						/>
						<Link href='/#contact'>
							<a>Send us a message</a>
						</Link>
					</div>
					<div onClick={toggleModal} className={styles.close}>
						&times;
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
