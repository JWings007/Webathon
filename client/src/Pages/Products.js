import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

function Products() {
    const navigate = useNavigate();
  return (
    <div className='font-popins px-9 py-4'>
        <Navbar />
        <div>
            <h1 className='font-bold text-4xl mb-5'>Vegetable / Onion</h1>
            <div className='flex items-start h-[50vh] gap-20'>
                <div className='h-full bg-white shadow-xl rounded-xl flex items-center justify-center px-32'>
                    <img src="https://5.imimg.com/data5/SELLER/Default/2022/4/VP/VE/EO/18118948/60mm-red-onion.jpg" alt="" className='min-w-52'/>
                </div>
                <div>
                    <h1 className='font-bold text-3xl'>Indian Onion</h1>
                    <p>(Vegetable)</p>
                    <p className='mt-5'>Onions, prized for their pungent flavor and aroma, are essential in cooking, adding depth to a variety of dishes with their distinct taste and versatility. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas debitis ullam accusantium eius est, sint esse odio repudiandae nostrum cumque.</p>
                    <p className='mt-4'>1 Kg</p>
                    <p className='font-bold text-2xl'>60.0 <sup>₹</sup></p>
                    <div className='flex gap-6 mt-10'>
                    <button className='bg-[#EDEDED] py-3 mt-5 rounded-lg text-sm px-8 w-fit'>Add to cart</button>
                    <button className='bg-[#F3FF90] py-3 mt-5 rounded-lg text-sm px-8 w-fit'>Buy now</button>
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <h1 className='font-bold text-xl mb-5'>Farmer Details</h1>
                <div className='flex justify-between '>
                    <div className='w-3/4'>
                        <h1 className='font-semibold text-xl ' onClick={() => navigate('/farmer/raghu')}>Raghu M</h1>
                        <p className='mb-5'>I am a dedicated farmer with a passion for cultivating the land and nurturing crops. With years of hands-on experience, I prioritize sustainable farming practices and innovation to ensure high-quality yields. My commitment to agriculture stems from a deep respect for nature and a desire to contribute to food security and community well-being.</p>
                        <p><span className='font-bold'>Location</span>: Kadaluru, Maddur Taluk, Mandya Dist - 571433</p>
                        <p><span className='font-bold'>Rating</span>: 3.5</p>
                    </div>
                    <div className='flex flex-col items-center gap-5 shadow-2xl w-1/4 p-10 rounded-xl'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4gKSA4wTYk8c2mE0CMgn5yvIk3dCOClZYSg&s" alt="" className='w-14'/>
                        <p>Verified by AgroFlow</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Products