import Image from "next/image";
import React from "react";
import style from "./Crew.module.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Crew({ crew, img, index }) {
	return (
		<div className={style.crew}>
			<div className={style.hero}>
				{index !== 0 ? (
					<AnimationOnScroll animateIn="animate__backInRight" delay={1000}>
						<Image
							className={style.crew_image}
							src={img}
							width={300}
							height={300}
							alt="destination"
						/>
					</AnimationOnScroll>
				) : (
					<Image
						className={style.crew_image}
						src={img}
						width={300}
						height={300}
						alt="destination"
					/>
				)}
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

					<AnimationOnScroll
						animateIn="animate__fadeInLeft"
						initiallyVisible={true}
					>
						<h1 className={style.name}>{crew.name}</h1>
					</AnimationOnScroll>

					<p className={style.bio}>{crew.bio}</p>
				</div>
			</div>
		</div>
	);
}

export default Crew;
