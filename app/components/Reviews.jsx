import React, { useState } from 'react'
import styled from '../ui/animation.module.css'
import comImg from "../../public/comImg.png";
import Image from 'next/image';
const comments = [
    {
      id: 1,
      name: "Oleg",
      text:
        " very good high speed internet. Router and modem as a gift. Great" +
        " " +
        " price and high speed!!! Thank you Widewave for super service and " +
        " " +
        " professionalism",
        photo: comImg
    },
    {
      id: 2,
      name: "Ivan",
      text:
        "I had internet. but he often disappeared, was slow. friends" +
        " " +
        "recommended wide wave. they were very pleased. I tried and I was not" +
        " " +
        " wrong. everything works at the highest level. I also recommend it to" +
        " " +
        "everyone.",
        photo: comImg
    },
    {
        id: 3,
        name: "Oleg",
        text:
          " very good high speed internet. Router and modem as a gift. Great" +
          " " +
          " price and high speed!!! Thank you Widewave for super service and " +
          " " +
          " professionalism",
          photo: comImg
      },
      {
        id: 4,
        name: "Ivan",
        text:
          "I had internet. but he often disappeared, was slow. friends" +
          " " +
          "recommended wide wave. they were very pleased. I tried and I was not" +
          " " +
          " wrong. everything works at the highest level. I also recommend it to" +
          " " +
          "everyone.",
          photo: comImg
      },
  ];

function Reviews() {
    const [people, setPeople] = useState(comments)
    const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <>
      <section className={styled.section}>
     <div>
        <h2 className={styled.title}>reviews</h2>
     </div>
     <div className={styled.sectionCenter}>
      {people.map((person, personIndex) => {
       let position = styled.nextSlide
       if(position === currentIndex){
        position = styled.activeSlide
       }
       if(personIndex === currentIndex - 1 || currentIndex === 0 && personIndex === people.length - 1){
         position = styled.lastsSlide
       }
       return(
        <article key={person.id} className={`${position}`}>
            <Image src={person.photo} alt='person' width={100} height={100}/>
            <h4 className={styled.articleH4}>{person.name}</h4>
            <p className={styled.text}>{person.text}</p>
        </article>
       )
      })}
      
     </div>
    </section>
    <button type='button' className='prev' onClick={() => setCurrentIndex(currentIndex - 1)}>prev</button>
      <button type='button' className={`${styled.next}`} onClick={() => setCurrentIndex(currentIndex + 1)}>next</button>
    </>
  
  )
}

export default Reviews