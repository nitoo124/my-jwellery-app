'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import { BsFillBagHeartFill } from "react-icons/bs";
import Button from '../common/button';
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";



function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const Navbar = [
        { Name: 'Home', path: '/' },
        { Name: 'about', path: '/' },
        { Name: 'Shop', path: '/' },
        { Name: 'Contact', path: '/' },

    ]

    return (
        <header className=' bg-black flex justify-between max-w-screen-xl mx-auto sticky top-0 left-0 z-10 '>

            {/* logo */}
            <div className='flex  relative '>
                <Link className='flex relative ' href={'/'}><Image className='relative' src={'/images/logo.png'} alt='logo' width={100} height={100} loading='lazy' />
                    <span className=' absolute top-[30%] left-[75%] text-zinc-300 font-bold text-2xl'>itoo.</span></Link>
            </div>

            {/* navbar */}

            <nav className=' space-x-8 p-6 text-xl mt-3 hidden md:block'>

                {
                    Navbar.map(({ Name, path }) => <Link className='text-zinc-300 hover:text-zinc-400' href={path} data-aos = 'fade-right' data-aos-easing = 'ease-in'>{Name}</Link>)
                }
            </nav>

            <div className='text-white flex space-x-4 p-6'>
                <BsFillBagHeartFill className=' mt-3 cursor-pointer ' size={22} />
               
               <div className='lg:block hidden'>
               <Button text='Log In' bg='bg-[#d4d4d8] ' textcolor='text-black' />

               </div>


                 {/* mobile Menu button */}
               <div className="relative">
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 text-white "
      >
        {isOpen ? <IoMdClose size={30}/> : <IoMenuSharp size={30}/>}
      </button>

      {/* Animated Menu */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }  z-10 transition-transform duration-300 fixed inset-0 bg-black  flex justify-center items-center lg:hidden mt-[4.5rem]`}
      >
          {/*mobile  navbar */}

          <nav className=' p-6 text-xl mt-3 flex flex-col'>

{
    Navbar.map(({ Name, path }) => <Link className='text-zinc-300 hover:text-zinc-400 text-center' href={path} >{Name}</Link>)

}
  <Button text = 'Log In' bg='bg-zinc-300' textcolor='text-black '/>

</nav>
      </div>
    </div>
            </div>
      
        </header>
    )
}

export default Header