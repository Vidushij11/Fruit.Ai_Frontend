import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#E0BCF3] to-[#C2F0FF] flex items-center justify-center">
      <div className="grid md:grid-cols-3 gap-5 grid-cols-2">
        <Link to={"/chat"}>
          <div className="bg-gradient-to-t from-[#ffdbaa] to-[#fee8c6]  rounded-xl shadow-md md:h-[200px] md:w-[200px] h-32 w-32 md:text-7xl text-4xl flex items-center justify-center text-[#C84AD3] hover:shadow-xl transition-all">
            <p className="font-semibold ">Chat</p>
          </div>
        </Link>
        <Link to={'/translate'}>
          <div className="bg-gradient-to-t from-[#AAFAFF] to-[#E1FBFF]  rounded-xl shadow-md md:h-[200px] md:w-[200px] h-32 w-32 text-7xl flex items-center justify-center text-[#C84AD3] hover:shadow-xl transition-all">
            <p className="font-semibold ">
              <img src="/src/images/g_translate.png" />
            </p>
          </div>
        </Link>
        <div className="bg-gradient-to-t from-[#FFAAF6] to-[#FFE1FE]  rounded-xl shadow-md md:h-[200px] md:w-[200px] h-32 w-32 md:text-5xl text-3xl flex items-center justify-center text-[#C84AD3] hover:shadow-xl transition-all">
          <p className="font-semibold ">About</p>
        </div>
        <div className="bg-gradient-to-t from-[#AAFFB2] to-[#E1FFE4]  rounded-xl shadow-md md:h-[200px] md:w-[200px] h-32 w-32 text-7xl flex items-center justify-center text-[#C84AD3] hover:shadow-xl transition-all blur-sm">
          <p className="font-semibold "></p>
        </div>
        <Link to={'/faq'}>
          <div className="bg-gradient-to-t from-[#E3BFFF] to-[#D299FF]  rounded-xl shadow-md md:h-[200px] md:w-[200px] h-32 w-32 md:text-7xl text-4xl flex items-center justify-center text-[#3B5998] hover:shadow-xl transition-all">
            <p className="font-semibold ">FAQs</p>
          </div>
        </Link>
        <div className="bg-gradient-to-t from-[#E9FFAA] to-[#F7FFE1]  rounded-xl shadow-md md:h-[200px] md:w-[200px] h-32 w-32 text-7xl flex items-center justify-center text-[#C84AD3] hover:shadow-xl transition-all blur-sm">
          <p className="font-semibold "></p>
        </div>
      </div>
    </div>
  );
}
