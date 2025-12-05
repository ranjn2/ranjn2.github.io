"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"

const projects = [
  {
    title: "Generative Adversarial Reinforcement Learning",
    category: "Research",
    technologies: ["Python", "PyTorch", "Gym"],
    description: "Implemented a Generative adversarial RL algorithm which is a model free algorithm on the HalfCheetah-v2 gym environment. The core idea consists of extracting expert policy data to yield expected benchmark rewards. Used Trust Region Policy Optimization to overcome the non-monotonicity problem during training.",
    github: "https://github.com",
  },
  {
    title: "GANs and VAE to Model Multimodal Distribution",
    category: "Research",
    technologies: ["Python", "PyTorch"],
    description: "Implemented Variational Autoencoders, DC-GANs and unsupervised image to image translation models namely cycle gan for the FashionMNIST and STL-10 datasets. Used Pytorch for implementation. Used FID and IS loss functions for training and objective performance evaluation.",
    github: "https://github.com",
  },
  {
    title: "Learning Object Pose from UAV Motion",
    category: "Research",
    technologies: ["Python", "Unity3D", "PyTorch"],
    description: "Created a synthetic dataset of 2d images generated from UAV interaction within a unity3d simulation environment. Implemented domain randomization for augmenting the dataset and improving model robustness. Methods consisted of transfer learning and benchmarking across different image neural nets.",
    github: "https://github.com",
  },
  {
    title: "Object Detection using YOLOv2",
    category: "Research",
    technologies: ["Python", "PyTorch"],
    description: "Implemented the end to end pipeline for one shot learning using yolov2 on the xx dataset. Used python and pytorch for the project.",
    github: "https://github.com",
  },
  {
    title: "Image Segmentation using Mask RCNNs, Fast RCNNs and SOLO",
    category: "Research",
    technologies: ["Python", "PyTorch"],
    description: "Comparative study of different image segmentation algorithms such as mask rcnn, fast rcnn and one shot solo algorithms. Implemented the end to end pipeline. Implemented a multi-loss paradigm and point-NMS post training filtering methods for evaluation and visualization.",
    github: "https://github.com",
  },
  {
    title: "Deep Learning Based Authorship Identification",
    category: "Research",
    technologies: ["Python", "PyTorch", "LSTM", "GRU"],
    description: "Implemented multi-class classification using lstm, bi-lstm and GRU at sentence level and article levels for corporate news datasets (c50 and Reuters'). Modeling was done on large corpora of texts. Handled semantic and metaphoric words using stylometric classification, resulting in improved performance.",
    github: "https://github.com",
  },
]

export default function Projects() {
  return (
    <section className="mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-slate-900 mb-6"
      >
        Projects
      </motion.h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex items-start gap-4"
          >
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-lg font-bold text-blue-600">
                  {project.title}
                </h3>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-900 transition-colors flex-shrink-0 mt-1"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
              </div>
              <div className="mb-2">
                <span className="text-red-600 font-medium">[{project.category}]</span>
                <span className="text-slate-600 ml-2">
                  {project.technologies.join(", ")}
                </span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

