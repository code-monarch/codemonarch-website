import React, { useEffect } from "react";
import Link from "next/link";
import styles from "@/components/services.module.css";
// import Image from "next/image";
// import Skeleton from "react-loading-skeleton";
import Data from "./serviceData";

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
				{Data.map((singleData, index) => (
					<div className={`${styles.card} ${"wow flipInY"}`}>
						<div className={styles.content}>
							<h2 className={styles.h2} key={singleData.h2 + index}>
								{singleData.h2}
							</h2>
							<h3 className={styles.h3} key={singleData.h3 + index}>
								{singleData.h3}
							</h3>
							<p className={styles.p} key={singleData.p + index}>
								{singleData.p}
							</p>
						</div>
						<Link href='/#contact'>
							<a className={styles.a}>Get a quote</a>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;
