import React, { useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Services.module.css";
// import Image from "next/image";
// import Skeleton from "react-loading-skeleton";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

const Services = () => {
    useEffect(() => {
    new WOW().init();
    }, [])

    return (
			<div id='services' className={styles.container}>
				<h3 className={`${styles.servicesTitle} ${"wow fadeIn"}`}>
					Our Services
				</h3>
				<div className={styles.row}>
					<div className={`${styles.card} ${"wow flipInY"}`}>
						<div className={styles.content}>
							<h2>01</h2>
							{/* <div className={styles.web}>
							<Image src='/web.png' alt='web' width={40} height={40} />
						</div> */}
							<h3>Web Development</h3>
							<p>
								We create appealing graphical user interfaces and user
								experience, scalable and reliable backends services with modern technologies. 
							</p>
						</div>
						<Link href='/#contact'>
							<a>Get a quote</a>
						</Link>
					</div>
					<div className={`${styles.card} ${"wow flipInY"}`}>
						<div className={styles.content}>
							<h2>02</h2>
							{/* <div className={styles.ui_ux}>
							<Image
								src='/mobile.png'
								alt='mobile app'
								width={60}
								height={60}
							/>
						</div> */}
							<h3>Mobile App Development</h3>
							<p>
								From development to deployment, we build robust Android and iOS
								apps, and where required, publish to Google Play Store and Apple
								Store respectively.
							</p>
						</div>
						<Link href='/#contact'>
							<a>Get a quote</a>
						</Link>
					</div>
					<div className={`${styles.card} ${"wow flipInY"}`}>
						<div className={styles.content}>
							<h2>03</h2>
							{/* <div className={styles.jayde}>
							<Image
								src='/jayde logo.png'
								alt='Jayde Creativity'
								width={40}
								height={40}
							/>
						</div> */}
							<h3>Graphics Design</h3>
							<p>
								Premium consultation on decentralised applications, trustless
								services, smart contracts and asset tokenization, cryptocurrency
								payments integration and related solutions.
							</p>
						</div>
						<Link href='/#contact'>
							<a>Get a quote</a>
						</Link>
					</div>
					<div className={`${styles.card} ${"wow flipInY"}`}>
						<div className={styles.content}>
							<h2>04</h2>
							{/* <div className={styles.ui_ux}>
							<Image src='/ui_ux.png'
								alt='ui_ux'
								width={60}
								height={50} />
						</div> */}
							<h3>UI & UX Design</h3>
							<p>
								Our engineers are highly skilled in home automation,
								surveillance systems, specialized black boxes and just about
								anything you'd need microprocessors and microcontrollers for.
							</p>
						</div>
						<Link href='/#contact'>
							<a>Get a quote</a>
						</Link>
					</div>
					<div className={`${styles.card} ${"wow flipInY"}`}>
						<div className={styles.content}>
							<h2>05</h2>
							{/* <div className={styles.tutoring}>
							<Image
								src='/tutoring.png'
								alt='tutoring development'
								width={40}
								height={40}
							/>
						</div> */}
							<h3>Tutoring & Career Counselling</h3>
							<p>
								You can count on us to deliver stunning digital photography and
								multi-dimentional graphics, as well as user interface mockups.
							</p>
						</div>
						<Link href='/#contact'>
							<a>Get a quote</a>
						</Link>
					</div>
				</div>
			</div>
		);
}

export default Services