import React from 'react'

function TechService() {
  return (
    <section className="w-full h-[280px] bg-tech-bg  bg-center">
    <div className="max-w-[1140px] mx-auto text-white py-[90px] flex flex-col items-center md:flex-row md:justify-between md:px-20">
      <h2 className="text-[25px]">Технічна підтримка</h2>
      <div className="flex flex-col text-[20px]">
        <a href="tel:+16892125127">+1(689)212 51 27</a>
        <a href="tel:+13054627507">+1(305)462 75 07</a>
      </div>
    </div>
  </section>
  )
}

export default TechService