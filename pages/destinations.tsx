import Image from "next/image";
import React, { useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import data from "../data.json";
import styles from "../styles/global.module.scss";
import moonImage from "../public/assets/destination/image-moon.webp";
import Destination from "../components/Destination/Destination";

function destinations() {
	const destData = data.destinations;
	const [destination, setDestination] = useState(destData[0]);
	console.log(destData);

	return (
		<div className={styles.container}>
			<Navigation />
			<Destination destination={destination} img={moonImage}/>
		</div>
	);
}

export default destinations;
