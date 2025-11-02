"use client"

import { motion } from "framer-motion"

export default function Experience() {
  const experiences = [
    {
      company: "Web Expert Nepal",
      role: "Backend Software Developer",
      location: "Kathmandu",
      startDate: "July 2025",
      endDate: "Present",
      isCurrent: true,
      description:
        "Developed, maintained, and optimized backend applications with scalable API design and deployment best practices.",
      techStack: ["NestJS", "CI/CD", "Git"],
    },
    {
      company: "NeoMatrix",
      role: "Full Stack Software Developer",
      location: "Kathmandu",
      startDate: "May 2025",
      endDate: "July 2025",
      isCurrent: false,
      description:
        "Built client-facing web apps and collaborated closely with design teams for responsive, accessible UX.",
      techStack: ["NestJS", "Next.js", "Tailwind", "CI/CD", "Git"],
    },
    {
      company: "Kutumba Tech",
      role: "Full Stack Developer",
      location: "Hetauda",
      startDate: "July 2023",
      endDate: "May 2025",
      isCurrent: false,
      description:
        "Developed an Online Health Care System with CI/CD pipelines and modular frontend/backend structure.",
      techStack: ["React", ".NET", "SQL", "Docker", "TypeScript"],
    },
  ]

  return (
    <section className="min-h-screen py-20 px-6 lg:px-10 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-extrabold tracking-tight mb-3">
            Professional Experience
          </h2>
          <p className="text-gray-600 text-lg font-light">
            A timeline of my career journey and impactful contributions
          </p>
        </motion.div>

        {/* Bento-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
<motion.div
  key={index}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  viewport={{ once: true }}
  className="group relative p-6 bg-white text-black border border-gray-200 rounded-3xl 
             hover:bg-black hover:text-white 
             hover:border-gray-800
             hover:shadow-lg hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between"
>
  {/* Header */}
  <div>
    <div className="flex justify-between items-start mb-3">
      <div>
        <h3 className="text-2xl font-semibold tracking-tight">
          {exp.role}
        </h3>
        <p className="text-sm text-gray-600 group-hover:text-gray-300">
          {exp.company} • {exp.location}
        </p>
      </div>

      {exp.isCurrent && (
        <span className="text-xs font-semibold px-3 py-1 bg-black text-white rounded-full tracking-wider shadow-sm group-hover:bg-white group-hover:text-black transition-colors duration-500">
          CURRENT
        </span>
      )}
    </div>

    {/* Dates */}
    <p className="text-sm text-gray-500 group-hover:text-gray-300 mb-4 italic">
      {exp.startDate} – {exp.endDate}
    </p>

    {/* Description */}
    <p className="text-gray-700 group-hover:text-gray-200 mb-6 leading-relaxed">
      {exp.description}
    </p>
  </div>

  {/* Tech Stack */}
  <div className="flex flex-wrap gap-2 mt-auto">
    {exp.techStack.map((tech, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 250 }}
        className="text-xs font-medium px-3 py-1 bg-gray-100 text-gray-900 rounded-full border border-gray-300 group-hover:bg-gray-800 group-hover:text-white group-hover:border-gray-700 transition-colors duration-500"
      >
        {tech}
      </motion.div>
    ))}
  </div>
</motion.div>


          ))}
        </div>

        {/* Footer Block (optional) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-700 text-base font-medium">
            Always exploring new technologies, refining backend architecture, and leading scalable systems.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
