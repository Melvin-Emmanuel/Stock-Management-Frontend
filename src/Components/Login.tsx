import React from 'react'
import { MdCancel } from "react-icons/md"
import { RiLockPasswordLine } from "react-icons/ri"
import { BsPersonFill } from "react-icons/bs"
import {useSelector,useDispatch} from "react-redux"
import { ChangeLogin } from '../Services/Reducers'

const Login = () => {
    const dispatch=useDispatch()
  return (
    <div className="h-screen w-full fixed  top-0 left-0 right-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="h-[50%] w-[40%] bg-white rounded-lg overflow-hidden">
        <div className="h-[20%] w-full bg-sky-500 flex items-center justify-between gap-5">
          <p className="text-2xl font-semibold ml-5 ">Login to Your Account</p>
                  <p onClick={() => {
                      dispatch(ChangeLogin())
          }} className="text-3xl mr-5 cursor-pointer">
            {" "}
            <MdCancel />
          </p>
        </div>
        <div className="h-[50px] w-[90%] mx-auto flex  overflow-hidden rounded-md items-center border border-solid border-opacity-20 border-black mt-5 ">
          <div className="text-2xl ml-5 text-[#495057]">
            <RiLockPasswordLine />{" "}
          </div>
          <input
            className="h-[100%] w-[80%] outline-none bg-inherit  mt-3 mx-auto pl-3 mb-3 border-none       text-black"
            placeholder="Enter Email"
            type="text" 
          />
        </div>
        <div className="h-[50px] w-[90%] mx-auto flex  overflow-hidden rounded-md items-center border border-solid border-opacity-20 border-black mt-5 ">
          <div className="text-2xl ml-5 text-[#495057]">
            <BsPersonFill />{" "}
          </div>
          <input
            className="h-[100%] w-[80%] outline-none bg-inherit  mt-3 mx-auto pl-3 mb-3 border-none focus:border-none      text-black"
            placeholder="Enter Password"
            type="text"
          />
        </div>
        <h1 className="text-black text-right mr-6 mt-3 cursor-pointer">
          Forgotten Password?
        </h1>

        <div className='flex h-[50px] w-[100%] justify-center '>
          {" "}
          <button className="h-[100%] bg-sky-500 text-xl mt-5  w-[90%]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login