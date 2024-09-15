import React, { useState } from "react";
import { Link } from "react-router-dom";

// const [username, setUsername] = useState("");
// const [password, setPassword] = useState("");

// const handleLogin = () => {
//   // Handle login logic (e.g., API calls, authentication)
//   console.log("Logging in with:", username, password);
// };

export default function Login() {
  return (
    <div className="bg-my-image bg-cover bg-center h-screen">
      <div className="flex flex-col w-1/3 justify-center h-full items-center">
        <h1 className="text-2xl text-center font-bold mb-16">Login</h1>
        <input
          type="text"
          placeholder="Username"
          // value={username}
          // onChange={(e) => setUsername(e.target.value)}
          className="p-2 w-[300px] mb-6 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          className="p-2 w-[300px] mb-10 border rounded"
        />
        <Link to="/">
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
