import React from "react";

const Skill = () => {
  const studentData = {
    
    "skills": 
    [
      {
        "Backend":".Net, Node, Django, Nest js",
        "Frontend":"React, Tailwind, TS, Next JS",
        "deploy":"Git, Gitlab, Genkins, Docker, AWS"
        
      }
    ],
    
    "interests": ["Devops", "Backend Development", "System Architecture"],
  };

  return (
 <div
      className="w-full h-screen max-w-[1140px] m-auto flex flex-col items-center justify-center  p-4"
      id="skill"
    >
      <div className="  flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold">Skills</h2>
        <p className="text-xl font-medium">My technical level</p>
      </div>

      <div className="max-w-[1140px]   w-full lg:w-auto text-xs md:text-base border-2 border-black rounded-xl p-6 lg:px-28 shadow-2xl mt-4">
        <pre className="rounded-md font-semibold overflow-hidden">
          {JSON.stringify(studentData, null, 2)}
        </pre>
      </div>
    </div>

  );
};

export default Skill;
