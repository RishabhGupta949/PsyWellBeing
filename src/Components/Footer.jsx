import React from 'react'
import Footerimg from '../assets/footer.jpg'

const Footer = () => {
  return (
    <div className="flex flex-col items-center my-4 ">
        <img src={Footerimg} alt="" className="w-10/12 rounded-xl"/>
        <h1 className="my-4 mx-4 text-sm text-black font-bold">COPYRIGHT © 2023 PSYWELLBEING - ALL RIGHTS RESERVED.</h1>
    </div>
  )
}

export default Footer