import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Thechnology from "../components/Technology/Technology";
import style from "../styles/global.module.scss";
import data from "../data.json";
import launchImgLandscape from "../public/assets/technology/image-launch-vehicle-landscape.jpg";
import launchImgPortrait from "../public/assets/technology/image-launch-vehicle-portrait.jpg";
import capsuleLandscape from "../public/assets/technology/image-space-capsule-landscape.jpg";
import capsulePortrait from "../public/assets/technology/image-space-capsule-portrait.jpg";
import portLandscape from "../public/assets/technology/image-spaceport-landscape.jpg";
import protPortrait from "../public/assets/technology/image-spaceport-portrait.jpg";
function technology() {
	const technologyData = data.technology;
	return (
		<div className={style.technology}>
			<Navigation />
			<div className={style.title}>
				<h1>
					<span>03</span> SAPCE LAUNCH 101
				</h1>
			</div>

			{technologyData.map((data, index) => {
				let landscapeImg;
				let portraitImg;

				if (data.name == "Launch vehicle") {
					landscapeImg = launchImgLandscape;
					portraitImg = launchImgPortrait;
				} else if (data.name == "Spaceport") {
					landscapeImg = portLandscape;
					portraitImg = protPortrait;
				} else if (data.name == "Space capsule") {
					landscapeImg = capsuleLandscape;
					portraitImg = capsulePortrait;
				}
				return <Thechnology data={data} key={index} landscapeImg={landscapeImg} portraitImg={portraitImg}/>;
			})}
		</div>
	);
}

export default technology;
