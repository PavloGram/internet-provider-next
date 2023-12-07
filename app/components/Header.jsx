"use client";
import React, { useState } from "react";
import menuIcon from "../../public/svg/menuIcon.svg?url";
import closeIcon from "../../public/svg/closeIcon.svg?url";
import Image from "next/image";
import FacebookIcon from "../../public/svg/facebookIcon2.svg";
import InstagramIcon from "../../public/svg/instagramIcon.svg";
import phoneIcon from "../../public/svg/phoneIcon.svg?url";
import mailIcon from "../../public/svg/mailIcon.svg?url";
import Navigate from "./Navigate";

function Header() {
  const [actMobMeny, setActMobMenu] = useState(false);
  return (
    <header className="mx-auto">
      <div className="hidden sm:flex  text-white bg-[#079fd1] text-xs px-10 py-3 flex-wrap gap-x-[100px] justify-center md:text-base xl:gap-x-[400px]">
        <div className="flex gap-x-[20px]">
          <a href="tel:+380961111111" className="flex items-center gap-1">
            <Image src={phoneIcon} alt="icon" width={12} height={12} />
            +380 96 111 11 11
          </a>
          <a href="tel:+380961111111" className="flex items-center gap-1">
            <Image src={phoneIcon} alt="icon" width={12} height={12} />
            +380 96 111 11 11
          </a>

          <a href="mailto:mail@gmail.com" className="flex items-center gap-1">
            <Image src={mailIcon} alt="icon" width={14} height={14} />
            mail@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="http://metannet.speedtestcustom.com/">Перевірка швидкості</a>
          <a href="/">
            <FacebookIcon />
          </a>
          <a href="/">
            <InstagramIcon />
          </a>
        </div>
      </div>
      <div className="md:hidden">
        <p className="text-[28px] text-center">Logo & Company name</p>
        <div className="p-[10px] bg-[#079fd1] flex justify-between items-center ">
          <span className="uppercase font-bold text-white">menu</span>{" "}
          <button type="button" onClick={() => setActMobMenu(!actMobMeny)}>
            <Image
              src={actMobMeny ? closeIcon : menuIcon}
              alt="icon"
              width={35}
              height={35}
            />
          </button>
        </div>
      </div>
      <Navigate />
    </header>
  );
}

export default Header;
