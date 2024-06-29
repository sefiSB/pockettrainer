import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import NewPlan from "./Components/NewPlan/NewPlan";
import MyPlans from "./Components/MyPlans/MyPlans";
import "./App.css";
import {  Route, Routes } from "react-router-dom";

function App() {
  const [activeTab, setActiveTab] = useState("home")
  return (
    <>
    <Navbar active={activeTab} setActive={setActiveTab}/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/new" element={<NewPlan/>}/>
        <Route exact path="/my" element={<MyPlans/>}/>
      </Routes>
    </>
  );
}

export default App;
