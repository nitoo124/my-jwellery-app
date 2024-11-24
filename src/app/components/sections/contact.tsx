import React from 'react'
import Button from '../common/button'
import Aos from  'aos'

function Contact() {
  return (
   <main className='max-w-screen-xl mx-auto bg-zinc-300 p-12' >
    <div  data-aos="fade-right">

    <h2 className='capitalize text-shadow-lg font-bold text-4xl px-4 text-center mt-5'>Contact Us</h2>

    <form action="" className='max-w-screen-md mx-auto mt-5'>
        <div className='mb-4'>
            <label className='block text-black text-lg font-semibold ' htmlFor="">Name:</label>
            <input className=' text-zinc-300 w-full px-3 py-2 border rounded-lg bg-black focus:border-black' required placeholder='Enter Name?' type="text" />
        </div>
        <div className='mb-4'>
            <label className=' block text-black text-lg font-semibold ' htmlFor="">Email:</label>
            <input className=' text-zinc-300 w-full px-3 py-2 border rounded-lg bg-black focus:border-black' required placeholder='Enter Email?' type="email" />
        </div>
        <div className='mb-4'>
            <label className=' block text-black text-lg font-semibold m' htmlFor="">Message:</label>
            <textarea rows={4}  className=' text-zinc-300 w-full px-3 py-2 border rounded-lg bg-black focus:border-black' required placeholder='Write Message?' ></textarea>
        </div>
    </form>

      <div className='text-center'>
      <Button text='Submit' bg='bg-black' textcolor='text-zinc-300'/>

      </div>
      </div>
   </main>
  )
}

export default Contact