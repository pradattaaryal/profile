import React from "react";

const Info = () => {
  const studentData = {
    "name": "Pradatta Aryal",
    "age": 21,
    "major": "Bachelor of Information Management",
    "skills": [
      ".NET (ASP.NET, C#)", 
      "Python", 
      "Node.js", 
      "Express.js", 
      "React", 
      "Tailwind CSS", 
      "MySQL"
    ],
    "projects": [
  {
  "title": ".NET LMS",
  "Tech":"clear architecture,mediatr,cqrs,Sql,Razor,Repository"
  },
  {
   "title": "Next js E-Commerce Platform",
   "Tech":"Next js, Aws s3,Auth Js,Strip"
  },
  {
  "title": "Next.js Social Media Application",
  "Tech":"Pusher, Next js, Clerk"
  },
  {
  "title": "Food Delivery Admin Dashboard",
  "Tech":"react, tailwind, chartJs"
  },
  {
  "title": "Portfolio Website",
  }
    ],
    "interests": ["Backend Development", "Cloud Computing", "System Architecture", "Frontend"],
    "contact": {
      "email": "pradattaaryal2468@gmail.com",
      "linkedin": "https://www.linkedin.com/in/pradatta-aryal"
    }
  };

  return (
    <div className="w-full flex items-center p-4 justify-center">
      <div className="max-w-[1140px] w-full lg:w-auto text-xs md:text-base border-2 border-black rounded-xl p-6 lg:px-28 shadow-2xl m-4 lg:m-auto">
        <pre className="rounded-md overflow-hidden">
          {JSON.stringify(studentData, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Info;
