import React, { useEffect, useState } from "react";
import style from "./Technology.module.scss";
import launchImgLandscape from "../../public/assets/technology/image-launch-vehicle-landscape.jpg";
import launchImgPortrait from "../../public/assets/technology/image-launch-vehicle-portrait.jpg";
import Image from "next/image";

function Technology({data, landscapeImg, portraitImg}) {
	const hasWindow = typeof window !== "undefined";
	function getWindowDimensions() {
		// const { innerWidth: width, innerHeight: height } = window;
		const width = hasWindow ? window.innerWidth : null;
		const height = hasWindow ? window.innerHeight : null;
		return {
			width,
			height,
		};
	}

	function useWindowDimensions() {
		const [windowDimensions, setWindowDimensions] =
			useState(getWindowDimensions);

		useEffect(() => {
			function handleResize() {
				setWindowDimensions(getWindowDimensions());
			}

			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		}, []);

		return windowDimensions;
	}

	let dimensions = useWindowDimensions()
	
	return (
		<div className={style.technology}>
			<div className={`${style.hero}`}>
				<Image
					className={style.hero_img}
					src={dimensions.width < 1028 ? landscapeImg: portraitImg}
					width={1028}
					height={1028}
					alt="hero-img"
				/>
			</div>

			<div className={style.details}>
				<div className={style.navigation}>
					<div className={data.name === "Launch vehicle" ?`${style.nav_item} ${style.active}` : `${style.nav_item}`}>1</div>
					<div className={data.name === "Spaceport" ?`${style.nav_item} ${style.active}` : `${style.nav_item}`}>2</div>
					<div className={data.name === "Space capsule" ?`${style.nav_item} ${style.active}` : `${style.nav_item}`}>3</div>
				</div>

				<div className={style.title}>
					<h2>THE TERMINOLOGY ...</h2>
					<h1>{data.name}</h1>
					<p>{data.description}</p>
				</div>
			</div>
		</div>
	);
}

export default Technology;
