import React from 'react'
import Bacherlor from '../assets/bach.jpg'
import Master from '../assets/mast.png'
import Mphil from '../assets/mphil.png'

const Planning = () => {
    const data = [
        {
            id: 1,
            image : Bacherlor,
            heading: "Shayama Prasad Mukherjee College, Delhi University",
            namec: "Pooja Gupta",
            qualification : "Bachelors in psychology"
        },
        {
            id: 2,
            image : Master,
            heading: "Jamia Milia Islamia University, Delhi",
            namec: "Pooja Gupta",
            qualification : "Masters in psychology"
        },
        {
            id: 3,
            image : Mphil,
            heading: "Gwalior Mansik Arogyashala, Gwalior",
            namec: "Pooja Gupta",
            qualification : "Mphil in psychology"
        }
    ]
  return (
  <>
  <div className='flex flex-col my-8 items-center md:flex-row md:justify-center md:ml-8'>
  {
    data.map(( { id, image, heading, namec, qualification}) => (
      <div className='flex flex-col items-center w-full'>
    <div key={id} className="flex justify-center w-5/6 py-4 bg-blue-200">
      <img src={image} alt="Qualification" className="h-1/2 w-5/6 rounded-xl" />
    </div>
    <div className="bg-blue-200 w-5/6 h-1/2 flex flex-col items-center py-8 mb-10">
    <p className="basicfam text-base py-2">{heading}</p>
      <div className="text-xl flex flex-col items-center py-4 font-bold">
      <h1>{namec}</h1>
      <h1>{qualification}</h1>
      </div>
    </div>
      </div>
    ))}
    </div>
  </>
  );
};

export default Planning