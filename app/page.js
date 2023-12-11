"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import logoImg from "../public/logoNoBg.png";
import comImg from "../public/comImg.png";
import { heroData } from "./lib/data-hero";
import clsx from "clsx";

const comments = [
  {
    id: 1,
    name: "Oleg",
    text:
      " very good high speed internet. Router and modem as a gift. Great" +
      " " +
      " price and high speed!!! Thank you Widewave for super service and " +
      " " +
      " professionalism",
  },
  {
    id: 2,
    name: "Ivan",
    text:
      "I had internet. but he often disappeared, was slow. friends" +
      " " +
      "recommended wide wave. they were very pleased. I tried and I was not" +
      " " +
      " wrong. everything works at the highest level. I also recommend it to" +
      " " +
      "everyone.",
  },
];

export default function Home() {
  const [currentPosition, setCurrentPosition] = useState(1);

  function handleChangePosition() {
    if (currentPosition === comments.length) {
      return setCurrentPosition(1);
    } else {
      return setCurrentPosition(currentPosition + 1);
    }
  }


  return (
    <main>
      <div className="  w-[100vw] h-[600px] md:h-[730px] lg:h-[920px] bg-blue-hero-bg bg-cover bg-center flex flex-col justify-center md:flex-row items-center">
        <div className="max-w-[1140px] p-5 flex flex-col gap-y-10 text-center md:text-left md:flex-row">
          <div className="">
            <h1 className="text-[31px] md:text-[40px] lg:text-[40px]">
            Інтернет у кожен дім
          </h1>
          <p className="md:text-[22px]">
            Ми невпинно працюємо над розширенням високошвидкісної мережі
            MetanNet. Значний досвід у сфері будівництва мереж, висока
            кваліфікація наших спеціалістів, використання передових технологій -
            все це забезпечує комфортне підключення нових населених пунктів.
          </p>
          </div>
           <Image
          src={logoImg}
          alt="logo"
          width={420}
          height={300}
          className="hidden md:block w-[420px] h-[300px]"
        />
        </div>
       
      </div>
      <section className="max-w-[1140px] mx-auto">
        <div>
          {comments.map((el, i) => {
            if (i + 1 === currentPosition) {
              return (
                <div
                  key={el.id}
                  className="opacity-100 max-w-[500px] mx-auto py-10  flex items-center border-2 boreder-[#079fd1] rounded-xl my-5 pr-10"
                >
                  <div>
                    <h2 className="text-[24px] font-bold mb-2 text-center">
                      {el.name}
                    </h2>
                    <div className="w-[180px] flex justify-center items-center">
                      <Image src={comImg} alt="icon" width={120} height={160} />
                    </div>
                  </div>

                  <p className="">{el.text}</p>
                </div>
              );
            } else {
              return null;
            }
          })}
          
        </div>
      </section>
      <div className="w-full h-[280px] bg-tech-bg  bg-center">
        <div className="max-w-[1140px] mx-auto text-white py-[90px] flex flex-col items-center md:flex-row md:justify-between md:px-20">
          <h2 className="text-[25px]">Технічна підтримка</h2>
          <div className="flex flex-col text-[20px]">
            <a href="tel:+16892125127">+1(689)212 51 27</a>
            <a href="tel:+13054627507">+1 (305) 462-7507</a>
          </div>
        </div>
      </div>
    </main>
  );
}
