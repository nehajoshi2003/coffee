import React from 'react';
import tryimg from '../../assets/images/front.png';
import about from '../../assets/images/about.png';
import { FaBagShopping, FaBook, FaBookmark, FaCartShopping, FaMugHot, FaPhone } from 'react-icons/fa6';
import Cards from '../Hero/Cards'


const Hero = () => {
  return (
    <div>
<div className="bg-black h-[920px] md:h-screen bg-cover bg-center flex items-center justify-center overflow-hidden">

      <div className="bg-black md:bg-black md:bg-cover bg-no-repeat absolute inset-0 z-10 opacity-25" >
      <img
        src="https://images.alphacoders.com/133/1339864.png"
        alt="Coffee Shop Background"
        className="w-full h-full object-cover absolute inset-0 z-10"
      /> </div>
      <div className="text-white z-20 text-center items-center">
        <div className='text-white text-center z-30 px-4 py-8  md:px-20 '>
        <h1 className='text-3xl md:text-8xl font-dancingScript text-bold'>Coffeee Cafe</h1>
        <p className='font-poppins text-center font-medium md:text-4xl mt-[20px]'>Just brewed happiness in a cup!
</p> 
<button className='items-center	hover:scale-105 duration-300 text-center  p-[10px] px-[10px] mt-[10px] md:mt-[30px] md:w-[150px] font-bold text-xl border-2 border-white hover:bg-[#be9572]  text-white  rounded-lg'><a href="" className='flex'>Order now<FaMugHot className='ml-[6px] mt-[3px]'/></a></button>
      </div>
      </div>
      
    </div>
<div className='container mr-[0px] ml-[0px] bg-black flex flex-wrap bg-no-repeat  h-[680px] md:h-1/2'>
  <div className=' p-[30px] md:p-[10px]'>
<div className='about flex flex-col md:flex-row'>
<div className="content-container flex-grow md:w-1/2 px-4 py-8 md:py-12 text-white">
<h3 className='mt-[10px] text-center font-dancingScript text-4xl text-bold text-[#be9572] md:text-6xl mb-[10px]'>About</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sint adipisci. Dolore assumenda, illo quasi expedita quae sit recusandae iste.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat odio dicta tenetur amet modi commodi aut suscipit nisi praesentium blanditiis.</p>
        <div className='text-white text-center z-30 px-4 py-3  md:px-20 md:mr-[40px]'>
 <button className='items-center 	hover:scale-105 duration-300 text-center  font-bold text-xl border-2 border-white hover:bg-[#be9572]  text-white  rounded-lg p-[10px] px-[30px] mt-[10px] md:mt-[30px] md:w-[200px] font-bold text-xl md:text-xl text-white opacity-85 rounded-lg'><a href="" className='flex'>Contact Us<FaPhone className='ml-[6px] mt-[3px]'/></a></button>
</div>
      </div>
<div className="image-container w-full md:w-[500px] md:mt-[50px] sm:pl-[50px]">
        <img src={about} className='mx-auto animate-spin-slow'/>
      </div>
</div>
</div>
</div>
<div className=' h-[920px] md:h-screen bg-cover bg-center flex items-center justify-center overflow-hidden'>
  <div className=' p-[30px] md:p-[10px]'>
<div className='about flex flex-col md:flex-row'>
<div className="content-container flex-grow md:w-1/2 px-4 py-8 md:py-12 text-white">
<h3 className='mt-[10px] text-center font-dancingScript text-4xl text-bold text-[#be9572] md:text-6xl mb-[10px]'>About</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sint adipisci. Dolore assumenda, illo quasi expedita quae sit recusandae iste.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat odio dicta tenetur amet modi commodi aut suscipit nisi praesentium blanditiis.</p>
        <div className='text-white text-center z-30 px-4 py-3  md:px-20 md:mr-[40px]'>
 <button className='items-center 	hover:scale-105 duration-300 text-center  font-bold text-xl border-2 border-white hover:bg-[#be9572]  text-white  rounded-lg p-[10px] px-[30px] mt-[10px] md:mt-[30px] md:w-[200px] font-bold text-xl md:text-xl text-white opacity-85 rounded-lg'><a href="" className='flex'>Contact Us<FaPhone className='ml-[6px] mt-[3px]'/></a></button>
</div>
      </div>
<div className="image-container w-full md:w-[500px] md:mt-[50px] sm:pl-[50px]">
        <img src={about} className='mx-auto animate-spin-slow'/>
      </div>
</div>
</div>
</div>
</div>
  )
}

export default Hero