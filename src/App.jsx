import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./ApPages/HomePage";
import LoginPage from "./ApPages/LoginPage";

function App() {
  return (
    <div className="App ">
      {/* <div className="container-fluid">
        <div className="box purple"></div>
        <div className="box blue"></div>
        <div className="box orange"></div>
        <div className="box lightblue"></div>
      </div> */}
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/LoginPage"} element={<LoginPage />} />
        {/* <Route/>
     <Route/>
     <Route/>
     <Route/>
     <Route/>
     <Route/>
     <Route/>
     <Route/>
     <Route/> */}
      </Routes>
    </div>
  );
}

export default App;
