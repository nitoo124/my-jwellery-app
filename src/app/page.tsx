'use client'
import React from 'react'
import Hero from './components/sections/hero'
import Explore from './components/sections/explore'
import Favjwellery from './components/sections/fav-jwellery'
import Bestselling from './components/sections/bestselling'
import Clientreviews from './components/sections/clientreviews'
import Contact from './components/sections/contact'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react' 


function Page() {
  useEffect(()=>{
    AOS.init({
      duration : 1000,
      easing : 'ease-in-out',
      once : true,
      delay : 50,
      
      
    });


  }, [])

  return (
  <main>
    <Hero/>
    <Explore/>
    <Favjwellery/>
    <Bestselling/>
    <Clientreviews/>
    <Contact/>

  </main>  )
}

export default Page