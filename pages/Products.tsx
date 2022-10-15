import React from 'react'
import Image from 'next/image'
import Category from '../components/Category'
import Buttons from '../components/helpers/Buttons'
function Products() {
  return (
  <div>
        <div className='flex items-center justify-center flex-col	bg-[url("/marbel.webp")] text-center pb-4'>
      <h1 className='text-5xl font-bold tracking-tight leading-tight mt-12 mb-6 text-white'>Visita nuestra <a href="https://novoporcelanatos468381923.mercadoshops.com.ar//" target='_blank' rel='noopener noreferrer' className='text-red-600 uppercase hover:text-red-700'>tienda online</a></h1>
      <p className='text-lg font-semibold mb-4 text-white'>Encontrá todos los productos en nuestro e-shop</p>
      <p  className='text-lg font-bold mb-4 text-white uppercase'>Los precios en la tienda son <span className='text-red-600 font-extrabold'>precios en efectivo</span></p>
      <Buttons />
       <a href="https://novoporcelanatos468381923.mercadoshops.com.ar/" target='_blank' rel='noopener noreferrer'> 
        <Image 
          src="/tienda.webp"
          alt="Picture of the author"
          width={700}
          height={400}
        />
        </a>
        </div>
        <Category />
  </div>
  )
}

export default Products
