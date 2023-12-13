import React from "react";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";


const pageName = "Контакти";

export const metadata = {
  title: pageName,
};
function Contacts() {
  return (
    <main>
      <Hero page={pageName} />
     <ContactForm/>
    </main>
  );
}

export default Contacts;
