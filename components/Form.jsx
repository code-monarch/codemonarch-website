import styles from "@/components/form.module.css";
import emailjs from "emailjs-com";

import React, {useEffect} from "react"

// IMPORTING WOW JS FOR IN-VIEW ANIMATION
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

export default function Form() {
	// CALLING WOW JS WHEN COMPONENT MOUNTS
useEffect(() => {
	new WOW().init();
}, []);

// EMAIL JS DEPENDENCY VARIABLES
	const serviceId = "service_dj6wmne";
	const templateId = "template_idgxovr";
	const userId = "user_u61mARwwAdmWY5FKJArDm";

// EMAIL JS FUNCTION FOR SENDING MESSAGE TO EMAIL
	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm(serviceId, templateId, e.target, userId).then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
		e.target.reset();
	}

	return (
		<>
			<div className={styles.container}>
				<div className={`${styles.formContainer} ${"wow fadeInLeft"}`}>
					{/* FORM TITLE */}
					<div className={styles.formTitle}>
						<h1 className={styles.h1}>
							Get a <span className={styles.span}>Quote</span>
						</h1>
						<p className={styles.p}>What can we do for you?</p>
					</div>
					{/* FORM */}
					<form className={styles.form} onSubmit={sendEmail}>
						{/* SERVICE OPTIONS */}
						<div className={styles.formSelect}>
							<div className={styles.checkbox}>
								<input
									className={styles.input}
									type='checkbox'
									id='design'
									name='design'
									value='design'
								/>
								<span className={styles.customCheckbox}></span>
								<label htmlFor='design'>design</label>
							</div>
							<div className={styles.checkbox}>
								<input
									className={styles.check2}
									type='checkbox'
									id='development'
									name='development'
									value='development'
								/>
								<span className={styles.customCheckbox}></span>
								<label htmlFor='development'>development</label>
							</div>
							<div className={styles.checkbox}>
								<input
									className={styles.input}
									type='checkbox'
									id='website'
									name='website'
									value='website'
								/>
								<span className={styles.customCheckbox}></span>
								<label htmlFor='website'>website</label>
							</div>
							<div className={styles.checkbox}>
								<input
									className={styles.input}
									type='checkbox'
									id='other'
									name='other'
									value='other'
								/>
								<span className={styles.customCheckbox}></span>
								<label htmlFor='other'>other</label>
							</div>
						</div>
						{/* SERVICE OPTIONS END */}
						{/* FORM INPUT */}
						<div className={styles.div}>
							<div className={styles.div}>
								<label className={styles.label} htmlFor='name'>
									Full Name
								</label>
								<input
									className={styles.formInput}
									type='text'
									name='name'
									required
								/>
							</div>
							<div className={styles.div}>
								<label className={styles.label} htmlFor='email'>
									Email
								</label>
								<input
									type='email'
									name='email'
									className={styles.formInput}
									required
								/>
							</div>
							<div className={styles.div}>
								<label className={styles.label} htmlFor='number'>
									Phone Number
								</label>
								<input
									type='tel'
									name='number'
									pattern='[0-9]{4}-[0-9]{3}-[0-9]{3}'
									className={styles.formInput}
									required
								/>
							</div>
							<div className={styles.div}>
								<label className={styles.label} htmlFor='email'>
									Project Description
								</label>
								<textarea name='message' className={styles.field} required />
							</div>
						</div>
						<button className={styles.formSubmit} type='submit'>
							Send message
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
