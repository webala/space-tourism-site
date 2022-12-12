import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation/Navigation";
import data from "../data.json";
import styles from "../styles/global.module.scss";
import moonImage from "../public/assets/destination/image-moon.png";
import marsImage from "../public/assets/destination/image-mars.png";
import europaImage from "../public/assets/destination/image-europa.png";
import titanImage from "../public/assets/destination/image-titan.png";
import Destination from "../components/Destination/Destination";

function destinations() {
	const destData = data.destinations;
	const [destination, setDestination] = useState(destData[0]);
	const [img, setImg] = useState(moonImage);
	console.log(destData);

	useEffect(() => {
		if (destination.name === "Mars") {
			setImg(marsImage);
		} else if (destination.name === "Moon") {
			setImg(moonImage);
		} else if (destination.name === "Titan") {
			setImg(titanImage);
		} else if (destination.name === "Europa") {
			setImg(europaImage);
		}
	}, [destination]);

	return (
		<div className={styles.container}>
			<Navigation />
			<Destination
				destination={destination}
				img={img}
				setDestination={setDestination}
				destData={destData}
			/>
		</div>
	);
}

export default destinations;
