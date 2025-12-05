"use client";

import { motion } from "framer-motion";
import Timeline from "./Timeline";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-16"
    >
      <div className="space-y-4 text-slate-700 leading-relaxed">
        <p>
          I am a researcher working to expand how agents can become teammates,
          not just tools.
        </p>
        <p>
          Currently, I am a PhD Candidate at{" "}
          <a
            href="https://www.gatech.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            Georgia Tech
          </a>
          .
        </p>
        <p>
          I am working on how agents can{" "}
          <span className="text-slate-900">infer user beliefs</span>,{" "}
          <span className="text-slate-900">predict teammate performance</span>,
          and{" "}
          <span className="text-slate-900">support collaboration fluency</span>{" "}
          to enable novel human-AI teaming. I am advised by{" "}
          <a
            href="https://ae.gatech.edu/directory/person/karen-m-feigh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            Karen Feigh
          </a>{" "}
          at the{" "}
          <a
            href="https://cec.gatech.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            Cognitive Engineering Center
          </a>{" "}
          at Georgia Institute of Technology.
        </p>
        <p className="text-slate-600">
          Expected graduation:{" "}
          <span className="font-semibold">Spring 2026</span>
        </p>
      </div>

      <Timeline />
    </motion.section>
  );
}
