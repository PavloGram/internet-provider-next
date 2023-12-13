"use client";
import React from "react";
import Link from "next/link";
import ClockIcon from "../ui/ClockIcon";
import MailSvg from "../ui/MailIcon";
import PhoneSvg from "../ui/PhoneIcon";
import MapsIcon from "../ui/MapsIcon";
import InstagramIcon from "../ui/InstagramIcon";
import TikTokIcon from "../ui/TikTokIcon";
import FacebookIcon from "../ui/FacebookIcon";

function Footer() {
  return (
    <>
      <footer className="bg-[#079fd1] w-full text-white py-16 px-2 text-center md:text-left ">
        <div className=" flex flex-wrap justify-center mx-auto items-start md:gap-x-7">
          <div className="w-[500px] md:w-[330px] lg:w-[220px] xl:w-[255px]">
            <Link href="/"></Link>
            <h2 className="text-[30px]  my-6 font-black uppercase ">
              Widewave
            </h2>
            <p className="mb-4 max-w-[500px] md:max-w-[330px] lg:max-w-[220px] xl:max-w-[255px]">
              Ми надаємо послуги по підключенню та доступу до швидкісної
              оптиковолоконної мережі Інтернет.
            </p>
            <ul className="flex justify-center gap-x-2 md:justify-start">
              <li>
                <a
                  href="/"
                  className="w-10 h-10 flex justify-center items-center rounded bg-[#157696] hover:bg-[#079fd1] transition-colors duration-300"
                >
                  <FacebookIcon width={16} height={17}/>
            
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="w-10 h-10 flex justify-center items-center rounded bg-[#157696] hover:bg-[#079fd1] transition-colors duration-300"
                >
                  <InstagramIcon width={16} height={17} />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="w-10 h-10 flex justify-center items-center rounded bg-[#157696] hover:bg-[#079fd1] transition-colors duration-300"
                >
                  <TikTokIcon width={16} height={17} />
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
                <a href="/">Якість інтернету</a>
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
                <MapsIcon width={20} height={20} />
                <p>Місцезнаходження</p>
              </li>
              <li className="flex flex-col items-center gap-x-3 md:flex-row   ">
                <PhoneSvg width={18} height={20} />

                <div className="flex flex-col">
                  <a href="tel:+16892125127">+1(689) 212 51 27</a>
                  <a href="tel:+13054627507">+1(305) 462 75 07</a>
                </div>
              </li>
              <li className="flex flex-col items-center gap-x-3 md:flex-row">
                <MailSvg width={18} height={20} />

                <a href="mailto:Widewaveit@gmail.com">Widewaveit@gmail.com</a>
              </li>
              <li className="flex flex-col items-center gap-x-3 md:flex-row">
                <ClockIcon width={20} height={20} />
                <p>Години роботи з 9:00 до 19:00</p>
              </li>
            </ul>
          </address>
          <div className=" w-[500px] md:w-[330px] lg:w-[220px] xl:w-[255px]">
            <h2 className="text-[25px] my-7 font-bold">Навігація</h2>
            <ul className="flex flex-col gap-y-2">
              <li>
                <Link href="/">Головна</Link>
              </li>
              <li>
                <Link href="/internet">Інтернет</Link>
              </li>
              <li>
                <Link href="/film&tv">Фільми та телебачення</Link>
              </li>
              <li>
                <Link href="/web">Камери відеоспостереження</Link>
              </li>
              <li>
                <Link href="/action">Акції</Link>
              </li>
              <li>
                <Link href="/contacts">Контакти</Link>
              </li>
              <li>
                <Link href="/about">Про нас</Link>
              </li>
              <li>
                <Link href="/pay">Оплата</Link>
              </li>
              <li>
                <Link href="/vacancies">Вакансії</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="  bg-[#079fd1] w-full   ">
        <div className="max-w-[960px] xl:max-w-[1140px] flex justify-center  mx-auto border-t border-white text-white py-7 px-6 text-center">
          <p>© WideWave всі права захищені.</p>
         
        </div>
      </div>
    </>
  );
}

export default Footer;
