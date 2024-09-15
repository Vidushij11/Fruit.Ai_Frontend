import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import FruitCard from "../components/FruitCard";

export default function Chat() {

  return (
    <div className="bg-[#E2ECEF] w-full h-screen flex">
      <div className="w-1/4 h-full border-r border-[#A6A6A6] hidden md:inline-block"></div>
      <div className="w-full">
        <div className="h-full flex flex-col justify-end p-5 gap-4 items-end w-full">
          <div className="flex flex-col justify-end p-5 gap-4 items-end w-full">
            <FruitCard image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCrnqmz2Sk9fOUssBuaP02dtvIKaPbGSwOAA&s'} singlePrice={5} name={'orange'}/>
            <FruitCard image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ldxcNoF34BRrO8zaBM7S4mcjRIXV3VF0gw&s'} singlePrice={16} name={'Kiwi'}/>
          </div>
          <div className="flex w-full gap-2">
            <input
              placeholder="Ask whatever you want to?"
              className="md:h-16 h-10 w-full bg-white border-black flex outline-none rounded-md p-2"
              ></input>
            <button className="md:h-16 md:w-16 h-10 w-10 bg-[#C571F8] rounded-lg flex items-center justify-center hover:bg-[#d596fd] md:text-lg text-sm">
              <FaLocationArrow className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
