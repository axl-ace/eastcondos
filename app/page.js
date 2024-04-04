import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Achievements from './components/Achievements'
import Discover from './components/Discover'
import International from './components/International'
import Latest from './components/Latest'

const Page = () => {
  return (
    <div className='w-full h-auto px-6'>
      <Navbar />
      <Hero />
      <Achievements />
      <Discover />
      <International />
      <Latest />
    </div>
  )
}

export default Page