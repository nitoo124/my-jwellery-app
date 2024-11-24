import React from 'react'
import Image from 'next/image'
import Button from '../common/button'

function Favjwelery() {
    return (
        <main className='bg-black text-zinc-300 max-w-screen-xl mx-auto  '>

            <div className='  lg:flex  lg:flex-row justify-around gap-12  items-center text-center p-12'>

                {/**************Section1**************/}

                <section className='mt-12 p-5 hidden lg:block '>

                    <Image src={'/products/fav-jwellery.png'} alt='best jwellery'  data-aos="fade-right"  width={400} height={400} loading='lazy' />



                </section>

                {/**************Section2**************/}
                <section className='basis-[50%]  text-center p-5 mt-10'>

                    <h2 className='capitalize text-shadow-lg font-bold text-4xl px-4 text-center'  data-aos="fade-up"  data-aos-delay='200'>order your favourite one!</h2>
                    <p className='mt-3'  data-aos="fade-up"  data-aos-delay='400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nemo dicta rerum doloribus
                        repellendus et consequatur, cupiditate hic voluptate veritatis nihil distinctio quis. Perferendis
                        eaque voluptate molestias nobis minima consectetur?</p>

                        <div className='mt-4' data-aos = 'fade-up'  data-aos-delay='600' >
                            <Button text='Order Now' bg='bg-zinc-300' textcolor='text-black'/>
                        </div>
                </section>

                    {/**************img for mob**************/}

                    <section className='mt-12 p-5 block lg:hidden '>

<Image className='mx-auto' src={'/products/fav-jwellery.png'} alt='best jwellery' width={400} height={400} loading='lazy' />



</section>
            </div>

        </main>
    )
}

export default Favjwelery