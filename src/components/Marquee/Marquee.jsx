
import Marquee from "react-fast-marquee";
 
import React from 'react';
import { FaReact, FaDocker, FaAws, FaGitAlt, FaLinux, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiDotnet, SiMongodb, SiPostgresql, SiJenkins, SiTypescript, SiNextdotjs, SiTailwindcss, SiDjango, SiRabbitmq, SiTrivy, SiSonarqube } from 'react-icons/si';

const Label = () => {
  const icons = [
    { Icon: FaReact, name: 'React' },
    { Icon: FaDocker, name: 'Docker' },
    { Icon: FaAws, name: 'AWS' },
    { Icon: FaGitAlt, name: 'Git' },
    { Icon: FaLinux, name: 'Linux' },
    { Icon: FaNodeJs, name: 'Node.js' },
    { Icon: FaPython, name: 'Python' },
    { Icon: SiDotnet, name: '.NET' },
    { Icon: SiMongodb, name: 'MongoDB' },
    { Icon: SiPostgresql, name: 'PostgreSQL' },
    { Icon: SiJenkins, name: 'Jenkins' },
    { Icon: SiTypescript, name: 'TypeScript' },
    { Icon: SiNextdotjs, name: 'Next.js' },
    { Icon: SiTailwindcss, name: 'Tailwind CSS' },
    { Icon: SiDjango, name: 'Django' },
    { Icon: SiRabbitmq, name: 'RabbitMQ' },
    { Icon: SiTrivy, name: 'Trivy' },
    { Icon: SiSonarqube, name: 'SonarQube' },
  ];

  return (
    <div className="w-full hover-target  overflow-hidden bg-white py-6">
      <div className="relative p-6 h-full">
        {/* Duplicate icons array to create a seamless loop */}
  <Marquee speed={40} loop={0} play={true}>           {[...icons, ...icons].map(({ Icon, name }, index) => (
            <div
              key={`${name}-${index}`}
              className="flex items-center mx-4 p-5 px-10     rounded-lg    bg-black   border-2 border-black  hover:shadow-2xl hover:shadow-black   duration-300"
            >
              <Icon className=" text-5xl text-white mr-2" />
              <span className="text-white font-semibold text-lg">{name}</span>
            </div>
          ))}
        </Marquee>
      </div>
      
    </div>
  );
};

export default Label;