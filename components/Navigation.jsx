import React from "react";
import Link from "next/link";
import styles from "../styles/Navigation.module.css";

const Navigation = () => {
	return (
		<>
			<nav className={styles.navbar}>
				<ul className={styles.NavigationList}>
					<li className={styles.NavigationItem}>
						<Link href='/#home'>
							<a>Home</a>
						</Link>
					</li>
					<li className={styles.NavigationItem}>
						<Link href='/#about'>
							<a>About</a>
						</Link>
					</li>
					<li className={styles.NavigationItem}>
						<Link href='/#services'>
							<a>Services</a>
						</Link>
					</li>
					<img className={styles.img} src='/CodeMonarch.png' alt='logo' />
					<li className={styles.NavigationItem}>
						<Link href='/#contact'>
							<a>Contact</a>
						</Link>
					</li>
					<li className={styles.NavigationItem}>
						<Link href='/#showcase'>
							<a>Showcase</a>
						</Link>
					</li>
					<li className={`${styles.NavigationItem} ${styles.blog}`}>
						<Link href='/blog'>
							<a>Blog</a>
						</Link>
					</li>
				</ul>
			</nav>
			{/* </Router> */}
		</>
	);
};

export default Navigation;
