import React from 'react'
import Banner from '../components/home/Banner'
import About from '../components/home/About'
import Faqs from '../components/home/Faqs'
import Options from '../components/home/Options'

export default function HomePage() {
  return (
    <div className='main'>
      <Banner/>
      <About/>
      <Options/>
      <Faqs/>
    </div>
  )
}
