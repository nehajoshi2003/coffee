import React from 'react'

const Order = () => {
  return (
    <div>
                       <ul className='hidden sm:flex gap-5 '>
                <li>
          <Link to="/Hero" className="inline-block  text-3xl font-semibold text-[#a12e32] py-7  hover:text-[#411111]">Home</Link>
        </li>
                    <li>
          <Link to="/Menu" className="inline-block  text-3xl font-semibold text-[#a12e32] py-7  hover:text-[#411111]">Menu</Link>
        </li>
                    <li><a href='#' className='inline-block  text-3xl font-semibold text-[#a12e32] py-7 hover:text-[#411111]'>Contact</a></li>
                    <li> <a href='#' className='inline-block font-poppins text-7xl font-semibold text-[#a12e32] py-8 hover:text-[#411111] hover:scale-105 duration-300'><FaCartShopping className="text-3xl drop-shadow-sm text-[#411111]] cursor-pointer" /></a></li>
                  </ul>
    </div>
  )
}

export default Order