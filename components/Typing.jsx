// filename: Typing.js
// React version: "^16.12.0"
import React, { useEffect } from "react";
// Import the desired words
import words from "./words";
import Typewriter from "typewriter-effect";
// import Typical from "react-typical";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

function Typing() {
	useEffect(() => {
		new WOW().init();
	}, []);
	return (
		<>
			<Typewriter
					options={{
						strings: [...words],
						autoStart: true,
						loop: true,
						delay: 20,
						deleteSpeed: 2,
						skipAddStyles: true,
						wrapperClassName: "Typewriter",
					}}
				/>
			{/* <Typical
				loop={Infinity}
				wrapper='p'
				steps={[
					"We give  <strong>small </strong>  businesses  that  <strong><q>big business</q></strong>  treatment.",
					500,
					"We are a proven system for <strong>lauching Ideas</strong> into fully functional <strong>products </strong>and<strong> services</strong>.",
					500,
					"Services <strong>within</strong> technology and <strong>beyond</strong>.",
					500,
					"We  refine  existing <strong>products</strong>  and  <strong>services</strong> to  their  best version.",
					500,
					"We craft appealing user interfaces and user experience.",
					500,
					"We <strong>optimize </strong> local businesses into <strong>modern brands</strong> .", 500
				]}
			/> */}
		</>
	);
}

export default Typing;
