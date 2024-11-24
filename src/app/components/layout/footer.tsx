import Link from 'next/link'
import React from 'react'
import { FaFacebook , FaLinkedin , FaInstagram } from "react-icons/fa";


function Footer() {
    return (
        <div className=' bg-black max-w-screen-xl mx-auto text-zinc-300 py-14'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center mx-12' data-aos="fade-left" data-aos-delay='100'>
                <div >
                    <h3 className=' md:text-start mt-3 text-xl font-bold text-shadow-lg' data-aos="fade-right" data-aos-delay='200'>About Us</h3>
                    <p className='text-sm md:text-start mt-3' data-aos="fade-right" data-aos-delay='400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Fugiat quasi dolorum neque, minima officia fugit.</p>
                </div>
                <div>
                <h3 className='mt-3 text-xl font-bold text-shadow-lg'>Quick Links</h3>

                <ul className='text-sm mt-3'>
                    <Link href={'/'}><li className='hover:text-zinc-400'>Home</li></Link>
                    <Link href={'/'}><li className='hover:text-zinc-400'>About</li></Link>
                    <Link href={'/'}><li className='hover:text-zinc-400'>Shop</li></Link>
                    <Link href={'/'}><li className='hover:text-zinc-400'>Contact</li></Link>
                </ul>

                </div>
                <div>
                <h3 className='mt-3 text-xl font-bold text-shadow-lg'>Follow Us</h3>

                <div className=' flex justify-center gap-5 text-xl mt-4'>
                <FaFacebook className='hover:text-zinc-400' />
                <FaLinkedin className='hover:text-zinc-400' />
                <FaInstagram className='hover:text-zinc-400' />

                </div>


                </div>
            </div>

            <hr className=' text-zinc-300 mt-5' />
            <p className=' mt-2 text-center text-sm'>©Copyright Designed By Nitoo Kumari</p>

        </div>
    )
}

export default Footer