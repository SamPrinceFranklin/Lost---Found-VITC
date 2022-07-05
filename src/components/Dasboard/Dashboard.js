import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { Landing } from "../Landing/Landing";
export const Dashboard = () => {
  const { loggedinstatus, loginerror, userdata } = useContext(AppContext);
  let navigate = useNavigate();

  return (
    <>
      {loggedinstatus && (
        <div className="flex flex-col ">
          <div>
            {" "}
            {userdata && (
              <div className="text-green-700 font-bold text-xl">
                {" "}
                {userdata.email}{" "}
              </div>
            )}{" "}
          </div>
          {/* <Landing /> */}
        </div>
      )}

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
          <Landing />
        </div>
      )}
    </>
  );
};
