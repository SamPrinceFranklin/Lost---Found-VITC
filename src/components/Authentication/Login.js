import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import Loader from "../loader/Loader";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
export const Login = () => {
  const [email, setemail] = useState("");
  const [pwd, setpwd] = useState("");
  let navigate = useNavigate();
  const { login } = useContext(AppContext);
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(false);
  const [mailerror, setmailerror] = useState(false);
  const [pwderror, setpwderror] = useState(false);

  const validated =
    email &&
    pwd &&
    (email.trim().endsWith("vitstudent.ac.in") || email.endsWith("vit.ac.in"));
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
      login();
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
    <div className=" m-10  rounded-full bg-">
      <br />
      <br />
      <div className="flex justify-center text-4xl text-black font-bold  ">
        LOGIN
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
            LOGIN
          </button>
        )}
        {loading && <Loader />}
        {!validated && !loading && (
          <button className="bg-gray-600 text-white text-2xl font-bold p-3 rounded-lg cursor-not-allowed">
            LOGIN
          </button>
        )}
        <br />
        <br />
      </form>
    </div>
  );
};
