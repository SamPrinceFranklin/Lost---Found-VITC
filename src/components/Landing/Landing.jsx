import React, { useContext } from "react";
import lostImage from "../../lostIcon.png";
import foundImage from "../../foundIcon.png";
import { AppContext } from "../../context/AppContext";

export const Landing = () => {
  const {loggedinstatus,loginerror} = useContext(AppContext)
  return (
    <div className="w-full h-full lg:h-screen flex flex-col bg-gradient-to-tr from-green-500 to-blue-500">
           {!loggedinstatus && (
        <div className="flex flex-col ">
          <div>
            {" "}
            {loginerror && (
              <div className="text-red-700 font-bold text-xl">
                Only VIT mail id is allowed
              </div>
            )}{" "}
          </div>
          {/* <Landing /> */}
        </div>
      )}
     
     
      <div className="flex justify-center p-8">
        <p className="text-2xl font-bold text-white">
          Lost an item and are not able to find it? <br />
          Dont worry we got you
        </p>
      </div>
      <div className="flex flex-col lg:flex-row h-full justify-center p-12">
        <div className="flex justify-center items-center">
          <img
            src={lostImage}
            alt="lost item logo"
            width={"30%"}
            height={"30%"}
          />
        </div>
        <div className="flex items-center justify-center">
          <p className="font-medium text-xl text-gray-800 drop-shadow-xl">
            Post your lost items here and find them instantly with our amazing
            community. Data is secure among Vitians!
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row h-full justify-center p-12">
        <div className="flex items-center justify-center">
          <p className="font-medium text-xl text-gray-800 drop-shadow-xl">
            Post the items found and we will help to match them with their
            owners, ensuring the right person finds his item.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={foundImage}
            alt="lost item logo"
            width={"30%"}
            height={"30%"}
          />
        </div>
      </div>
    </div>
  );
};
