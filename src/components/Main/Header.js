import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const Header = () => {
  const { signInWithGoogle, loginerror, loggedinstatus } =
    useContext(AppContext);

  return (
    <div className="flex flex-row justify-between p-4 bg-blue-200">
      <div className="text-black font-bold text-3xl">LOGO</div>
      <div className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
        Lost {"&"} Found
      </div>
      {/* Login/Logout button */}
      <div>
        {loggedinstatus ? (
          <button className="transition duration-500 bg-black p-2 rounded-md text-white font-semibold hover:text-black hover:bg-white border-2 border-black">
            Logout
          </button>
        ) : (
          <button
            className="transition duration-500 bg-black p-2 rounded-md text-white font-semibold hover:text-black hover:bg-white border-2 border-black"
            onClick={signInWithGoogle}
          >
            Sign in with google
          </button>
        )}
      </div>
    </div>
  );
};
