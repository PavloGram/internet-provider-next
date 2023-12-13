import React from "react";
import Hero from "../components/Hero";
import AboutCom from "../components/AboutCom";


const pageName = "Про нас";
export const metadata = {
  title: pageName,
};

function AboutAs() {
  return (
    <main>
      <Hero page={pageName} />
      <AboutCom/>
      
    </main>
  );
}

export default AboutAs;
