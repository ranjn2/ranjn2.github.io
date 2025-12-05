"use client"

import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"

const experiences = [
  {
    type: "experience",
    title: "AI Research Fellow Intern",
    organization: "GE Aerospace",
    period: "June - August 2024, June - August 2025",
    description: "Conducting research on AI applications in aerospace systems at the GE Research Center in Niskayuna, NY.",
  },
  {
    type: "experience",
    title: "Machine Learning Intern",
    organization: "Autodesk",
    period: "May - August 2022",
    description: "Developed machine learning solutions for design automation.",
  },
  {
    type: "education",
    title: "PhD Candidate",
    organization: "Georgia Institute of Technology",
    period: "August 2021 - Present",
    description: "Expected graduation: Spring 2026",
  },
  {
    type: "education",
    title: "Master's Degree",
    organization: "University of Pennsylvania",
    period: "August 2019 - May 2021",
    description: "",
  },
  {
    type: "education",
    title: "Undergraduate Degree",
    organization: "Sardar Patel College of Engineering, University of Mumbai",
    period: "2015 - May 2019",
    description: "",
  },
]

export default function Experience() {
  return (
    <section className="mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-slate-900 mb-6"
      >
        Experience & Education
      </motion.h2>
      <div className="space-y-6">
        {experiences.map((item, index) => (
          <motion.div
            key={`${item.type}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-600 font-medium">
                  {item.organization}
                </p>
                {item.description && (
                  <p className="text-slate-600 text-sm mt-1">
                    {item.description}
                  </p>
                )}
              </div>
              <div className="text-sm text-slate-500 font-mono">
                {item.period}
              </div>
            </div>
            {index < experiences.length - 1 && (
              <Separator className="mt-4" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

