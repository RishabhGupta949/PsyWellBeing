import React from "react";

const Counselling = () => {
  const para = [
    {
      id: 1,
      para: " The duration of Counseling and Psychotherapy sessions are of 45-50 minutes each.",
    },
    {
      id: 2,
      para: " I am currently working online and offline. You may reach out to me for professional help via telephone which may go unanswered more often than not while I am at work. I would humbly request a Whatsapp text to seek an appointment with a time preference if any and I will get back to you with an available slot by the end of the day.",
    },
    {
      id: 3,
      para: " I sincerely request you to not expect an instant response for an appointment as my regular work sessions with clients along with cross border clients schedule does not allow me that liberty without referring to my calendar.",
    },
    {
      id: 4,
      para: "Hope I would have your cooperation in giving the best services to you!",
    },
  ];
  return (
    <>
     <h1 className="text-3xl text-center"> Counselling Procedure </h1>
    {
        para.map(({ id, para}) => (
      <div key={id} className="parafam">
        <div className="my-4 text-lg">
          <p className="my-4 mx-2 p-1 bg-blue-400 text-white py-4 px-4 rounded-xl">
            {para}
          </p>
        </div>
      </div>
        ))};
    </>
  );
};

export default Counselling;
