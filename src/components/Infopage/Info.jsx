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
    <div className="w-full flex items-center justify-center">
      <div className="max-w-[1140px] w-full lg:w-auto border-2 border-black rounded-xl p-6 lg:px-28 shadow-2xl m-4 lg:m-auto text-base lg:text-lg">
        <pre className="rounded-md overflow-hidden">
          {JSON.stringify(studentData, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Info;
