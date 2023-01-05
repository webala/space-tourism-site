import React, { useState } from "react";
import Crew from "../components/Crew/Crew";
import Navigation from "../components/Navigation/Navigation";
import dougImg from "../public/assets/crew/image-douglas-hurley.png";
import markImg from "../public/assets/crew/image-mark-shuttleworth.png";
import victImg from "../public/assets/crew/image-victor-glover.png";
import anoushImg from "../public/assets/crew/image-anousheh-ansari.png";
import data from "../data.json";
import style from "../styles/global.module.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";

function crew() {
	const crewData = data.crew;
	
	return (
		<div className={style.crew_container}>
			<Navigation />
			<AnimationOnScroll
				animateIn="animate__rubberBand"
				initiallyVisible={true}
			>
				<div className={style.title}>
					<h1>
						{" "}
						<span>02</span> MEET YOUR CREW
					</h1>
				</div>
			</AnimationOnScroll>
			{crewData.map((data, index) => {
				let img;
				if (data.name === "Douglas Hurley") {
					img = dougImg;
				} else if (data.name === "Mark Shuttleworth") {
					img = markImg;
				} else if (data.name === "Victor Glover") {
					img = victImg;
				} else if (data.name === "Anousheh Ansari") {
					img = anoushImg;
				}
				return <Crew img={img} crew={data} key={index} index={index} />;
			})}
		</div>
	);
}

export default crew;
