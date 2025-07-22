import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';

const experienceVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.4,
      duration: 1,
      ease: 'easeOut',
    },
  }),
};

const ExperienceItem = ({ role, company, location, date, description, techStack, index }) => (
  <motion.div
    className="bg-white text-black p-6 rounded-xl shadow-md border-[3px] border-black p-2 border-solid font-bold text-xl rounded-l-2xl hover:shadow-black hover:shadow-2xl"
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.3 }}
    variants={experienceVariants}
  >
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-xl font-semibold">{role}</h3>
      <span className="flex items-center text-sm bg-black/10 text-black px-3 py-1 rounded-full">
        <Calendar className="h-4 w-4 mr-1" /> {date}
      </span>
    </div>
    <p className="text-sm text-gray-700 mb-1">{company}</p>
    <div className="flex items-center text-sm text-gray-700 mb-4">
      <MapPin className="h-4 w-4 mr-1" /> {location}
    </div>
    <p className="text-sm text-gray-800 mb-4">{description}</p>
    <div className="flex flex-wrap">
      {techStack.map((tech, i) => (
        <span key={i} className="bg-black/10 text-sm text-black px-3 py-1 rounded-full mr-2 mt-2 inline-block">
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Kutumba Tech',
      location: 'Hetauda',
      date: 'July 2023-May 2025',
      description:
        'Full Stack Developer on Online Health Care System developers and implemented CI/CD pipelines.',
       techStack: ['React', '.Net', 'SQl','Docker','CICD', 'TypeScript'],
    },
    {
      role: 'Full Stack Software Developer',
      company: 'NeoMatrix',
      location: 'Kathmandu',
      date: 'May 2025--July 2025',
      description:
        'Developed and maintained client-facing applications. Collaborated with design team to implement responsive UI components.',
      techStack: ['Nest js','Next js','Tailwinid','CICD', 'Git'],
    },
    {
      role: 'Backend Software Developer',
      company: 'Web Expert Nepal',
      location: 'Kathmandu',
      date: 'July 2025--current',
      description:
        'Developed, maintained and optimized backend applications.',
      techStack: ['Nest js','CICD', 'Git'],
    },
  ];

  return (
    <div id="experiences" className="bg-white text-black py-20 px-6 md:px-16"   >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{  }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold">Professional Experience</h2>
        <p className="text-gray-700 mt-2 text-lg">A timeline of my professional journey and key roles</p>
      </motion.div>
      <div className="max-w-4xl mx-auto grid gap-10">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} index={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
