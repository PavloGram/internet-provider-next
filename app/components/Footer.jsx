"use client";
import React from "react";
import facebookIcon from "../../public/svg/facebookIcon2.svg?url";
import instagramIcon from "../../public/svg/instagramIcon.svg?url";
import clockIcon from "../../public/svg/clock-icon.svg?url";
import mapsIcon from "../../public/svg/maps.svg?url";
import mailIcon from "../../public/svg/mailIcon.svg?url";
import phoneIcon from "../../public/svg/phoneIcon.svg?url";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="bg-[#079fd1] w-full text-white py-16 px-2 text-center md:text-left ">
        <div className=" flex flex-wrap justify-center mx-auto items-start md:gap-x-7">
          <div className="w-[500px] md:w-[330px] lg:w-[220px] xl:w-[255px]">
            <h2 className="text-[30px]  my-6 font-bold">Company name</h2>
            <p className="mb-4 max-w-[500px] md:max-w-[330px] lg:max-w-[220px] xl:max-w-[255px]">
              Ми надаємо послуги по підключенню та доступу до швидкісної
              оптиковолоконної мережі Інтернет.
            </p>
            <ul className="flex justify-center gap-x-2 md:justify-start">
              <li>
                <a
                  href="/"
                  className="w-10 h-10 flex justify-center items-center rounded bg-[#157696]"
                >
                  <Image src={facebookIcon} alt="icon" width={16} height={17} />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="w-10 h-10 flex justify-center items-center rounded bg-[#157696]"
                >
                  <Image
                    src={instagramIcon}
                    alt="icon"
                    width={16}
                    height={17}
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className=" w-[500px] md:w-[330px] lg:w-[220px] xl:w-[255px]">
            <h2 className="my-7 text-[25px] font-bold">Корисні посилання</h2>
            <ul className=" flex flex-col gap-y-[10px]">
              <li>
                <a href="http://metannet.speedtestcustom.com/">
                  Перевірка швидкості
                </a>
              </li>
              <li>
                <a href="/pay">Оплата</a>
              </li>
              <li>
                <a href="/">Мапа покриття</a>
              </li>
              <li>
                <a href="/">Якість інтернету</a>
              </li>
              <li>
                <a href="/">Ліцензія 1</a>
              </li>
              <li>
                <a href="/">Ліцензія 2</a>
              </li>
              <li>
                <a href="/">Оператор</a>
              </li>
              <li>
                <a href="/">Публічний договір (оферта)</a>
              </li>
              <li>
                <a href="/">Налаштування роутера</a>
              </li>
            </ul>
          </div>
          <address className="not-italic  w-[500px] md:w-[330px] lg:w-[220px] xl:w-[255px]">
            <h2 className="text-[25px] my-7 font-bold">Зв’язок з нами</h2>
            <ul className="flex flex-col gap-y-3">
              <li className="flex flex-col items-center gap-x-3 md:flex-row">
                <Image src={mapsIcon} alt="icon" width={18} height={20} />
                <p>Місцезнаходження</p>
              </li>
              <li className="flex flex-col items-center gap-x-3 md:flex-row   ">
                <Image src={phoneIcon} alt="icon" width={18} height={20} />
                <div className="flex flex-col">
                  <a href="tel:+380961111111 ">+380 96 111 11 11</a>
                  <a href="tel:+380961111111 ">+380 96 111 11 11</a>
                </div>
              </li>
              <li className="flex flex-col items-center gap-x-3 md:flex-row">
                <Image src={mailIcon} alt="icon" width={18} height={20} />
                <a href="mailto:mail@gmail.com">mail@gmail.com</a>
              </li>
              <li className="flex flex-col items-center gap-x-3 md:flex-row">
                <Image src={clockIcon} alt="icon" width={18} height={20} />
                <p>Години роботи з 9:00 до 19:00</p>
              </li>
            </ul>
          </address>
          <div className=" w-[500px] md:w-[330px] lg:w-[220px] xl:w-[255px]">
            <h2 className="text-[25px] my-7 font-bold">Навігація</h2>
            <ul className="flex flex-col gap-y-2">
              <li>
                <Link href="/about">Про нас</Link>
              </li>
              <li>
                <Link href="/">Тарифи</Link>
              </li>
              <li>
                <Link href="/action">Акції</Link>
              </li>
              <li>
                <Link href="/">Новини</Link>
              </li>
              <li>
                <Link href="/contacts">Контакти</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="  bg-[#079fd1] w-full   ">
        <div className="max-w-[960px] xl:max-w-[1140px] flex justify-center flex-wrap gap-x-10 sm:justify-between mx-auto border-t border-white text-white py-7 px-6 text-center">
          <p>© MetanNet всі права захищені.</p>
          <div className="flex gap-x-4">
            <Link href="/">Тарифи</Link>
            <Link href="/contacts">Контакти</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
