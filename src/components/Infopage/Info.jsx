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
        "description": "Developed an LMS application in ASP.NET implementing CQRS, Clean Architecture, MediatR, and JWT authentication."
      },
      {
        "title": "Food Delivery Admin Dashboard",
        "description": "Built an interactive dashboard using React, Tailwind CSS, and Chart.js for real-time data visualization."
      },
      {
        "title": "E-Commerce Platform",
        "description": "Built a full-stack Next.js e-commerce application with a shopping cart, admin dashboard, and product category management."
      },
      {
        "title": "Next.js Social Media Application",
        "description": "Developed a full-stack social media platform with authentication, user profiles, post creation, and following system."
      },
      {
        "title": "Portfolio Website",
        "description": "Designed and developed a personal portfolio using React and Tailwind CSS to showcase technical skills and projects."
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
