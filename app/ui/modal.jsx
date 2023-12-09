'use client'
import React from 'react'
import closeIcon from "../../public/svg/closeIcon.svg?url"
import Image from 'next/image'
import { useModal } from '@/store'


function Modal() {
  const modal = useModal()

   
  return (
   <>
   {modal.isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/[0.5] flex justify-center pointer-events-auto  items-center overflow-y-auto"
          onClick={() => modal.close()}
        >
          <div
            className="relative mt-2  py-10 px-9 bg-white pointer-events-auto min-w-[260px]  max-w-[450px] rounded-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-0 right-0 w-9 h-9 bg-[#079fd1]"
              onClick={() => modal.close()}
            >
              <Image src={closeIcon} alt='icon' />
            </button>
            <form className='flex flex-col gap-[10px]'>
                <input type="text" className='leading-6 py-[10px] pr-4 pl-[30px] outline-none border border-[#ced4da] rounded focus:border-blue-500' placeholder='Ваше Ім’я*'></input>
                <select name='location' className='py-[10px] pr-4 pl-[30px] outline-none border border-[#ced4da] rounded focus:border-blue-500'></select>
                <select name='price' className='py-[10px] pr-4 pl-[30px] outline-none border border-[#ced4da] rounded focus:border-blue-500'></select>
                <input type="tel" className='py-[10px] pr-4 pl-[30px] outline-none border border-[#ced4da] rounded focus:border-blue-500' placeholder='Ваш телефон*'></input>
                <textarea cols={40} rows={6} className='py-[10px] pr-4 pl-[30px] outline-none border border-[#ced4da] rounded focus:border-blue-500' placeholder='Ваша адреса*'></textarea>
                <button type='submit' className=' py-[6px] px-3 mx-auto bg-[#079fd1] rounded text-[17px] text-white'>Відправити заявку</button>
            </form>
          </div>
        </div>
      )}
   </>
  )
}

export default Modal