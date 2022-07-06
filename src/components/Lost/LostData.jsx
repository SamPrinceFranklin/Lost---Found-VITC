import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

export const LostData = (props) => {
  const { userdata } = useContext(AppContext);
  const [expanded, setexpanded] = useState(false);
  return (
    <html>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="bg-purple-200 p-4 flex flex-col w-full rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
          <div className="flex items-center justify-center">
            <img src={props.imgUrl} className="max-w-sm h-auto" />
          </div>
          <div className="gap-4 flex flex-col items-center gap-y-12 justify-center">
            <div className="text-3xl font-bold">{props.itemName}</div>
            <div className="text-xl font-medium">
              Posted by{" "}
              {props.userEmail === userdata.email ? "YOU" : props.userEmail}
            </div>
            <div className="text-xl font-medium">Lost at {props.at} </div>
            <div>
              {!expanded && (
                <button
                  onClick={() => setexpanded(true)}
                  className="w-full p-2 bg-blue-600 hover:bg-blue-700 font-semibold text-white font-mono rounded-lg"
                >
                  <i className="fa fa-info-circle"></i>&nbsp; KNOW MORE
                </button>
              )}
            </div>
          </div>
        </div>
        {expanded && (
          <div className="p-8 w-full">
            <div className="flex flex-col gap-4">
              <div className="text-xl text-center font-mono  ">
                {" "}
                {props.tag}{" "}
              </div>
              <div className="text-xl text-center mt-3 ">
                Contact info :- {props.contact}{" "}
              </div>
              <div>
                {props.userEmail === userdata.email ? (
                  <button className="rounded-lg max-w-sm h-auto m-3 bg-red-500 hover:bg-red-700 font-bold p-2 text-white text-xl ">
                    REMOVE
                  </button>
                ) : (
                  <button className="hover:bg-white hover:text-black transition duration-300 border-2 border-black rounded-lg max-w-sm h-auto m-3 font-bold bg-black p-2 text-white text-xl ">
                    REPORT FOUND
                  </button>
                )}
              </div>
            </div>

            <div>
              <button
                onClick={() => setexpanded(false)}
                className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-lg text-2xl"
              >
                <i className="fa fa-toggle-up"></i>&nbsp;Hide
              </button>
            </div>
          </div>
        )}
      </div>
    </html>
  );
};
