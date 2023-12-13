import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Contact from "../components/Contact";
import Modal from "../components/Modal";
import webCamIcon from "../../public/webCam.jpg";
import ProductTitle from "../components/ProductTitle";

const pageName = "Камери відеоспостереження";
export const metadata = {
  title: pageName,
};

function Web() {
  return (
    <main>
      <Hero page={pageName} />
      <ProductTitle/>
      <Card srcImg={webCamIcon} />
      <Contact />
      <Modal />
    </main>
  );
}

export default Web;
