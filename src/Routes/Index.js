import React from "react";
import Home from "../Component/Home";
import MyCard from "../Component/MyCard";
import Gallery from "../Services/Gallery";
import Careers from "../Component/Careers";
import SoftwareDevelopmanet from "../Component/SoftwareDevelopmanet";
import Objective from "../Component/Objective";


const Index = () => {
  return (
    <>
    <Home></Home>
    <SoftwareDevelopmanet></SoftwareDevelopmanet>
    <MyCard></MyCard>
    <Careers></Careers>
    <Objective></Objective>
    <Gallery></Gallery>
    </>
  );
};

export default Index;
