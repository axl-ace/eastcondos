import React from 'react'

const Navbar = () => {
     const navlist = [
          { id: 1, link: "About us" },
          { id: 2, link: "Property" },
          { id: 3 , link: "Agent"}
     ]
  return (
       <div className=' py-6 hidden desktop:block'>
            <nav className='flex items-center justify-between '>
                 <div><span className='font-bold text-[24px]'>Eastate</span></div>
                 <div className='flex justify-between items-center gap-6 text-[14px] font-medium'>
                      {
                           navlist.map((link) => {
                                return (
                                     <li key={link.id} className=' list-none '>{ link.link }</li>
                                )
                           })
                      }
                      <button className='bg-[#282828] text-white py-2 px-6 rounded-[50px]'>Contact us</button>
                 </div>
                 
            </nav>
     </div>
  )
}

export default Navbar