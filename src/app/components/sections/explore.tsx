import { ALL } from 'dns'
import Image from 'next/image'
import React from 'react'
import Button from '../common/button'

function Explore() {
    return (
        <main className='max-w-screen-xl mx-auto bg-zinc-300 place-items-center'>

            <section className='pt-10 '>
                <h2 className=' capitalize text-shadow-lg font-bold text-4xl px-4 text-center' >explore our collecton</h2>
                <p className='p-4 text-center ' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero est, pariaturerror ipsam veritatis<br /> nostrum minus quod eius, natus enim earum consequatur
                    Fquidem sit nihil doloremque. <br />Nisi modi magni porro.</p>
            </section>

            {/* collections */}
            <section className=' px-10 grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-8 py-12  '>

                {/* collection1 */}
                <div className=" bg-black text-zinc-300  shadow-dark rounded-xl p-4 cursor-pointer scale-95 hover:scale-100 duratiom-500 text-center" data-aos = 'fade-left'  data-aos-delay='200'>
                    <h2 className='mt-3 text-2xl font-bold text-shadow-lg'>Stylish Necklace</h2>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ratione.</p>
                    <Image className='mt-4 mx-auto ' src={'/Products/collection1.png'} alt='stylish bracelate' width={300} height={300} loading='lazy' />
                    <div className='my-3 text-center'>
                        <Button text='Explore Now' bg='bg-zinc-300' textcolor='text-black ' />
                    </div>
                </div>


                {/* collection2 */}
                <div className=" bg-black text-zinc-300 shadow-dark  rounded-xl p-4 cursor-pointer scale-95 hover:scale-100 duratiom-500 text-center" data-aos = 'fade-left'  data-aos-delay='400'>
                    <h2 className='mt-3 text-2xl font-bold text-shadow-lg'>Stylish Necklace </h2>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, fugit. </p>

                    <Image className='mt-4 mx-auto' src={'/Products/collection2.png'} alt='stylish bracelate' width={300} height={300} loading='lazy' />
                    <div className='my-3 text-center'>
                        <Button text='Explore Now' bg='bg-zinc-300' textcolor='text-black' />
                    </div>
                </div>


                {/* collection3 */}
                <div className=" bg-black text-zinc-300  shadow-dark  rounded-xl p-4 cursor-pointer  scale-95 hover:scale-100 duratiom-500 text-center" data-aos = 'fade-left'  data-aos-delay='600'>
                    <h2 className='mt-3 text-2xl font-bold text-shadow-lg'>Stylish Bangles</h2>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quidem.</p>
                    <Image className='mt-4 mx-auto' src={'/Products/collection3.png'} alt='stylish bracelate' width={300} height={300} loading='lazy' />
                    <div className='my-3 text-center'>
                        <Button text='Explore Now' bg='bg-zinc-300' textcolor='text-black ' />
                    </div>
                </div>

            </section>
        </main>

    )
}

export default Explore