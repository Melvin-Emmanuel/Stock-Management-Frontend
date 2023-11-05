import React, { useState } from 'react'
import { useDispatch ,useSelector} from "react-redux"


import Header from './Commons/Header'
import pic from "../assets/New_entries-amico-removebg-preview.png"
import Login from '../Components/Login'
import Signup from '../Components/Signup'


const Homepage = () => {
  const ismodal = useSelector(state => state.modal)
  const islogin = useSelector((state) => state.LoginModal);

 

  return (
    <div className="h-screen flex flex-col w-full bg-[#050b68] justify-center gap-[20px]">
      <Header />
      {
        islogin? (<Login/>):null
   }
      {
        ismodal? (<Signup/>):null
      }


      <div className="flex-1 overflow-y-clip pt-1 mt-[80px] ml-auto flex w-[90%]">


        <div className='h-[90%] w-[50%] flex flex-col gap-8'>
          
          <h1 className='text-4xl w-[50%] font-extrabold'>Inventory & Stock Management solution</h1>
          <p className='text-2xl w-[70%]'>inventory system to control and manage products in the warehouse in real time and integrated to make it easier to manage your business</p>
          <div className='p-1 w-[150px] border border-l-white cursor-pointer hover:bg-slate-600 hover'>1 Month Free Trial</div>
          <div className='w-[400px] h-[50px] flex gap-[20px]'
          
          >

            <div className='p-1 '>
              <p className='text-2xl font-semibold'>500+</p>
              <p>Brand ownerss</p>

            </div>
            <div className='p-1 '>
              <p className='text-2xl font-semibold'>30k+</p>
              <p>Brand owners</p>

            </div>
            <div className='p-1  text-center'>
              <p className='text-2xl font-semibold'>14K+</p>
              <p>Brand owners</p>

            </div>



          </div>
</div>
        <div className='h-[80%] w-[45%] '>
          <img src={pic} alt="" />
          


</div>



      </div>
    </div>
  );
}

export default Homepage