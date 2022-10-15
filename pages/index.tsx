import type { NextPage } from 'next'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import SocialMedia from '../components/SocialMedia'
import Features from '../components/Features'
import Modal from '../components/helpers/Modal'
import NuevoCarrusel from '../components/NuevoCarrusel'


const Home: NextPage = () => {
  return (
    <div className='bg-black	' >
      <Modal/>
      <Hero />
      <Features />
      {/* <Choose /> */}
      <NuevoCarrusel />
      <Categories />
      <SocialMedia />
    </div>
  )
}

export default Home
