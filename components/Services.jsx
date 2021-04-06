import React, { useEffect } from "react";
import Link from "next/link";
import styles from "@/components/services.module.css";
// import Image from "next/image";
// import Skeleton from "react-loading-skeleton";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

const Services = () => {
	useEffect(() => {
		new WOW().init();
	}, []);

	return (
		<div id='services' className={styles.container}>
			<h3 className={`${styles.servicesTitle} ${"wow fadeIn"}`}>
				Our Services
			</h3>
			<div className={styles.row}>
				<div className={`${styles.card} ${"wow flipInY"}`}>
					<div className={styles.content}>
						<h2 className={styles.h2}>01</h2>
						<h3 className={styles.h3}>Web Development</h3>
						<p className={styles.p}>
							Our Services range from developing a simple portfolio page to complex web applications, electronic businesses,
							web scraping, with scalable and reliable backend
							services using modern web technologies.
						</p>
					</div>
					<Link href='/#contact'>
						<a className={styles.a}>Get a quote</a>
					</Link>
				</div>
				<div className={`${styles.card} ${"wow flipInY"}`}>
					<div className={styles.content}>
						<h2 className={styles.h2}>02</h2>
						<h3 className={styles.h3}>Mobile App Development</h3>
						<p className={styles.p}>
							From development to deployment, we build robust Android and iOS
							apps, and where required, publish to Google Play Store and Apple
							Store respectively.
						</p>
					</div>
					<Link href='/#contact'>
						<a className={styles.a}>Get a quote</a>
					</Link>
				</div>
				<div className={`${styles.card} ${"wow flipInY"}`}>
					<div className={styles.content}>
						<h2 className={styles.h2}>03</h2>
						<h3 className={styles.h3}>Graphics Design</h3>
						<p className={styles.p}>
							By applying visual hierarchy and page layout techniques, we craft
							professional visual content, interactive designs that communicates
							instantly with clients. Logos, banners etc
						</p>
					</div>
					<Link href='/#contact'>
						<a className={styles.a}>Get a quote</a>
					</Link>
				</div>
				<div className={`${styles.card} ${"wow flipInY"}`}>
					<div className={styles.content}>
						<h2 className={styles.h2}>04</h2>
						<h3 className={styles.h3}>UI & UX Design</h3>
						<p className={styles.p}>
							You can count on us to deliver beautiful User Interfaces and
							experience as well as mockups and prototypes for your next
							project.
						</p>
					</div>
					<Link href='/#contact'>
						<a className={styles.a}>Get a quote</a>
					</Link>
				</div>
				<div className={`${styles.card} ${"wow flipInY"}`}>
					<div className={styles.content}>
						<h2 className={styles.h2}>05</h2>
						<h3 className={styles.h3}>Tutoring & Career Counselling</h3>
						<p className={styles.p}>
							Get high standard career advice and training from our coaches in
							the different technology stacks, ranging from web development to
							blockchain development.
						</p>
					</div>
					<Link href='/#contact'>
						<a className={styles.a}>Get a quote</a>
					</Link>
				</div>
				<div className={`${styles.card} ${"wow flipInY"}`}>
					<div className={styles.content}>
						<h2 className={styles.h2}>06</h2>
						<h3 className={styles.h3}>Shopify Themes & Applications</h3>
						<p className={styles.p}>
							Turn your retail store into an online store in the world's largest
							online store. we build custom shopify themes and applications that
							will suit your needs.
						</p>
					</div>
					<Link href='/#contact'>
						<a className={styles.a}>Get a quote</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Services;
