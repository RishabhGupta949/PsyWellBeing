import React from "react";
import Hero from "../assets/hero.jpeg";

const Homepage = () => {
  return (
    <div className="flex flex-col my-8 items-center md:flex-row md:mx-10 md:my-12">
      <div className="flex justify-center">
        <img src={Hero} alt="" className="h-1/2 w-5/6" />
      </div>
      <div className="bg-blue-200 w-5/6 h-1/2 flex flex-col items-center py-8 md:w-[54rem] md:py-[10.82rem] md:ml-[-67px]">
        <p className="basicfam text-sm py-2">RCI REGISTERED</p>
        <div className="text-xl flex flex-col items-center py-4 font-bold">
        <h1>POOJA GUPTA </h1>
        <h1>CLINICAL PSYCHOLOGIST</h1>
        <h1>CHILD AND ADULT</h1>
        </div>
        <button className="text-sm flex flex-col items-center my-4 bg-slate-500 p-4 hover:bg-slate-900 hover:text-white transition-all duration-300 ease-in-out">BOOK AN APPOINTMENT</button>
        <button className="text-sm flex flex-col items-center my-4 bg-slate-500 p-4  hover:bg-slate-900 hover:text-white transition-all duration-300 ease-in-out">CONTACT US</button>
      </div>
    </div>
  );
};

// RCI REGISTERED
// APRAJITA DIXIT
// CLINICAL PSYCHOLOGIST
// (CHILD & ADULT)
// BOOK AN APPOINTMENT
// CONTACT US

export default Homepage;
