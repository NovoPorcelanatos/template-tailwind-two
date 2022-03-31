import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    
<footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
<div className="sm:flex sm:items-center sm:justify-between">
<a href="https://flowbite.com" className="flex items-center mb-4 sm:mb-0">
<img src="/docs/images/logo.svg" className="mr-3 h-8" alt=" Logo"/>
<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Nombre</span>
</a>
<ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
<li>
<Link href="/" ><a className="mr-4 hover:underline md:mr-6 ">Inicio</a></Link>
</li>
<li>
<Link href="/About" ><a className="mr-4 hover:underline md:mr-6 ">Nosotros</a></Link>
</li>
<li>
<Link href="/Products" ><a className="mr-4 hover:underline md:mr-6 ">Productos</a></Link>
</li>
<li>
<Link href="/Contact" ><a className="mr-4 hover:underline md:mr-6 ">Contacto</a></Link>
</li>
</ul>
</div>
<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" className="hover:underline">Nombre™</a>. Todos los derechos reservados.
</span>
</footer>

  )
}

export default Footer