import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Contact from "../components/Contact";
import Modal from "../components/Modal";
import tvIcon from "../../public/tvIcon.png";
import ProductTitle from "../components/ProductTitle";

const pageName = "Фільми та телебачення";
export const metadata = {
  title: pageName,
};
function FilmAndTv() {
  return (
    <main>
      <Hero page={pageName} />
      <ProductTitle />
      <Card srcImg={tvIcon} />
      <Contact />
      <Modal />
    </main>
  );
}

export default FilmAndTv;
