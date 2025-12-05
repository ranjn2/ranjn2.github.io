"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const journals = [
  {
    title:
      "Designing for Oversight: An Empirical Investigation of the Dual Impact of AI Dependency and Information Abstraction on Human Supervision in Decision-Making Teams",
    venue: "International Journal of Human Computer Interaction",
    venueLink: "https://www.tandfonline.com/journals/hihc20",
    pdfLink: "https://journals.sagepub.com/doi/full/10.1177/21695067231192195",
    description:
      "Investigates how AI dependency and information abstraction levels impact human oversight in decision-making teams, examining the dual effects on supervision quality and team performance.",
  },
];

const conferences = [
  {
    title:
      "Evaluating Large Language Models on Arithmetic and Interval Labeling Problems with Syntactic Perturbations",
    venue: "IEEE International Conference on Data Mining Workshops (ICDMW)",
    venueLink: "https://www.ieee.org/conferences/index.html",
    pdfLink:
      "https://github.com/GEAerospace/llm-evaluation-trailzeroarith-intervallabel",
    description:
      "Evaluates the performance of large language models on arithmetic and interval labeling tasks when subjected to syntactic perturbations, assessing model robustness and reliability.",
  },
  {
    title:
      "Two Sides of the Same Coin? Joint Perspectives From Shared Mental Models and Interactive Team Cognition Theories on Human-AI Team Cognition",
    venue: "Human Factors and Ergonomics Society Annual Meeting",
    venueLink: "https://www.hfes.org/",
    pdfLink: "https://journals.sagepub.com/doi/abs/10.1177/10711813251358788",
    description:
      "Explores intersections and frictions between Shared Mental Model theory and Interactive Team Cognition theory in the context of human-AI team cognition, motivating a dual-perspective approach to understanding HAT cognition.",
  },
  {
    title:
      "Human Assessment of AI Errors and its Impact on Hybrid Teaming for Decision Making",
    venue:
      "IEEE Conference on Cognitive and Computational Aspects of Situation Management (CogSIMA)",
    venueLink: "https://www.ieee.org/conferences/index.html",
    pdfLink: "https://ieeexplore.ieee.org/abstract/document/11079477",
    description:
      "Examines how humans assess AI errors at different complexity levels in disaster relief planning tasks. Results show that high error complexity degrades performance and mental model formation, while complex errors lead to active compensation behaviors.",
  },
  {
    title:
      "Impact of Team Models in Hierarchical Human-Agent Decision Making Teams",
    venue:
      "International Conference on Human Computer Interaction Theory and Applications (HUCAPP) - INSTICC",
    venueLink: "https://www.insticc.org/",
    pdfLink: "https://www.scitepress.org/Papers/2025/130974/130974.pdf",
    description:
      "Studies the impact of human mental models of AI in hierarchical triads, examining performance when agents have mutually compatible or incompatible models. Findings show that accurate mental models improve decision utility over time without reducing speed or increasing task load.",
  },
  {
    title: "Development of Mental Models in Decision Making Tasks",
    venue: "Human Factors and Ergonomics Society Annual Meeting",
    venueLink: "https://www.hfes.org/",
    pdfLink: "https://journals.sagepub.com/doi/10.1177/21695067231192195",
    description:
      "Investigates the development and stability of users' mental models over time using behavioral process tracing data. Top performers adapt and stabilize toward suitable models, while low performers lack adaptability, with implications for improving human-AI team decision support tools.",
  },
];

const bookChapters = [
  {
    title:
      "How well do we rely on reliance? On the under-utilization of reliance-based metrics towards studying human response to AI assistance",
    venue:
      "Advancements in Human Agent Teaming Research Infrastructure: Testbeds, Metrics, and Concepts, CRC Press Taylor and Francis",
    venueLink: "https://www.taylorfrancis.com/",
    pdfLink: "#", // Add PDF link here
    description:
      "Examines the under-utilization of reliance-based metrics in studying human responses to AI assistance, discussing limitations and opportunities for better understanding human-AI interaction dynamics.",
  },
];

const workshops = [
  {
    title:
      "Influence of Human-AI Team Structuring on Shared Mental Models for Collaborative Decision-Making",
    venue:
      "Workshop on Theory of Mind in Human-AI Interaction at ACM Conference on Human Factors in Computing Systems (CHI)",
    venueLink: "https://chi2024.acm.org/",
    pdfLink:
      "https://theoryofmindinhaichi2024.wordpress.com/wp-content/uploads/2024/04/tominhaichi_camera_ready_6981.pdf",
    description:
      "Makes a case for studying the influence of hierarchical decision workflows on shared mental models in human-AI teams, particularly in contexts requiring greater human oversight and chain-of-command structures like military domains.",
  },
];

