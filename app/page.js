import Image from 'next/image'

export default function Home() {
  return (
  <main >
   <div className='flex items-center justify-center w-full h-[600px]'><p className='text-[40px]'>Головна сторінка</p></div>
 <div className='w-full h-[280px] bg-tech-bg  bg-center'>
      <div className='max-w-[1140px] mx-auto text-white py-[90px] flex flex-col items-center md:flex-row md:justify-between md:px-20'>
        <h2 className='text-[25px]'>Технічна підтримка</h2>
        <div className='flex flex-col text-[20px]'>
            <a href='tel:+380961111111'>+380 96 111 11 11</a>
            <a href='tel:+380961111111'>+380 96 111 11 11</a>

        </div>
      </div>
 </div>
 </main>
  )
}
