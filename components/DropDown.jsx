import React from "react"
import Link from "next/link";
// import React, { useState } from "react";
import styles from "../styles/DropDown.module.css";

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
							<a onClick={toggleDropdown}>Home</a>
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href='/#about'>
							<a onClick={toggleDropdown}>About</a>
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href='/#services'>
							<a onClick={toggleDropdown}>Services</a>
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href='/#contact'>
							<a onClick={toggleDropdown}>Contact</a>
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href='/blog'>
							<a onClick={toggleDropdown}>Blog</a>
						</Link>
					</li>
				</ul>
				{/* EXIT ICON */}
				<span className={styles.backIcon}>
					&times;
				</span>
			</nav>
		</div>
	);
};

export default dropDown;
