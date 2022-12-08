import Image from "next/image";
import React from "react";
import style from "./Destination.module.scss";

function Destination({ destination, img, setDestination, destData }) {
	return (
		<div className={style.destination}>
			<div className={style.hero}>
				<div className={style.title}>
					<h1>
						<span>01</span> pick your destination
					</h1>
				</div>
				<Image
					className={style.destination_image}
					src={img}
					width={300}
					height={300}
					alt="destination"
				/>
			</div>

			<div className={style.details}>
				<div className={style.nav}>
					<p
						className={
							destination.name === "Moon"
								? `${style.link} ${style.focus}`
								: style.link
						}
						onClick={() => setDestination(destData[0])}
					>
						MOON
					</p>
					<p
						className={
							destination.name === "Mars"
								? `${style.link} ${style.focus}`
								: style.link
						}
						onClick={() => setDestination(destData[1])}
					>
						MARS
					</p>
					<p
						className={
							destination.name === "Europa"
								? `${style.link} ${style.focus}`
								: style.link
						}
						onClick={() => setDestination(destData[2])}
					>
						EUROPA
					</p>
					<p
						className={
							destination.name === "Titan"
								? `${style.link} ${style.focus}`
								: style.link
						}
						onClick={() => setDestination(destData[3])}
					>
						TITAN
					</p>
				</div>
				<div className={style.title}>
					<h1>{destination.name}</h1>
					<p>{destination.description}</p>
				</div>
				<div className={style.info}>
					<div>
						<h3>AVG. DISTANCE</h3>
						<p>{destination.distance}</p>
					</div>
					<div>
						<h3>EST. TRAVEL TIME</h3>
						<p>{destination.travel}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Destination;
