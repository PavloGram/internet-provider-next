import React from 'react'
import Hero from '../ui/hero'
import Contact from '../ui/contact'
import Card from '../ui/card'
import Modal from '../ui/modal'

function Internet() {
  return (
   <main>
    <Hero/>
    <h1 className="text-[#157696] text-21px md:text-[25px] lg:text-[30px] xl:text-[38px] text-center py-7">Тарифи на послугу</h1>
    <Card/>
    <Contact/>
   <Modal/>
   </main>
  )
}

export default Internet