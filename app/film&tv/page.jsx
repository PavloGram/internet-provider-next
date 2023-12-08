import React from 'react'
import Hero from '../ui/hero'
import Card from '../ui/card'
import Contact from '../ui/contact'

function FilmAndTv() {
  return (
    <main>
    <Hero/>
    <h1 className="text-[#157696] text-21px md:text-[25px] lg:text-[30px] xl:text-[38px] text-center py-7">Тарифи на послугу</h1>
    <Card/>
    <Contact/>
   </main>
  )
}

export default FilmAndTv