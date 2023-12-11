import React from "react";
import Hero from "../ui/hero";
import Image from "next/image";
import promoImg from "../../public/promotional-offer.jpg";

function Action() {
  return (
    <>
      <Hero />
      <section>
        <div className="max-w-[1140px] my-[90px] mx-auto px-10">
          <div className=" flex gap-16 flex-col items-center md:flex-row shadow-[0_0_12px_0_rgba(0,0,0,0.2)] rounded-xl p-5">
            <Image src={promoImg} alt="promo" width={509} height={309} className=" w-[200px]"/>
            <p>
              <span className="font-bold">Attention!</span> As a special gift, anyone who connects an internet
              modem and router will receive exclusive access to movies and
              channels. Those who connect before the New Year will enjoy this
              bonus gift! Seize this fantastic opportunity now and treat
              yourself and your loved ones to this special offer!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Action;
