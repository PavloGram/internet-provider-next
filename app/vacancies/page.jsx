import React from "react";
import Hero from "../components/Hero";

const pageName = "Vacancies";
export const metadata = {
  title: pageName,
};

function Vacancies() {
  return (
    <main>
      <Hero page={pageName} />
    </main>
  );
}

export default Vacancies;
