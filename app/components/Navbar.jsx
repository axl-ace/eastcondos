import React from 'react'

const Navbar = () => {
     const navlist = [
          { id: 1, link: "About us" },
          { id: 2, link: "Property" },
          { id: 3 , link: "Agent"}
     ]
  return (
       <div className='mb-6'>
            <nav className='flex items-center justify-between'>
                 <div><span className='font-black text-[24px]'>Eastate</span></div>
                 <div className='flex justify-between items-center gap-6 text-[15px]'>
                      {
                           navlist.map((link) => {
                                return (
                                     <li key={link.id} className=' list-none '>{ link.link }</li>
                                )
                           })
                      }
                      <button className='bg-black text-white py-2 px-6 rounded-[50px]'>Contact us</button>
                 </div>
                 
            </nav>
     </div>
  )
}

export default Navbar