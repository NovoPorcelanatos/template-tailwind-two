import React from 'react'
import Us from '../components/Us'
import Buttons from '../components/helpers/Buttons'
import NextCarousel from '../components/NextCarousel'
import NuevoCarrusel from '../components/NuevoCarrusel'
function About() {
  return (
    <div className='flex justify-center align-center flex-col	text-center	bg-[url("/marbel.webp")] max-w-[100vw] w-full'>
      <h1 className=' font-bold tracking-tight leading-tight mt-12 mb-6 text-white max-w-full text-5xl md:text-6xl xl:text-7xl'><span className='text-red-600 lg:text-8xl text-6xl'>novo</span> Porcelanatos</h1>
      <Us />
      <Buttons />
      <NuevoCarrusel />
      <NextCarousel />
    </div>
  )
}

export default About