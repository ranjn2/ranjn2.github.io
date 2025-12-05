"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const researchTopics = [
  {
    title: "Human-AI Interaction in Multi-Agent Settings",
    description: "Exploring how humans collaborate with multiple AI agents simultaneously, focusing on coordination strategies, trust dynamics, and performance outcomes in complex multi-agent environments.",
  },
  {
    title: "Mental Models of AI",
    description: "Investigating how people form and update their understanding of AI systems, including the development of accurate mental models that enable effective human-AI collaboration.",
  },
  {
    title: "Generative Models",
    description: "Examining the implications of generative AI technologies for human-AI teamwork, including how these models can be designed to better support collaborative workflows.",
  },
]

export default function Research() {
  return (
    <section className="mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-slate-900 mb-6"
      >
        Research
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {researchTopics.map((topic, index) => (
          <motion.div
            key={topic.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="h-full border-slate-200 hover:border-slate-300 transition-colors">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-slate-900">
                  {topic.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {topic.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

