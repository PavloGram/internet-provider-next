"use client";
import React, { useState } from "react";
import menuIcon from "../../public/svg/menuIcon.svg?url";
import closeIcon from "../../public/svg/closeIcon.svg?url";
import Image from "next/image";
import Navigate from "./Navigate";
import logo from "../../public/logoNoBgZip.png";
import Link from "next/link";
import PhoneSvg from "../ui/PhoneIcon";
import MailSvg from "../ui/MailIcon";

import InstagramIcon from "../ui/InstagramIcon";
import TikTokIcon from "../ui/TikTokIcon";
import FacebookIcon from "../ui/FacebookIcon";

function Header() {
  const [actMobMeny, setActMobMenu] = useState(false);
  return (
    <header className="mx-auto">
      <div className="hidden sm:flex z-40  text-white bg-[#079fd1] text-xs px-10 py-3 flex-wrap gap-x-[100px] justify-center md:text-base xl:gap-x-[400px]">
        <div className="flex gap-x-[20px]">
          <a
            href="tel:+16892125127"
            className="headerLink flex items-center gap-1  transition hover:text-black"
          >
            <PhoneSvg width={12} height={12} />
            +1(689) 212 51 27
          </a>
          <a
            href="tel:+13054627507"
            className="headerLink flex items-center gap-1 transition hover:text-black"
          >
            <PhoneSvg width={12} height={12} />
            +1(305) 462 75 07
          </a>

          <a
            href="mailto:Widewaveit@gmail.com"
            className="headerLink flex items-center gap-1 transition hover:text-black"
          >
            <MailSvg width={14} height={14} />
            Widewaveit@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="http://metannet.speedtestcustom.com/"
            className="hover:text-black transition-colors duration-300"
          >
            Перевірка швидкості
          </a>
          <a href="/" className="headerLink">
            <FacebookIcon width={15} height={16} />
          </a>
          <a href="/" className="headerLink">
            <InstagramIcon width={15} height={16} />
          </a>
          <a href="/" className="headerLink">
            <TikTokIcon width={15} height={16} />
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
          <div className="absolute bottom-[-100%] right-0  w-full h-full  pointer-events-none ">
            {actMobMeny && (
              <nav
                className={`trans shadow-[0_0_30px_0_rgba(0,0,0,0.08)] rounded-b-xl absolute top-0 left-0 flex flex-col items-center py-5 bg-white gap-2 w-full transition duration-300 ${
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
                  Камери відеоспостереження
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
                <Link
                  href="/vacancies"
                  //  className="px-6 py-3 bg-[#079fd7] rounded"
                  onClick={() => setActMobMenu(!actMobMeny)}
                >
                  Вакансії
                </Link>
                <div className="flex gap-x-3 mt-5">
                  <a
                    className="w-8 h-8 rounded-full bg-[#079fd1] flex justify-center items-center"
                    href="/"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    className="w-8 h-8 rounded-full bg-[#079fd1] flex justify-center items-center"
                    href="/"
                  >
                    <InstagramIcon width={18} height={20} />
                  </a>
                  <a
                    className="w-8 h-8 rounded-full bg-[#079fd1] flex justify-center items-center"
                    href="/"
                  >
                    <TikTokIcon width={17} height={18} />
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
