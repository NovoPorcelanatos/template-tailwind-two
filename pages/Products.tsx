import React from 'react'
import Image from 'next/image'
import Category from '../components/Category'
import Buttons from '../components/helpers/Buttons'
function Products() {
  return (
  <div>
        <div className='flex items-center justify-center flex-col	bg-[url("/marbel.webp")] text-center'>
      <h1 className='text-5xl font-bold tracking-tight leading-tight mt-12 mb-6 text-white'>Visita nuestra <a href="https://www.ceramicasnet.com.ar/" target='_blank' rel='noopener noreferrer' className='text-red-600 uppercase hover:text-red-700'>tienda online</a></h1>
      <p className='text-lg font-semibold mb-4 text-white'>Encontrá todos los productos en nuestro e-shop</p>
      <Buttons />
       <a href="https://www.ceramicasnet.com.ar/" target='_blank' rel='noopener noreferrer'> 
        <Image 
          src="/banner.svg"
          alt="Picture of the author"
          width={600}
          height={300}
        />
        </a>
        </div>
        <Category />
  </div>
  )
}

export default Products