import style from "./Call.module.scss";
import Link from "next/link";

import React from "react";

function Call() {
	return (
		<div className={style.call}>
			<h2>SO YOU WANT TO TRAVEL TO</h2>
			<h1>SPACE</h1>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
				molestias debitis, assumenda voluptates corrupti cumque, ad amet rem
				iure deleniti aliquid quae quo aut perferendis doloremque eveniet
				praesentium qui ut. Quia sequi vitae architecto?
			</p>
			<div className={style.circle}>
				<Link href="#">
					<h1>EXPLORE</h1>
				</Link>
			</div>
		</div>
	);
}

export default Call;
