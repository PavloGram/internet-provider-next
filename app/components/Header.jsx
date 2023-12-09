"use client";
import React, { useState } from "react";
import menuIcon from "../../public/svg/menuIcon.svg?url";
import closeIcon from "../../public/svg/closeIcon.svg?url";
import Image from "next/image";
import FacebookIcon from "../../public/svg/facebookIcon2.svg";
import InstagramIcon from "../../public/svg/instagramIcon.svg";
import TikTokIcon from "../../public/svg/tikTokIcon.svg";
import phoneIcon from "../../public/svg/phoneIcon.svg?url";
import mailIcon from "../../public/svg/mailIcon.svg?url";
import Navigate from "./Navigate";
import logo from "../../public/logoNoBg.png";
import Link from "next/link";

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
          <a
            href="http://metannet.speedtestcustom.com/"
            className="hover:text-black transition-colors duration-300"
          >
            Перевірка швидкості
          </a>
          <a href="/">
            <FacebookIcon />
          </a>
          <a href="/">
            <InstagramIcon />
          </a>
          <a href="/">
            <TikTokIcon />
          </a>
        </div>
      </div>
      <div className="md:hidden">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={210}
            height={150}
            className="mx-auto my-5"
          />
        </Link>

        {/* <p className="text-[28px] text-center">Logo & Company name</p> */}
        <div className="relative p-[10px] bg-[#079fd1] flex justify-between items-center ">
          <span className="uppercase font-bold text-white">menu</span>{" "}
          <button type="button" onClick={() => setActMobMenu(!actMobMeny)}>
            <Image
              src={actMobMeny ? closeIcon : menuIcon}
              alt="icon"
              width={35}
              height={35}
            />
          </button>
          <div className="absolute bottom-[-100%] right-0  w-full h-full bg-white pointer-events-none ">
            {actMobMeny && (
              <nav
                className={`shadow-[0_0_30px_0_rgba(0,0,0,0.08)] rounded-b-xl absolute top-0 left-0 flex flex-col items-center py-5 bg-white gap-2 w-full transition duration-300 ${
                  actMobMeny ? "translate-y-0 " : "translate-y-[-100%] "
                } pointer-events-auto`}
              >
                <Link href="/" onClick={() => setActMobMenu(!actMobMeny)}>
                  Головна
                </Link>
                <Link
                  href="/internet"
                  onClick={() => setActMobMenu(!actMobMeny)}
                >
                  Інтернет
                </Link>
                <Link
                  href="/film&tv"
                  onClick={() => setActMobMenu(!actMobMeny)}
                >
                  Фільми та телебачення
                </Link>

                <Link href="/web" onClick={() => setActMobMenu(!actMobMeny)}>
                  Спостереження
                </Link>
                <Link href="/action" onClick={() => setActMobMenu(!actMobMeny)}>
                  Акції
                </Link>
                <Link
                  href="/contacts"
                  onClick={() => setActMobMenu(!actMobMeny)}
                >
                  Контакти
                </Link>
                <Link href="/about" onClick={() => setActMobMenu(!actMobMeny)}>
                  Про нас
                </Link>
                <Link
                  href="/pay"
                  //  className="px-6 py-3 bg-[#079fd7] rounded"
                  onClick={() => setActMobMenu(!actMobMeny)}
                >
                  Оплата
                </Link>
                <div className="flex gap-x-3 mt-5">
                
          <a className="w-6 h-6 rounded-full bg-[#079fd1] flex justify-center items-center"  href="/">
            <FacebookIcon />
          </a>
          <a className="w-6 h-6 rounded-full bg-[#079fd1] flex justify-center items-center" href="/">
            <InstagramIcon />
          </a>
          <a className="w-6 h-6 rounded-full bg-[#079fd1] flex justify-center items-center" href="/">
            <TikTokIcon />
          </a>
                </div>
              </nav>
            )}
          </div>
        </div>
      </div>
      <Navigate />
    </header>
  );
}

export default Header;
