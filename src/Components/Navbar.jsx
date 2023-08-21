import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  const [nav,setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home"
    },
    {
      id: 2,
      link: "Contact Us"
    },
  ]

  
  return (
    <>
        <div  onClick={() => setNav(!nav)} >
       {nav ? 
       <div className="duration-300 transition-all ease-linear">
       <FaTimes size={30} className="m-4 cursor-pointer"/>
       <div className="duration-300 transition-all ease-linear">
       <ul className="flex flex-col items-center justify-center h-screen ">
         {
           links.map(({ id, link}) => (
             <li key={id} className="text-5xl my-4">
               {link}
             </li>
           ))}
       </ul>
       </div>
       </div>
        : 
        <div className="flex flex-row justify-between mx-4 my-4 duration-300 transition-all ease-in-out">
       <FaBars size={30} className="cursor-pointer"/> 
       <h1 className="text-black font-bold text-4xl cursive">PsyWellBeing</h1>
       <h1 className="text-white">1</h1>
       </div> 
       }
        </div>

        
    </>
  );
};

export default Navbar;
