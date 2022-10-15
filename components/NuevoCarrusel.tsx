import React from 'react'
import Image from 'next/image'
import { LazyMotion, domAnimation, m } from "framer-motion"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function NuevoCarrusel() {
    return (
        <section className="pt-16 text-gray-800 bg-black">
            <div className="block rounded-lg shadow-lg">
                <div className="flex flex-wrap items-center px-4 lg:px-0">
                    <LazyMotion features={domAnimation}>
                        <m.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: .2 }}>
                            <div className="w-full">

                                <Carousel
                                    autoPlay={true}
                                    stopOnHover={true}
                                    transitionTime={2}
                                    infiniteLoop={true}
                                    emulateTouch={true}
                                    showStatus={false}
                                >

                                    <div>
                                        <a href='https://novoporcelanatos468381923.mercadoshops.com.ar/' target="_blank" rel='noopener noreferrer'>
                                            <Image
                                                src="/ngaleria.webp"
                                                className="w-full rounded shadow-lg "
                                                alt="Showroom de novo porcelanatos"
                                                width={1000}
                                                height={600}
                                                priority={true}
                                            />
                                        </a>
                                    </div>

                                    <div>
                                        <a href='https://novoporcelanatos468381923.mercadoshops.com.ar/' target="_blank" rel='noopener noreferrer'>
                                            <Image
                                                src="/ngaleria2.webp"
                                                className="w-full rounded shadow-lg "
                                                alt="Showroom de novo porcelanatos"
                                                width={1000}
                                                height={600}
                                            />
                                        </a>
                                    </div>

                                    <div>
                                        <a href='https://novoporcelanatos468381923.mercadoshops.com.ar/' target="_blank" rel='noopener noreferrer'>
                                            <Image
                                                src="/ngaleria3.webp"
                                                className="w-full rounded shadow-lg "
                                                alt="Showroom de novo porcelanatos"
                                                width={1000}
                                                height={600}
                                            />
                                        </a>
                                    </div>

                                    <div>
                                        <a href='https://novoporcelanatos468381923.mercadoshops.com.ar/' target="_blank" rel='noopener noreferrer'>
                                            <Image
                                                src="/ngaleria4.webp"
                                                className="w-full rounded shadow-lg "
                                                alt="Showroom de novo porcelanatos"
                                                width={1000}
                                                height={600}
                                            />
                                        </a>
                                    </div>

                                    <div>
                                        <a href='https://novoporcelanatos468381923.mercadoshops.com.ar/' target="_blank" rel='noopener noreferrer'>
                                            <Image
                                                src="/ngaleria6.webp"
                                                className="w-full rounded shadow-lg "
                                                alt="Showroom de novo porcelanatos"
                                                width={1000}
                                                height={600}
                                            />
                                        </a>
                                    </div>

                                    <div>
                                        <a href='https://novoporcelanatos468381923.mercadoshops.com.ar/' target="_blank" rel='noopener noreferrer'>
                                            <Image
                                                src="/ngaleria7.webp"
                                                className="w-full rounded shadow-lg "
                                                alt="Showroom de novo porcelanatos"
                                                width={1000}
                                                height={600}
                                            />
                                        </a>
                                    </div>

                                </Carousel>
                                <div className="dual-btn-container w-11/12 lg:w-3/4 mx-auto lg:col-span-2 lg:grid lg:place-items-center">
  <a href="https://walink.co/baa647" target="_blank" rel="noopener noreferrer" className="dual-color-btn shine-hope-anim bgbtn w-full uppercase font-bold text-red-600 text-xl lg:text-2xl"><span className='animate-pulse hover:animate-none'>Consultar por mensaje</span></a>
</div>

                            </div>
                        </m.div>
                    </LazyMotion>
                </div>
            </div>
        </section>
    )
}

export default NuevoCarrusel