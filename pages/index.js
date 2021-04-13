import Head from "next/head";
import React, { useState } from "react";
import Banner from "@/components/Banner";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import DropDown from "@/components/DropDown";
import Modal from "@/components/Modal";
import Footer from "@/components/Footer";

export default function Home() {
	// State for Dropdown menu
	const [dropMenuVisibility, setdropMenuVisibility] = useState(false);

	// State for hiding stuff
	const [hideMenuIcon, setHideMenuIcon] = useState(false);

	//  Dropdown states stored in a variable
	const hideDropdownMenu = () => setdropMenuVisibility(!dropMenuVisibility);

	const showMenuIcon = () => setHideMenuIcon(!hideMenuIcon);

	// Functions to handle dropdown
	// Toggle dropdown when hamburger menu is clicked
	const toggleDropdown = () => {
		hideDropdownMenu();
		if (hideDropdownMenu) {
			showMenuIcon();
		}
	};
	// clear sidebar when screen is touched when dropdown is visible
	const clearScreen = () => {
		if (openModal) {
			toggleModal();
		}
		if (hideMenuIcon) {
			toggleDropdown();
		} else if (!hideMenuIcon) {
			return;
		}
	};

	// State for Modal
	const [openModal, setOpenModal] = useState(false);
	// const [hideConsultBtn, setHideConsultBtn] = useState(false);

	// Function to handle Modal control
	const toggleModal = () => {
		setOpenModal(!openModal);
		// setHideConsultBtn(!hideConsultBtn);
	};
	return (
		<div onClick={clearScreen}>
			<Head>
				<title>Web & software development company | CodeMonarch</title>
				<link rel='icon' href='/favicon.ico ' />{" "}
				<meta
					name='description'
					content="We're a team of experienced developers and designers skilled in
						building/designing proven software solutions that boosts
						businesses and promote organizational sustainability. We help in
						taking ideas from conception to production and improve sales by engaging more clients in your space."
				/>{" "}
				// TWITTER CARD
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:site' content='@_jumbotron' />
				<meta name='twitter:creator' content='@_jumbotron' />
				<meta
					name='twitter:title'
					content='Web development and software company.'
				/>
				<meta
					name='twitter:description'
					content="We're a team of experienced developers and designers skilled in
						building/designing proven software solutions that boosts
						businesses and promote organizational sustainability."
				/>
				<meta
					name='twitter:image'
					content='https://i.ibb.co/YWYp74d/Code-Monarch.jpg'
				/>
				// FACEBOOK OG TAGS
				<meta property='og:site_name' content='codeMonarch' />
				<meta property='og:url' content='http://www.codemonarch.com/' />
				<meta property='og:type' content='website' />
				<meta
					property='og:title'
					content='Web & Software development company.'
				/>
				<meta
					property='og:description'
					content="We're a team of experienced developers and designers skilled in
						building/designing proven software solutions that boosts
						businesses and promote organizational sustainability. We help in
						taking ideas from conception to production and improve sales by engaging more clients in your space."
				/>
				<meta
					property='og:image'
					content='https://i.ibb.co/YWYp74d/Code-Monarch.jpg'
				/>
				//FACEBOOK OG TAGS END 
				//Size of image. Any size up to 300. Anything
				above 300px will not work in WhatsApp
				<meta
					property='og:image'
					itemprop='image'
					content='https://i.ibb.co/YWYp74d/Code-Monarch.jpg'
				/>
				<link
					itemprop='thumbnailUrl'
					href='https://i.ibb.co/YWYp74d/Code-Monarch.jpg'
				/>
				<meta property='og:image:type' content='image/jpeg' />
				<meta property='og:updated_time' content='updatedtime' />
				<meta property='og:image:width' content='300' />
				<meta property='og:image:height' content='300' />
			</Head>
			<Banner />
			<DropDown
				toggleDropdown={toggleDropdown}
				dropMenuVisibility={dropMenuVisibility}
				hideMenuIcon={hideMenuIcon}
			/>
			<Navigation />
			<About
				openModal={openModal}
				toggleModal={toggleModal}
				// hideConsultBtn={hideConsultBtn}
			/>{" "}
			<Services />
			<Contact />
			<Modal openModal={openModal} toggleModal={toggleModal} /> <Footer />
		</div>
	);
}
