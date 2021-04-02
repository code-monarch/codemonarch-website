// filename: Typing.js
// React version: "^16.12.0"
import React,{useEffect} from "react";
// Import the desired words
import words from "./words";
import Typewriter from "typewriter-effect";

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
		</>
	);
}


export default Typing;
