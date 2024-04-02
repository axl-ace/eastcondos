import React from 'react'
import Image from 'next/image'
import second from '../../public/city.jpg'

const Achievements = () => {
  return (
       <section className='my-[4rem] mx-[4rem]'>
            <div className='flex justify-between items-center'>
                 <div className='font-bold text-[70px] max-w-max'>
                      <h1> Your Trusted Real <br /> Estate Advisors</h1>
                 </div>
                 <div className=''>
                      <p>A cutting-edge real state agent that offers a seamless <br /> and immersive experience for finding your dream home <br /> in the heart of the city </p>
                 </div>
            </div>

            <div className='flex w-full items-center justify-between h-[25rem] bg-blue-600'>
                 <div className='w-[50%] h-full flex flex-col justify-between  bg-violet-300'>
                      <div className='flex h-[50%] items-center justify-between'>
                           <div className='w-[50%] flex flex-col items-center justify-center'>
                                <h1 className="font-bold text-[70px]">17k+</h1>
                                <span className='font-bold'>Satisfied Customers</span>
                           </div>
                           <div className='w-[50%] flex flex-col items-center justify-center'>
                                <h1 className="font-bold text-[70px]">25+</h1>
                                <span className='font-bold'>Years of Experience</span>
                           </div>
                      </div>
                      <div className='flex h-[50%] items-center justify-between'>
                           <div className='w-[50%] flex flex-col items-center justify-center'>
                                <h1 className="font-bold text-[70px]">150+</h1>
                                <span className='font-bold'>Award Winning</span>
                           </div>
                           <div className='w-[50%] flex flex-col items-center justify-center'>
                                <h1 className="font-bold text-[70px]">25+</h1>
                                <span className='font-bold'>Property Collections</span>
                           </div>
                      </div>
                 </div>
                 <div className='w-[50%] h-full flex'>
                      <div className='w-[50%]'>
                           <div>
                                <p>We have witnessedthe ever-evolving landscape of the real estate market and become a trusted partner by thousands of clients.</p>
                           </div>
                      </div>
                      <div className='bg-black overflow-hidden h-full w-[50%]  flex items-center justify-center'>
                           <Image src={second} width={1440} height={1080} className=' object-cover w-[100%]' alt='city' />
                      </div>
                 </div>
            </div>
     </section>
  )
}

export default Achievements