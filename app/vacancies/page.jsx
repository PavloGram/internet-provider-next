import React from 'react'
import Hero from '../components/Hero'

export const metadata = {
  title: 'Vacancies'
}

function Vacancies() {
  const pageName = "Наші вакансії";
  return (
   <main>
    <Hero page={pageName}/>
   </main>
  )
}

export default Vacancies