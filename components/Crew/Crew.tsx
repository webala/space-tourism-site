import Image from "next/image";
import React from "react";
import style from "./Crew.module.scss";
import {AnimationOnScroll} from "react-animation-on-scroll";

function Crew({ crew, img }) {
	return (
		<AnimationOnScroll animateIn="animate__fadeInUp">
			<div className={style.crew}>
				<div className={style.hero}>
					<Image
						className={style.crew_image}
						src={img}
						width={300}
						height={300}
						alt="destination"
					/>
				</div>

				<div className={style.details}>
					<div className={style.nav}>
						<div className={`${style.indicator} ${style.active}`}></div>
						<div className={style.indicator}></div>
						<div className={style.indicator}></div>
						<div className={style.indicator}></div>
					</div>

					<div className={style.bio}>
						<h2 className={style.role}>{crew.role}</h2>
						<h1 className={style.name}>{crew.name}</h1>
						<p className={style.bio}>{crew.bio}</p>
					</div>
				</div>
			</div>
		</AnimationOnScroll>
	);
}

export default Crew;
