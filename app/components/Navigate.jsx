import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from '../../public/logoNoBg.png'
import chevronUpIcon from '../../public/svg/chevronUp.svg?url'

function Navigate() {

  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleUpButton = () => {
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
     <div className={`hidden text-white md:flex font-bold w-[740px] lg:w-[960px] xl:w-[1140px] bg-black/[0.6] justify-between p-4 pl-0 fixed ${scroll  ? "top-0" : "top-[100px]"} right-[50%] translate-x-[50%] rounded items-center`}>
      <div>
        <Link href='/'>
        <Image src={logo} alt="logo" width={105} height={75}/>
        </Link>
        
      </div>
      <nav className="flex gap-x-2  items-center text-[13px] lg:text-[16px] xl:gap-x-4">
        <Link href="/">Головна</Link>
        <Link href="/internet">Інтернет</Link>
        <Link href="/film&tv">Фільми та телебачення</Link>

        <Link href="/web">Спостереження</Link>
        <Link href="/action">Акції</Link>
        <Link href="/contacts">Контакти</Link>
        <Link href="/about">Про нас</Link>
        <Link href="/pay"
        //  className="px-6 py-3 bg-[#079fd7] rounded"
         >Оплата</Link>
      </nav>
    </div>
    {scroll > 200 && <button
            className="fixed bottom-20 right-6 md:bottom-10 md:right-20  bg-[#079fd1] rounded-md"
            onClick={handleUpButton}
        ><Image src={chevronUpIcon} alt="icon" width={40} height={40} /></button>


    }
    
    </>
   
  );
}

export default Navigate;
