import React from 'react'
import BLogCover from "../assets/portrait-adult-male-disinfecting-house_23-2148563573 1.png"

const Contact = () => {
  return (
    <div className='text-black'>
      <div className="w-full h-[20rem] pt-8 flex">
        <img
          src={BLogCover}
          className="w-full h-full object-cover relative"
          alt=""
        />
        <p className="absolute  top-[20%] left-[50%] text-5xl  text-white ">
          Contact Us
        </p>
      </div>

      <div className="w-[90%] mx-auto m-0 p-4 flex justify-around md:lg:sm:flex-wrap">
              <div className="w-[429px] h-[600px] rounded-lg bg-[#1239AC]"></div>
              <div className='h-[600px] w-[500px] shadow-md'></div>
              
          </div>
          <br />
          <br />
          <br />
          <br />
    </div>
  );
}

export default Contact