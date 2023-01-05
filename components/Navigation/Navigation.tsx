/** @format */

import style from "./Navigation.module.scss";
import logo from "../../public/assets/shared/logo.svg";
import hamburger from "../../public/assets/shared/icon-hamburger.svg";
import close from "../../public/assets/shared/icon-close.svg";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

function Navigation() {
   const [navToggle, setNavToggle] = useState(false);

   return (
      <div className={style.navigation}>
         <Image
            className={style.logo}
            src={logo}
            alt="logo"
            height={100}
            width={100}
         />
         <div className={style.line}></div>
         <div
            className={
               !navToggle
                  ? `${style.nav_items}`
                  : `${style.nav_items} ${style.toggle}`
            }
         >
            <Image
               className={style.close}
               src={close}
               alt="logo"
               height={100}
               width={100}
               onClick={() => setNavToggle(!navToggle)}
            />
            <Link href="/" className={style.nav_item}>
               <p>00</p>
               <p>Home</p>
            </Link>
            <Link href="/destinations" className={style.nav_item}>
               <p>01</p>
               <p>Destination</p>
            </Link>
            <Link href="/crew" className={style.nav_item}>
               <p>03</p>
               <p>Crew</p>
            </Link>
            <Link href="/technology" className={style.nav_item}>
               <p>00</p>
               <p>Technology</p>
            </Link>
         </div>
         <Image
            className={style.hamburger}
            src={hamburger}
            alt="logo"
            height={100}
            width={100}
            onClick={() => setNavToggle(!navToggle)}
         />
      </div>
   );
}

export default Navigation;
