import React, { useContext, useState } from "react";
import Loader from "../loader/Loader";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../../context/AppContext";
import { TextField } from "@mui/material";

export const Signup = () => {
  let navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pwd, setpwd] = useState("");
  const [error, seterror] = useState("");
  const [nameerror, setnamerror] = useState(false);
  const [mailerror, setmailerror] = useState(false);
  const [pwderror, setpwderror] = useState(false);
  const { signup } = useContext(AppContext);
  const validated =
    name &&
    email &&
    pwd &&
    (email.trim().endsWith("vitstudent.ac.in") || email.endsWith("vit.ac.in"));
  const validatename = () => {
    name.length ? setnamerror(false) : setnamerror(true);
  };
  const validatemail = () => {
    email.trim().endsWith("vitstudent.ac.in") ||
    email.trim().endsWith("vit.ac.in")
      ? setmailerror(false)
      : setmailerror(true);
  };
  const validatepwd = () => {
    pwd.length ? setpwderror(false) : setpwderror(true);
  };

  const submit = () => {
    setloading(true);

    seterror("");
    try {
      signup();
    } catch (error) {
      seterror("There was a error. Try after some time.");
      console.log(error);
      return "";
    }

    setloading(false);
    navigate("/dashboard");
    return "";
  };

  return (
    <div
      style={{ "var(--image-url)": "../../assets/loginbg.jpg" }}
      className=" m-10  rounded-full bg-"
    >
      <br />
      <br />
      <div className="flex justify-center text-4xl text-black font-bold  ">
        Sign Up{" "}
      </div>

      {error && (
        <div className="bg-red-700 text-white font-semibold flex flex-row p-1 text-xl justify-center">
          {" "}
          {error}{" "}
        </div>
      )}

      <form className="flex flex-col gap-8 pt-12 justify-center items-center">
        <div className="">
          <div>
            <TextField
              name="Name"
              label={"Name"}
              fullWidth
              margin="dense"
              autoFocus={true}
              type={"text"}
              id="first-name"
              onBlur={validatename}
              autoComplete="given-name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          {nameerror && <div className="text-red-600">Enter a name</div>}
        </div>

        <div className="">
          <div>
            <TextField
              name="Email"
              label={"Email"}
              fullWidth
              margin="dense"
              autoFocus={true}
              type={"text"}
              id="first-name"
              onBlur={validatemail}
              autoComplete="given-name"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          {mailerror && (
            <div className="text-red-600">Enter VIT mail id only</div>
          )}
        </div>
        <div className="">
          <div>
            <TextField
              name="Password"
              label={"Password"}
              fullWidth
              margin="dense"
              autoFocus={true}
              type={"password"}
              id="first-name"
              onBlur={validatepwd}
              autoComplete="given-name"
              value={pwd}
              onChange={(e) => setpwd(e.target.value)}
            />
          </div>
          {pwderror && <div className="text-red-600">Enter the password</div>}
        </div>

        {!loading && validated && (
          <button
            className="bg-black text-white text-2xl font-bold p-3 rounded-lg hover:text-black hover:bg-white transition duration-500 border-2 border-black"
            onClick={submit}
          >
            SIGN UP
          </button>
        )}
        {loading && <Loader />}
        {!validated && !loading && (
          <button className="bg-gray-600 text-white text-2xl font-bold p-3 rounded-lg cursor-not-allowed">
            SIGN UP
          </button>
        )}
        <br />
        <br />
      </form>
    </div>
  );
};
