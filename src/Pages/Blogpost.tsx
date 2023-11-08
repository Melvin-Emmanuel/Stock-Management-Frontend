import React from "react";
import BLogCover from "../assets/portrait-adult-male-disinfecting-house_23-2148563573 1.png";
import CardImage from "../assets/cardImage1.jpeg";
import styled from "@emotion/styled";
import right from '../assets/teenyicons_right-solid.svg'
import Left from "../assets/teenyicons_left-solid.svg"

const Date = styled.div``;
export const Card = () => {
  return (
    <div className="w-[22rem] h-[30rem]  border-2 rounded-lg bg-[#D9D9D9] relative overflow-hidden">
      <img src={CardImage} className="w-full h-38% overflow-hidden " alt="" />
      <Date className="absolute top-[40%] left-5 bg-[#1239AC] h-12 w-14  flex flex-col justify-center items-center text-white">
        {" "}
        JAN <br /> 25{" "}
      </Date>
      <div className="w-full flex justify-center items-center   mt-5 gap-7">
        <div className="w-[63px] h-[63px] rounded-full">
          <img
            src={CardImage}
            className="h-full w-full object-cover overflow-hidden rounded-full"
            alt=""
          />
        </div>
        <p className="text-black  font-bold">The spark is all that matter</p>
      </div>
      <p className="w-[90%] mx-auto m-0 mt-5 text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        beatae id nesciunt?........
      </p>

      <button className="mt-5 ml-5 bg-[#1239AC] text-white">Read More</button>
    </div>
  );
};
const Blogpost = () => {
  return (
    <div className="text-gray-500">
      <div className="w-full h-[20rem] pt-8 flex">
        <img
          src={BLogCover}
          className="w-full h-full object-cover relative"
          alt=""
        />
        <p className="absolute  top-[20%] left-[50%] text-5xl  text-white ">
          BLog
        </p>
      </div>

      <div className="flex gap-8 md:flex-wrap sm:flex-wrap lg:flex-wrap w-full justify-center ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex h-44 w-[80%] mx-auto gap-4 m-0  justify-center items-center mt-10">
        {" "}
        <div className=" w-24 h-[5rem] bg-[#D9D9D9] flex justify-center items-center">
          {" "}
          <img src={Left} alt="" />
        </div>
        <div className=" w-24 h-[5rem] border-2 rounded-lg text-white text-5xl cursor-pointer bg-[#1239AC] flex justify-center items-center">
          {" "}
          1
        </div>
        <div className=" w-24 h-[5rem] rounded-lg border-2 text-black text-3xl  cursor-pointer flex justify-center items-center">
          {" "}
          2
        </div>
        <div className=" w-24 h-[5rem] rounded-lg border-2 text-black text-3xl cursor-pointer  flex justify-center items-center">
          {" "}
          3
        </div>
        <div className=" w-24 h-[5rem] rounded-lg border-2 text-black text-3xl cursor-pointer flex justify-center items-center">
          {" "}
          4
        </div>
        <div className=" w-24 h-[5rem] bg-[#D9D9D9] flex justify-center cursor-pointer items-center">
          {" "}
          <img src={right} alt="" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Blogpost;
