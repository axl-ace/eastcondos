import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Achievements from './components/Achievements'

const Page = () => {
  return (
    <div className='w-full h-auto p-6'>
      <Navbar />
      <Hero />
      <Achievements />
      Page
    </div>
  )
}

export default Page