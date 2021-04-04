import React, { useEffect } from "react";
import styles from "@/styles/contact.module.css";
import Form from "./Form";


const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

const Contact = () => {
	useEffect(() => {
		new WOW().init();
	}, []);
	return (
		<>
			<div id='contact' className={styles.contactSection}>
				<div className={`${styles.text} ${"wow fadeInLeft"}`}>
					<h3 className={styles.h3}>Have a Project?</h3>
					<p className={styles.p}>
						<strong>Give us Information: </strong>what are your expectations for
						this project, what's your deadline? What would success look like and
						how much are you planning to spend to get there? Send us a message
						with these information and we'll get back to you as soon as
						possible.
					</p>
				</div>
				{/* SECTION 2 */}
				<Form />
			</div>
		</>
	);
};

export default Contact;
