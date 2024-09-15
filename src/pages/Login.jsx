import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="bg-my-image bg-cover bg-center h-screen flex justify-center md:justify-start items-center ">
      <div className="flex flex-col justify-center items-center w-fit rounded-lg bg-white md:bg-transparent px-10 py-6">
        <h1 className="text-2xl text-center font-bold mb-16 ">Login</h1>
        <input
          type="text"
          placeholder="Username"
          // value={username}
          // onChange={(e) => setUsername(e.target.value)}
          className="p-2 md:w-[300px]  mb-6 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          className="p-2 md:w-[300px] mb-10 border rounded"
        />
        <Link to="/home">
          {" "}
          <button
            // onClick={handleLogin}
            className="bg-[#C571F8] text-white px-4 py-2 rounded hover:bg-[#d796ff]"
          >
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}
