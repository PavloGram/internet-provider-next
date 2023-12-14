import Image from "next/image";
import React from "react";
import CheckIcon from "../ui/CheckIcon";

function Card({ srcImg }) {
  return (
    <section>
      <div className="max-w-[1140px] my-[50px] xl:my-[90]px pt-5 flex flex-wrap gap-5 mx-auto ">
        <div className="w-[353px] mx-auto  shadow-[0_0_30px_0_rgba(0,0,0,0.08)] rounded-2xl my-10 border-t-4 border-[#fe974e]">
          <div className="relative border-b border-black  py-[60px]">
          <div className="w-[128px] h-[128px] mx-auto">
              <Image
                src={srcImg}
                alt="icon"
                className="mx-auto"
              />
            </div>
            <p className="text-center">200 грн / міс</p>
            <p className="absolute bottom-0 translate-y-[50%] left-[50%] translate-x-[-50%] inline-block px-[30px] py-[13px] bg-[#079fd1] text-white rounded-[30px]">
              Тариф
            </p>
          </div>
          <div className="w-[320px] mx-auto py-[60px] pl-16">
            <ul>
              <li className="flex gap-x-2 mb-4">
                <CheckIcon width={17} height={17} />

                <p>Швидкість</p>
              </li>
              <li className="flex gap-x-2 mb-4">
                <CheckIcon width={17} height={17} />

                <p>Безлімітність</p>
              </li>
              <li className="flex gap-x-2 mb-4">
                <CheckIcon width={17} height={17} />

                <p>Ір адресса</p>
              </li>
              <li className="flex gap-x-2 mb-4">
                <CheckIcon width={17} height={17} />

                <p>Ір телебачення</p>
              </li>
            </ul>
            <div className="flex flex-col ">
              <p className="ml-2">Tелефонуйте:</p>
              <a href="tel:+380961111111">+380 96 111 11 11</a>
              <a href="tel:+380961111111">+380 96 111 11 11</a>
            </div>
          </div>
        </div>
        <div className="w-[353px] mx-auto  shadow-[0_0_30px_0_rgba(0,0,0,0.08)] rounded-2xl my-10 border-t-4 border-[#fe974e]">
          <div className="relative border-b border-black  py-[60px]">
          <div className="w-[128px] h-[128px] mx-auto">
              <Image
                src={srcImg}
                alt="icon"
                className="mx-auto"
              />
            </div>
            <p className="text-center">200 грн / міс</p>
            <p className="absolute bottom-0 translate-y-[50%] left-[50%] translate-x-[-50%] inline-block px-[30px] py-[13px] bg-[#079fd1] text-white rounded-[30px]">
              Тариф
            </p>
          </div>
          <div className="w-[320px] mx-auto py-[60px] pl-16">
            <ul>
              <li className="flex gap-x-2 mb-4">
                <CheckIcon width={17} height={17} />

                <p>Швидкість</p>
              </li>
              <li className="flex gap-x-2 mb-4">
                <CheckIcon width={17} height={17} />

                <p>Безлімітність</p>
              </li>
              <li className="flex gap-x-2 mb-4">
                <CheckIcon width={17} height={17} />

                <p>Ір адресса</p>
              </li>
              <li className="flex gap-x-2 mb-4">
                <CheckIcon width={17} height={17} />

                <p>Ір телебачення</p>
              </li>
            </ul>
            <div className="flex flex-col ">
              <p className="ml-2">Tелефонуйте:</p>
              <a href="tel:+380961111111">+380 96 111 11 11</a>
              <a href="tel:+380961111111">+380 96 111 11 11</a>
            </div>
          </div>
        </div>
        <div className="w-[353px] mx-auto  shadow-[0_0_30px_0_rgba(0,0,0,0.08)] rounded-2xl my-10 border-t-4 border-[#fe974e]">
          <div className="relative border-b border-black  py-[60px]">
            <div className="w-[128px] h-[128px] mx-auto">
              <Image
                src={srcImg}
                alt="icon"
                className="mx-auto"
              />
            </div>

            <p className="text-center">200 грн / міс</p>
            <p className="absolute bottom-0 translate-y-[50%] left-[50%] translate-x-[-50%] inline-block px-[30px] py-[13px] bg-[#079fd1] text-white rounded-[30px]">
              Тариф
            </p>
          </div>
          <div className="w-[320px] mx-auto py-[60px] pl-16">
            <ul>
              <li className="flex gap-x-2 mb-4">
                <CheckIcon width={17} height={17} />

                <p>Швидкість</p>
              </li>
              <li className="flex gap-x-2 mb-4">
                <CheckIcon width={17} height={17} />

                <p>Безлімітність</p>
              </li>
              <li className="flex gap-x-2 mb-4">
                <CheckIcon width={17} height={17} />

                <p>Ір адресса</p>
              </li>
              <li className="flex gap-x-2 mb-4">
                <CheckIcon width={17} height={17} />

                <p>Ір телебачення</p>
              </li>
            </ul>
            <div className="flex flex-col ">
              <p className="ml-2">Tелефонуйте:</p>
              <a href="tel:+380961111111">+380 96 111 11 11</a>
              <a href="tel:+380961111111">+380 96 111 11 11</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
