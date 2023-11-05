import React,{useState} from 'react'
import styled from "@emotion/styled"
import { GiPadlock } from "react-icons/gi";
import {useDispatch} from "react-redux"
import { ChangeLogin, ChangeModal } from '../../Services/Reducers';

const Container=styled.div``

const Header = () => {
     const dispatch = useDispatch();
    return (
      
 
      <Container className='h-[100px] w-full flex justify-around items-center '>
          

          <h1 className='text-2xl '>Stock Keeper</h1>
          <div className='h-[100%] w-[200px] flex gap-[20px] items-center'>
                <button className='bg-transparent outline-none hover:bg-yellow-300 cursor-pointer rounded-sm text-white' onClick={() => {
                    dispatch(ChangeModal())
              }}>Register</button>
                <button onClick={() => {
                    dispatch(ChangeLogin())
              }} className=' flex items-center justify-between gap-[10px] rounded-sm text-white bg-sky-500'> <GiPadlock/>    Login</button>

          </div>
          

          
      </Container>
      
      
      
      
  )
}

export default Header