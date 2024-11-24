import React from 'react'
import Image from 'next/image'
import Button from '../common/button'

function Bestselling() {
  return (
    <main className=' max-w-screen-xl mx-auto bg-zinc-300 text-black py-10' >
        {/* content */}
        <div>
            <h2 className=' capitalize text-shadow-lg font-bold text-4xl px-4 text-center' >our best selling design</h2>
            <p className=' text-center mt-2 px-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, natus.</p>

        </div>

        {/* best selling products */}

      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12'>

        {/* product 1 */}
        <div className=' text-center shadow-dark px-5 py-8 cursor-pointer scale-95 hover:scale-100 duratiom-500'  data-aos="fade-left"  data-aos-delay='100' >
          <Image className='mx-auto' src={'/best-selling-products/bestselling1.jpg'} alt = 'stylish simple neck' width={300} height={300} loading='lazy'/>
          <h3 className=' mt-2 px-3 text-xl text-shadow-lg font-bold '>Beautifull Neclace</h3>
          <p className='  mt-1 px-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni autem eaque error 
           </p>
           <div className='flex justify-center gap-8  mt-4 px-5'>
            <h4 className=' text-xl font-bold mt-1'>$100</h4>
            <Button text='Order Now' bg='bg-black' textcolor='text-zinc-300'/>
           </div>

        </div>

              {/* product 2 */}
        <div className=' text-center shadow-dark px-5 py-8 cursor-pointer scale-95 hover:scale-100 duratiom-500' data-aos="fade-left"  data-aos-delay='300'>
          <Image className='mx-auto' src={'/best-selling-products/bestselling2.jpg'} alt = 'stylish simple neck' width={300} height={300} loading='lazy'/>
          <h3 className=' mt-2 px-3 text-xl text-shadow-lg font-bold '>Beautifull Neclace</h3>
          <p className='  mt-1 px-3 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni autem eaque error 
           </p>
           <div className='flex justify-around mt-4 px-2'>
            <h4 className=' text-xl font-bold mt-1'>$100</h4>
            <Button text='Order Now' bg='bg-black' textcolor='text-zinc-300'/>
           </div>
        </div>

             {/* product 3 */}
        <div className=' text-center shadow-dark px-5 py-8 cursor-pointer scale-95 hover:scale-100 duratiom-500' data-aos="fade-left" data-aos-delay='500'  >
          <Image className='mx-auto' src={'/best-selling-products/bestselling3.jpg'} alt = 'stylish simple neck' width={300} height={300} loading='lazy'/>
          <h3 className=' mt-2 px-3  text-xl text-shadow-lg font-bold '>Beautifull Neclace</h3>
          <p className='  mt-1 px-3 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni autem eaque error 
           </p>
           <div className='flex justify-around mt-4 px-2'>
            <h4 className=' text-xl font-bold mt-1'>$100</h4>
            <Button text='Order Now' bg='bg-black' textcolor='text-zinc-300'/>
           </div>
        </div>
      </div>

    </main>
  )
}

export default Bestselling