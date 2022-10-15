import React from 'react'
import {MailIcon, PhoneOutgoingIcon, MapIcon } from '@heroicons/react/outline'
import Image from 'next/image'

function ContactBanner() {
  return (
    <section className=" bg-transparent text-white">

    <div className="rounded-lg shadow-lg bg-transparent ">
      <div className="flex flex-wrap items-center">
        <div className=" flex flex-col lg:flex-row items-center justify-center m-auto">
        <div className="mb-12 w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12 min-w-[300px] bg-black py-6 rounded-lg mx-2">
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="p-4 bg-red-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dollar-sign"
                      className="w-3 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512">
                      <path fill="currentColor"
                        d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z">
                      </path>
                    </svg>
                  </div>
                </div>
                <div className="grow ml-6">
                  <p className="font-bold mb-1">Preguntas de ventas</p>
                  <a  href="mailto:novoporcelanatos2019@gmail.com" target='_blank' rel='noopener noreferrer' ><p className="text-stone-200 flex items-center hover:text-stone-400 ease-in-out duration-300 ">Enviar consulta por mail <MailIcon className="block h-4 w-4" /></p></a>
                  <a href="tel:+54 9 11 5765-2651" target='_blank' rel='noopener noreferrer'><p className="text-stone-200 hover:text-stone-400 ease-in-out duration-300 flex items-center ">+54 9 11 5765-2651 <PhoneOutgoingIcon  className='block h-4 w-4'/></p></a>
                </div>
              </div>
            </div>
            <div className="mb-12 w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12 min-w-[300px] bg-black py-6 rounded-lg mx-2">
              <div className="flex align-start">
                <div className="shrink-0">
                  <div className="p-4 bg-red-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="newspaper"
                      className="w-5 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="currentColor"
                        d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z">
                      </path>
                    </svg>
                  </div>
                </div>
                <div className="grow ml-6">
                  <p className="font-bold mb-1">Asesoramiento</p>
                  <a  href="mailto:novoporcelanatos2019@gmail.com" target='_blank' rel='noopener noreferrer' ><p className="text-stone-200 flex items-center hover:text-stone-400 ease-in-out duration-300 ">Enviar consulta por mail <MailIcon className="block h-4 w-4" /></p></a>
                  <a href="tel:+54 9 11 5765-2651" target='_blank' rel='noopener noreferrer'><p className="text-stone-200 hover:text-stone-400 ease-in-out duration-300 flex items-center">+54 9 11 5765-2651 <PhoneOutgoingIcon  className='block h-4 w-4'/></p></a>
                </div>
              </div>
            </div>
            <div className="mb-12 w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12 min-w-[300px] bg-black py-6 rounded-lg mx-2">
              <div className="flex align-start">
                <div className="shrink-0">
                  <div className="p-4 bg-red-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                  <MapIcon  className="block h-5 w-5" />
                  </div>
                </div>
                <div className="grow ml-6">
                  <p className="font-bold mb-1">Showroom</p>
                  <a  href="https://goo.gl/maps/6aEVZb3eU2CnMcBDA" target='_blank' rel='noopener noreferrer' ><p className=" text-stone-200 flex items-center hover:text-stone-400 ease-in-out duration-300 whitespace-nowrap	">Av. Pres. Perón 8808, Ituzaingó.<MapIcon className="block h-4 w-4" /></p></a>
                  <a href="tel:+54 9 11 5765-2651" target='_blank' rel='noopener noreferrer'><p className="text-stone-200 hover:text-stone-400 ease-in-out duration-300 flex items-center">+54 9 11 5765-2651<PhoneOutgoingIcon  className='block h-4 w-4'/></p></a>
                </div>
              </div>
            </div>
        </div>
          <div className="map-container-2 w-full">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1160.7201346004497!2d-58.696699714334436!3d-34.629129131931876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbfab6556d74f%3A0xd52beafb332c9588!2sAv.%20Pres.%20Per%C3%B3n%208808%2C%20B1714ARC%20Ituzaing%C3%B3%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1657813556768!5m2!1ses-419!2sar" className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className='flex justify-center p-4 w-full'>
          <Image 
             src="/novo.webp"
             alt="Picture of the author"
             width={1000}
             height={400}
            />
          </div>
      </div>
    </div>
  </section>
  )
}

export default ContactBanner