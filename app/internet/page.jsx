import React from "react";
import Hero from "../components/Hero";
import Contact from "../ui/contact";
import Card from "../ui/card";
import Modal from "../ui/modal";
import routerIcon from "../../public/icon2.png";

function Internet() {
  const pageName = "Інтернет";
  return (
    <main>
      <Hero page={pageName}/>
      <section>
        <h1 className="text-[#157696] text-21px md:text-[25px] lg:text-[30px] xl:text-[38px] text-center py-7">
        Тарифи на послугу
      </h1>
      </section>
      
      <Card srcImg={routerIcon}/>
      <Contact />
      <Modal />
    </main>
  );
}

export default Internet;