const underReview = [
  {
    title: "The role of shared mental models in AI-advised Decision Support",
    venue: "IEEE Transactions on Systems, Man, and Cybernetics (IEEE SMC)",
    venueLink: "https://www.ieee.org/",
    pdfLink:
      "https://www.techrxiv.org/doi/full/10.36227/techrxiv.174362922.29296683",
    description:
      "Investigates interaction effects of mental models between humans and AI in disaster relief planning tasks. Findings indicate that accurate mutual understanding can compensate for task understanding gaps, while one-way mental models create trade-offs between accuracy, speed, and user effort.",
  },
];

const inPreparation = [
  {
    title:
      "Human-Machine Interactions: A Conceptual Guide for Situating Theoretical and Empirical Research",
    venue: "Manuscript in preparation",
    venueLink: null,
    pdfLink: "#", // Add PDF link here
    description:
      "A conceptual guide for situating theoretical and empirical research in human-machine interactions.",
  },
];

export default function Publications() {
  return (
    <section className="mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-slate-900 mb-8"
      >
        Research
      </motion.h2>

      <div className="space-y-12">
        {/* Journals */}
        {journals.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">Journals</h3>
            <div className="space-y-4">
              {journals.map((pub, index) => {
                const pubId = `pub-${pub.title
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .substring(0, 50)}`;
                const isDesigningForOversight = pub.title.includes(
                  "Designing for Oversight"
                );
                return (
                  <Card
                    key={index}
                    id={pubId}
                    className="border-slate-200 hover:border-slate-300 transition-colors scroll-mt-20"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg font-bold">
                        {isDesigningForOversight ? (
                          <span className="text-slate-900">{pub.title}</span>
                        ) : (
                          <a
                            href={pub.pdfLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                          >
                            {pub.title}
                          </a>
                        )}
                      </CardTitle>
                      <CardDescription className="text-slate-600 font-medium">
                        {pub.venue}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Conferences */}
        {conferences.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Conferences
            </h3>
            <div className="space-y-4">
              {conferences.map((pub, index) => {
                const pubId = `pub-${pub.title
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .substring(0, 50)}`;
                return (
                  <Card
                    key={index}
                    id={pubId}
                    className="border-slate-200 hover:border-slate-300 transition-colors scroll-mt-20"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg font-bold">
                        <a
                          href={pub.pdfLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                        >
                          {pub.title}
                        </a>
                      </CardTitle>
                      <CardDescription className="text-slate-600 font-medium">
                        {pub.venue}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Book Chapters */}
        {bookChapters.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Book Chapters
            </h3>
            <div className="space-y-4">
              {bookChapters.map((pub, index) => {
                const pubId = `pub-${pub.title
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .substring(0, 50)}`;
                const isReliancePaper = pub.title.includes(
                  "How well do we rely on reliance"
                );
                return (
                  <Card
                    key={index}
                    id={pubId}
                    className="border-slate-200 hover:border-slate-300 transition-colors scroll-mt-20"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg font-bold">
                        {isReliancePaper ? (
                          <span className="text-slate-900">{pub.title}</span>
                        ) : (
                          <a
                            href={pub.pdfLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                          >
                            {pub.title}
                          </a>
                        )}
                      </CardTitle>
                      <CardDescription className="text-slate-600 font-medium">
                        {pub.venue}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Workshops */}
        {workshops.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">Workshops</h3>
            <div className="space-y-4">
              {workshops.map((pub, index) => {
                const pubId = `pub-${pub.title
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .substring(0, 50)}`;
                return (
                  <Card
                    key={index}
                    id={pubId}
                    className="border-slate-200 hover:border-slate-300 transition-colors scroll-mt-20"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg font-bold">
                        <a
                          href={pub.pdfLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                        >
                          {pub.title}
                        </a>
                      </CardTitle>
                      <CardDescription className="text-slate-600 font-medium">
                        {pub.venue}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Under Review */}
        {underReview.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Under Review
            </h3>
            <div className="space-y-4">
              {underReview.map((pub, index) => {
                const pubId = `pub-${pub.title
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .substring(0, 50)}`;
                return (
                  <Card
                    key={index}
                    id={pubId}
                    className="border-slate-200 hover:border-slate-300 transition-colors scroll-mt-20"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg font-bold">
                        <a
                          href={pub.pdfLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                        >
                          {pub.title}
                        </a>
                      </CardTitle>
                      <CardDescription className="text-slate-600 font-medium">
                        {pub.venue}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* In Preparation */}
        {inPreparation.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              In Preparation
            </h3>
            <div className="space-y-4">
              {inPreparation.map((pub, index) => {
                const pubId = `pub-${pub.title
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .substring(0, 50)}`;
                const isHumanMachineInteractions = pub.title.includes(
                  "Human-Machine Interactions"
                );
                return (
                  <Card
                    key={index}
                    id={pubId}
                    className="border-slate-200 hover:border-slate-300 transition-colors scroll-mt-20"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg font-bold">
                        {isHumanMachineInteractions ? (
                          <span className="text-slate-900">{pub.title}</span>
                        ) : (
                          <a
                            href={pub.pdfLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                          >
                            {pub.title}
                          </a>
                        )}
                      </CardTitle>
                      <CardDescription className="text-slate-600 font-medium">
                        {pub.venue}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
