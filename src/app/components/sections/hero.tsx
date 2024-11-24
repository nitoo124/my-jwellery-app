import React from 'react'
import Image from 'next/image'
import Button from '../common/button'

function Hero() {
  return (
    <main className='max-w-screen-xl text-zinc-300 mx-auto bg-black py-10 '>
      <div className='flex lg:flex-row flex-col justify-between items-center px-10 lg:text-start text-center'>
        <section className='p-8'>
          <h1 className='text-4xl font-bold mt-5 text-shadow-lg' data-aos = 'fade-right' data-aos-duration = '1000'>Family Jwelery <br/>Collection</h1>
          <p className=' mt-3' data-aos = 'fade-right' data-aos-duration = '1300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dignissimos fugiat quas
             commodi necessitatibus quisquam explicabo cumque ipsam quaerat libero nihil rerum magni?
              Illo accusantium, iste obcaecati molestias impedit sint?</p>
              <div className='mt-4 flex justify-center lg:justify-start gap-3 lg:text-start' data-aos = 'fade-right' data-aos-duration = '1700' >
              <Button  text = 'Learn More' bg='bg-[#d4d4d8] ' textcolor='text-black'  />
              <Button  text = 'Order Now' bg='bg-[#d4d4d8] ' textcolor='text-black'  />
              </div>
        </section>
        <section className=' basis-4/5'>
                  <Image src={'/images/hero.png'} alt='stylish ring' width={500} height={500} loading='lazy' data-aos = 'fade-up'/>

        </section>
      </div>
    </main>
  )
}

export default Hero