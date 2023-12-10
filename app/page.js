"use client";
import Image from "next/image";
import { useState } from "react";
import logoImg from '../public/logoNoBg.png'


export default function Home() {
  const [position, setPosition] = useState("translate-x-[0]");

  function handleChangeLeft() {
    if (position === "translate-x-[0]") {
      return setPosition("translate-x-[-50%]");
    }
    setPosition("translate-x-[0]");
  }

  setInterval(handleChangeLeft, 5000)

  return (
    <main>
      {/* <div className="flex items-center justify-center w-full  flex-col max-w-[100vw]"> */}
      <div className="-z-1000 border max-w-[100vw] h-[600px] md:h-[730px] lg:h-[920px] overflow-hidden">
        <div
          className={`flex w-[200vw] top-0 left-0 ${position} gap-[1px] transition duration-[2000ms] `}
        >
          <div>
            <div className="  w-[100vw] h-[600px] md:h-[730px] lg:h-[920px] bg-blue-hero-bg bg-cover flex flex-col justify-center md:flex-row items-center">
            <div className="max-w-[1140px] p-5 flex flex-col gap-y-10 text-center md:text-left">
                <h1 className="text-[31px] md:text-[40px] lg:text-[40px]">Інтернет у кожен дім</h1>
                <p className="md:text-[22px]">
                  Ми невпинно працюємо над розширенням високошвидкісної мережі
                  MetanNet. Значний досвід у сфері будівництва мереж, висока
                  кваліфікація наших спеціалістів, використання передових
                  технологій - все це забезпечує комфортне підключення нових
                  населених пунктів.
                </p>
              </div>
              <Image src={logoImg} alt="logo" width={420} height={300} className="hidden md:block w-[420px] h-[300px]"/>
            </div>
          </div>
          <div>
            <div className="  w-[100vw] h-[600px] md:h-[730px] lg:h-[920px] bg-yellow-hero-bg bg-cover flex flex-col justify-center md:flex-row items-center">
              <div className="max-w-[1140px] p-5 flex flex-col gap-y-10 text-center md:text-left">
                <h1 className="text-[31px] md:text-[40px] lg:text-[40px]">
                  Підключайтесь і отримайте бонуси
                </h1>
                <p className="md:text-[22px]">
                  Ваш дім вже підключено до мережі Інтернет іншого провайдера?
                  Ви не дуже задоволені швидкістю, якістю та обслуговуванням?
                  При підключенні та переході від іншого провайдера до мережі
                  Інтернет MetanNet
                </p>
              </div>
            
                <Image src={logoImg} alt="logo" width={420} height={300} className="hidden md:block w-[420px] h-[300px]"/>
             
              
            </div>
          </div>
        </div>
      </div>
    

      {/* </div> */}

      <div className="w-full h-[280px] bg-tech-bg  bg-center">
        <div className="max-w-[1140px] mx-auto text-white py-[90px] flex flex-col items-center md:flex-row md:justify-between md:px-20">
          <h2 className="text-[25px]">Технічна підтримка</h2>
          <div className="flex flex-col text-[20px]">
            <a href="tel:+380961111111">+380 96 111 11 11</a>
            <a href="tel:+380961111111">+380 96 111 11 11</a>
          </div>
        </div>
      </div>
    </main>
  );
}
