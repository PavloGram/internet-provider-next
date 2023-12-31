import { useLangPack } from '@/store';
import Link from 'next/link'
import React from 'react'

function Vacans() {
  const langPack = useLangPack();
  const currentLangPack = langPack.currentLangPack;
  return (
    <section className="pt-[75px] pb-[65px] bg-contact-bg ">
      <div className='max-w-[1140px]  p-[10px] mx-auto flex flex-col items-center lg:flex-row lg:justify-between'>
      <p className="text-[23px] text-white text-center mb-[30px] lg:mb-0 font-bold md:text-[40px] lg:text-left">
          {currentLangPack.vacanc.toJoob}
        </p>{" "}
        <Link href='/vacancies' className='inline-block py-[22px] px-[34px] bg-white text-[#079fd1] rounded mb-[30px] lg:mb-0 text-[17px] whitespace-nowrap'>
        {currentLangPack.vacanc.myVacanc}
        </Link>
      </div>
    </section>
  )
}

export default Vacans