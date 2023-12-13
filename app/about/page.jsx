import React from "react";
import Hero from "../components/Hero";
import logo from '../../public/logoNoBgZip.png'
import Image from "next/image";

function AboutAs() {
  const pageName = 'Про нас'
  return (
    <main>
  
        <Hero page={pageName}/>
      
      <section className="max-w-[1140px] mx-auto my-20 px-3 flex flex-wrap gap-5 justify-center">
        <Image src={logo} alt="logo" width={420} height={300}/>
         <div className=" min-w-[320px] max-w-[100%] md:max-w-[50%]">
        
          <p>
            Wide wave -це інноваційна компанія, що спеціалізується на розробці
            та просуванні IT -технологій та соціальних медіа. Ми зосереджені на
            творенні унікальних та ефективних рішень для наших клієнтів,
            допомагаючи їм побудувати сильну присутність в он-лайн середовищі.
            Також компанія займається безпекою Вашого інтернет-простоту та
            Вашого життя. З нами Ви досягнуте нових висот та матимете можливість
            успішно здійснювати свою діяльність через якісний та супер
            швидкісний інтернет. А можливість переглядати фільми та мати доступ
            до безліч телеканалів, покращить якість Вашого життя і допоможе
            провести чудово і корисно час. З нами Ваше життя стане якіснішим і
            наповниться новими враженнями та досягненнями! Wide Wave - це
            якість, швидкість та безпека!
          </p>
        </div>
      </section>
    </main>
  );
}

export default AboutAs;
