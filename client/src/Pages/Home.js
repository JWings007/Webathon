import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Tiles from '../components/Tiles'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='font-popins px-9 py-4'>
      <Navbar/>
      <div className='relative w-full h-[60vh] overflow-hidden rounded-lg'>
        <img src="https://img.freepik.com/premium-photo/vegetables-fruits-frame-green-background-horizontal-flat-lay-copy-space_73872-4488.jpg?w=1060" alt="" className='w-full -z-1 rounded-lg'/>
        <div className='z-50 absolute top-[20%] left-[9%]'>
          <div className='flex flex-col'>
            <h1 className='font-bold text-7xl leading-4 text-white'>NO MORE</h1>
            <h1 className='font-bold text-[5.7rem] text-white'>HASSLE</h1>
          </div>
          <div>
            <p className='w-3/4 text-white'>Welcome to FarmLink, your one-stop platform for connecting farmers with reliable food supply and maintenance services.</p>
          </div>
          <button className='bg-[#F3FF90] py-3 mt-5 rounded-lg text-sm px-8'>Learn More</button>
        </div>
      </div>
      <div className='flex flex-col gap-4 w-full items-center justify-center mt-5'>
        <h1 className='bg-[#D3F78F] w-fit p-4 rounded-lg'>AgroFlow</h1>
        <p className='text-center bg-[#D3F78F] p-4 rounded-lg'>where farmers connect directly with consumers for fresh, sustainable produce. Discover locally grown crops, support farmers directly, and embrace a healthier way to eat. Explore our marketplace, connect with growers, and enjoy farm-fresh goodness delivered straight to your doorstep. Join us in cultivating a community dedicated to food security and sustainable agriculture practices.</p>
      </div>
      <div className='mt-10'>
        <h1 className='font-bold text-2xl mb-5'>Products / All catagories</h1>
        <div className='flex gap-5 rounded-xl mb-7'>
          <div className='bg-[#D3F78F] text-black px-6 rounded-xl cursor-pointer py-1'>All</div>
          <div className='px-6 rounded-xl border-black border-[1px] cursor-pointer py-1'>Vegetables</div>
          <div className='px-6 rounded-xl border-black border-[1px] cursor-pointer py-1'>Fruits</div>
          <div className='px-6 rounded-xl border-black border-[1px] cursor-pointer py-1'>Dairy</div>
        </div>
        <div className='flex flex-col gap-5 items-center'>
          <Tiles />
          <button className='bg-[#F3FF90] py-3 mt-5 rounded-lg text-sm px-8 w-fit'>View More</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home