import React from "react";

const Info = () => {
  const studentData = {
    "name": "Pradatta Aryal",
    "age": 21,
    "major": "Bachelor In Information Management",
    "skills": [`React,Node,Express,Mongoose,SQL,Js`],
    "projects": [
      {
        "title": "E-commerce full stack",
       },
      {
        "title": "Scoialmedia full stack",
       },
      {
        "title": "Single Page Resort frontend",
       }
    ],
    "interests": ["Backend Development",  "Cloud Computing" ],
   };

  return (
    <div className=" h-screen w-full flex items-center">
    <div className="max-w-[1140px] border-2 border-black rounded-xl max-h-[600px] p-6 px-28 shadow-2xl m-auto flex justify-center ">
      <pre className="   rounded-md  overflow-hidden">
        {JSON.stringify(studentData, null, 2)}
      </pre>
    </div></div>
  );
};

export default Info;