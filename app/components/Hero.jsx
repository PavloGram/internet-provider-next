"use client";
import React from "react";

function Hero({page}) {
  return (
    <section className="bg-hero-bg  w-full h-[276px] lg:h-[460px] bg-cover bg-top flex justify-center items-center text-white font-bold text-[20px]">
     <div><p>Ви тут: {page}</p></div> 
    </section>
  );
}

export default Hero;
