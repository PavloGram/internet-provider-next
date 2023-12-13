'use client'
import React from "react";
import Hero from "../components/Hero";
import Image from "next/image";
import conatctsThumb from "../../public/tabThumb.png";

function Contacts() {
  const pageName = 'Контакти'
  return (
    <main>
        <Hero page={pageName}/>
        <section className="max-w-[1140px] mx-auto my-10 md:flex gap-10 text-[17px]">
        <div className="px-9 py-[60px] max-w-[600px] md:max-w-[50%] mx-auto" >
          <h1 className="text-[#157696] font-bold text-[22px] mb-10 md:text-[28px] lg:text-[38px]">
            Зворотній зв&#39;язок
          </h1>
          <form  className="flex flex-col items-start gap-y-7">
            <input name="name" type="text" placeholder="Im’я*" required className="w-full placeholder:text-[#616161] placeholder:text-[18px] py-2 pl-[30px] pr-3 border-b border-[#f1f1f] outline-none" />
            <input name="email"  type="email" placeholder="Email*" required  className="w-full placeholder:text-[#616161] placeholder:text-[18px] py-2 pl-[30px] pr-3 border-b border-[#f1f1f] outline-none"/>
            <input name="phone" type="tel" placeholder="Номер телефону*" required className="w-full placeholder:text-[#616161] placeholder:text-[18px] py-2 pl-[30px] pr-3 border-b border-[#f1f1f] outline-none"/>
            <textarea name="message"  placeholder="Повідомлення*"   rows={6} required className="w-full placeholder:text-[#616161] placeholder:text-[18px] py-2 pl-[30px] pr-3 border-b border-[#f1f1f] outline-none"/>
            <button
              type="submit"
              className="text-[17px] px-[30px] py-[15px] bg-[#079fd1] rounded text-white font-bold leading-normal hover:bg-black transition-colors duration-300"
            >
              Відправити
            </button>
          </form>
        </div>
        <div className="max-w-[600px] md:max-w-[50%] mt-10 mx-auto p-3">
          <Image src={conatctsThumb} alt="thumb" width={631} height={571} />
        </div>
      </section>
    </main>
  );
}

export default Contacts;
