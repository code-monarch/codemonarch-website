import Link from "next/link";
// import React, { useState } from "react";
import styles from "../styles/dropdown.module.css";

const dropDown = ({ toggleDropdown, dropMenuVisibility, hideMenuIcon }) => {
	return (
		<div className={styles.dropdown}>
			<div className={hideMenuIcon ? styles.hideIcon : styles.menuIcon}>
				<i className='fas fa-bars fa-lg' onClick={toggleDropdown}></i>
			</div>
			{/* NAV SIDEBAR */}
			<nav
				className={dropMenuVisibility ? styles.navMenuActive : styles.navMenu}>
				<ul className={styles.navList}>
					<li className={styles.navItem}>
						<Link href='/#home'>
							<a className={styles.a} onClick={toggleDropdown}>
								Home
							</a>
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href='/#about'>
							<a className={styles.a} onClick={toggleDropdown}>
								About
							</a>
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href='/#services'>
							<a className={styles.a} onClick={toggleDropdown}>
								Services
							</a>
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href='/#contact'>
							<a className={styles.a} onClick={toggleDropdown}>
								Contact
							</a>
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href='/blog'>
							<a className={styles.a} onClick={toggleDropdown}>
								Blog
							</a>
						</Link>
					</li>
				</ul>
				{/* EXIT ICON */}
				<span className={styles.backIcon}>&times;</span>
			</nav>
		</div>
	);
};

export default dropDown;
