/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon, PhoneOutgoingIcon, MapIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/router";
const navigation = [
  { name: 'Inicio', href: '/', current: true },
  { name: 'Nosotros', href: '/About', current: false },
  { name: 'Productos', href: '/Products', current: false },
  { name: 'Contacto', href: '/Contact', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const router = useRouter();
  return (
    <Disclosure as="nav" className="bg-black z-50 max-w-full sticky top-0 ">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Abrir menú principal</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/" passHref ><span className='lg:hidden'><Image src="/logo4.png" className="mr-3 h-8 " alt=" Logo" width={50} height={30}/></span></Link>
                 <Link  href="/" passHref><span className="hidden lg:block h-8 w-auto text-white hover:cursor-pointer"><Image src="/logo4.png" className="mr-3 h-8" alt=" Logo" width={50} height={30}/></span></Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link key={item.name}
                      href={item.href} passHref>
                      <a 
                      className={`block px-3 py-2 rounded-md text-base font-medium  ${
                        router.asPath === item.href
                          ? "text-red-600"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                      aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
             <div>
             <a href="tel:+54 9 11 5765-2651" target='_blank' rel='noopener noreferrer'><PhoneOutgoingIcon className="block lg:hidden h-6 w-6 m-2 text-white " aria-hidden="true" /></a>
             <a href="https://g.page/novo-porcelanatos?share" target='_blank' rel='noopener noreferrer'><MapIcon className="lg:block hidden h-6 w-6 m-2 text-white hover:text-gray-400 transition-all" aria-hidden="true" /></a>
             </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                 <Disclosure.Button key={item.name} className="flex flex-col w-full text-left border-t border-border-default">
                 <Link key={item.name}
                 href={item.href}>
                 <a
                 className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer text-white transition-all ${
                  router.asPath === item.href
                  ? "text-red-600"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
                 aria-current={item.current ? 'page' : undefined}
                 >
                   {item.name}
                 </a>
                 </Link>
               </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
