"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const experiences = [
  {
    title: "Associate Software Developer",
    company: "Delta6Labs - Crypto Exchange",
    period: "Jan 2024 – Present",
    location: "Noida, Uttar Pradesh",
    description: [
      "Improved Lighthouse performance scores to 90+, optimizing key metrics such as First Contentful Paint (FCP), Cumulative Layout Shift (CLS), and Largest Contentful Paint (LCP), resulting in faster page load times and a more responsive user experience.",
      "Module Owner for the wallet segregation project, leading a team of 2 developers to remove the copy trading wallet and implement direct fund transfers to the spot wallet for master traders. Responsibilities included gathering requirements, distributing tasks, and ensuring key project milestones were met, resulting in improved transaction efficiency and enhanced user experience.",
      "Contributed to the implementation of passkey functionality for enhanced security, streamlining user authentication and login processes."
    ],
    keySkills: [
      "Next.js", "React", "TypeScript", "Tailwind CSS", "Lighthouse", "Performance Optimization", "Agile", "Jira", "Git", "UX"
    ],
  },  
  {
    title: "Frontend Developer Intern",
    company: "Celebal Technologies",
    period: "Jul 2023 – Dec 2023",
    location: "Noida", 
    description: [
      "Learned to build pixel-perfect, responsive UI using modern frontend frameworks and best practices.",
      "Gained hands-on experience with HTML, CSS, JavaScript, and React to create user-friendly interfaces.",
      "Worked closely with senior developers to understand component-based architecture and reusability patterns.",
      "Translated Figma/Adobe XD designs into interactive and responsive components with close attention to detail.",
    ],
    keySkills: [
      "HTML", "CSS", "JavaScript", "React", "Figma", "Responsive Design", "Component Reusability", "UI/UX Basics"
    ]
  },  
]

export function Timeline() {
  const isMobile = useMobile()

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
        <motion.div
  className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-purple-500/50">
    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

    <div className="relative">
      <h3 className="text-xl font-bold">{experience.title}</h3>
      <div className="text-zinc-400 mb-4">
        {experience.company} | {experience.period}
      </div>

      {typeof experience.description === "string" ? (
        <p className="text-zinc-300">{experience.description}</p>
      ) : (
        <ul className="text-zinc-300 list-disc list-inside space-y-2">
          {experience.description.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      )}

      {experience.keySkills && (
        <div className="mt-4 flex flex-wrap gap-2">
          {experience.keySkills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-zinc-700 text-sm text-white px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
</motion.div>


          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
