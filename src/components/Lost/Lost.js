import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { LoginWarning } from "../Main/LoginWarning";
import { LostData } from "./LostData";
import { testdata } from "./testdata";
export const Lost = () => {
  const { loggedinstatus } = useContext(AppContext);
  return (
    <html>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <>
        {loggedinstatus && (
          <div>
            <div className="p-4 justify-start flex w-1/5">
              <button className="bg-blue-500 w-full hover:bg-blue-700 rounded-lg p-2 font-bold text-white transition duration-100">
                <i className="fa fa-plus"></i>&nbsp;Add A LOST ITEM
              </button>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center w-full">
              {testdata.map((item, k) => {
                return (
                  <div key={k} className="w-3/4">
                    <LostData
                      itemName={item.itemName}
                      userEmail={item.userEmail}
                      contact={item.contact}
                      tag={item.tag}
                      imgUrl={item.imgUrl}
                      at={item.at}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {!loggedinstatus && (
          <div>
            <LoginWarning />
          </div>
        )}
      </>
    </html>
  );
};
