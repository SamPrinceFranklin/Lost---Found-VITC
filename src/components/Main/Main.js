import React from "react";
import { Dashboard } from "../Dasboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import { Login } from "../Authentication/Login";
import { Signup } from "../Authentication/Signup";
import { Lost } from "../Lost/Lost";
import { Founds } from "../Found/Founds";
import { Landing } from "../Landing/Landing";

export const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/home" element={<Dashboard />} />
      <Route exact path="/explore" element={<Landing />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/lost" element={<Lost />} />
      <Route exact path="/found" element={<Founds />} />
    </Routes>
  );
};
