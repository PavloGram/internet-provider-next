'use client'
import React from "react";
import Hero from "../components/Hero";
import Card from "../ui/card";
import Contact from "../ui/contact";
import Modal from "../ui/modal";
import webCamIcon from "../../public/webCam.jpg";
function Web() {
  const pageName = "Камери відеоспостереження";
  return (
    <main>
      <Hero page={pageName} />
      <section>
        <h1 className="text-[#157696] text-21px md:text-[25px] lg:text-[30px] xl:text-[38px] text-center py-7">
          Тарифи на послугу
        </h1>
      </section>
      <Card srcImg={webCamIcon}/>
      <Contact />
      <Modal />
    </main>
  );
}

export default Web;
