"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const boldKeywords = [
  "Graduated",
  "Started",
  "Completed",
  "Published",
  "presented",
  "PhD",
  "Master of Science",
  "Master",
  "Bachelors in Technology",
  "Bachelors",
  "Degree",
  "Machine Learning Intern",
  "AI Research Fellow Intern",
  "Machine Learning",
  "AI Research",
  "Fellow Intern",
  "Intern",
  "Georgia Institute of Technology",
  "University of Pennsylvania",
  "Sardar Patel College of Engineering",
  "Sardar Patel College",
  "University of Mumbai",
  "Autodesk",
  "GE Aerospace",
  "Human Factors and Ergonomics Society Annual Meeting",
  "HFES",
  "ACM Conference on Human Factors in Computing Systems",
  "CHI",
  "International Conference on Human Computer Interaction Theory and Applications",
  "HUCAPP",
  "IEEE Conference on Cognitive and Computational Aspects of Situation Management",
  "CogSIMA",
];

function formatEventText(text: string) {
  const parts: Array<{ text: string; bold: boolean }> = [];
  let remaining = text;

  while (remaining.length > 0) {
    let earliestMatch: {
      keyword: string;
      index: number;
      length: number;
    } | null = null;

    // Find the earliest match among all keywords
    for (const keyword of boldKeywords) {
      // Use word boundaries for short abbreviations (like PhD, CHI, HFES) to avoid matching within words
      const needsWordBoundary = keyword.length <= 4 && /^[A-Z]+$/.test(keyword);
      const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const pattern = needsWordBoundary
        ? `\\b${escapedKeyword}\\b`
        : escapedKeyword;
      const regex = new RegExp(pattern, "i");
      const match = remaining.match(regex);

      if (match && match.index !== undefined) {
        // If this is the first match found, or if it appears earlier than the current earliest match
        if (!earliestMatch || match.index < earliestMatch.index) {
          earliestMatch = {
            keyword: match[0],
            index: match.index,
            length: match[0].length,
          };
        } else if (
          match.index === earliestMatch.index &&
          match[0].length > earliestMatch.length
        ) {
          // If at the same position, prefer longer match (to match "Master of Science" before "Master")
          earliestMatch = {
            keyword: match[0],
            index: match.index,
            length: match[0].length,
          };
        }
      }
    }

    if (earliestMatch) {
      // Add text before match
      if (earliestMatch.index > 0) {
        parts.push({
          text: remaining.substring(0, earliestMatch.index),
          bold: false,
        });
      }
      // Add matched keyword
      parts.push({ text: earliestMatch.keyword, bold: true });
      // Update remaining
      remaining = remaining.substring(
        earliestMatch.index + earliestMatch.length
      );
    } else {
      // No more matches found
      parts.push({ text: remaining, bold: false });
      break;
    }
  }

  return parts;
}

const timelineEvents = [
  {
    year: "May 2019",
    event:
      "Graduated with a Bachelors in Technology in Electrical Engineering from Sardar Patel College of Engineering, University of Mumbai",
    researchLink: null,
  },
  {
    year: "August 2019",
    event:
      "Started Master of Science in Electrical and Systems Engineering at the University of Pennsylvania",
    researchLink: null,
  },
  {
    year: "May 2021",
    event:
      "Completed Master of Science in Electrical and Systems Engineering from the University of Pennsylvania",
    researchLink: null,
  },
  {
    year: "August 2021",
    event:
      "Started PhD in Georgia Institute of Technology in Atlanta in Electrical and Computer Engineering",
    researchLink: null,
  },
  {
    year: "May - August 2022",
    event: "Machine Learning Intern at Autodesk",
    researchLink: null,
  },
  {
    year: "2023",
    event:
      "Published at Human Factors and Ergonomics Society Annual Meeting (HFES) 2023",
    researchLink: "/research#pub-two-sides-of-the-same-coin-joint-perspectives",
  },
  {
    year: "February 2024",
    event:
      "Published at the ACM Conference on Human Factors in Computing Systems (CHI) Workshop",
    researchLink: "/research#pub-influence-of-human-ai-team-structuring",
  },
  {
    year: "June - August 2024",
    event:
      "AI Research Fellow Intern at GE Aerospace at the GE Research Center in Niskayuna, NY",
    researchLink: null,
  },
  {
    year: "February 2025",
    event:
      "Published and presented at International Conference on Human Computer Interaction Theory and Applications (HUCAPP) in Porto, Portugal",
    researchLink: "/research#pub-impact-of-team-models-in-hierarchical",
  },
  {
    year: "June 2025",
    event:
      "Published and presented at IEEE Conference on Cognitive and Computational Aspects of Situation Management (CogSIMA) in Duisburg, Germany",
    researchLink: "/research#pub-human-assessment-of-ai-errors-and-its",
  },
  {
    year: "June - August 2025",
    event:
      "AI Research Fellow Intern at GE Aerospace at the GE Research Center in Niskayuna, NY",
    researchLink: null,
  },
  {
    year: "October 2025",
    event:
      "Published and presented my paper at Human Factors and Ergonomics Society Annual Meeting (HFES) in Chicago, IL",
    researchLink: "/research#pub-development-of-mental-models-in-decision",
  },
];

export default function Timeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-12"
    >
      <h3 className="text-xl font-bold text-slate-900 mb-6">Timeline</h3>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200"></div>

        <div className="space-y-8">
          {[...timelineEvents].reverse().map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="relative pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-8 h-8 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-slate-900 border-2 border-white"></div>
              </div>

              {/* Content */}
              <div>
                <div className="text-base md:text-lg text-slate-500 font-mono mb-2 font-bold">
                  {item.year}
                </div>
                {item.researchLink ? (
                  <Link href={item.researchLink}>
                    <p className="text-base md:text-lg text-slate-700 leading-relaxed hover:text-blue-600 transition-colors cursor-pointer">
                      {formatEventText(item.event).map((part, i) =>
                        part.bold ? (
                          <span key={i} className="font-bold">
                            {part.text}
                          </span>
                        ) : (
                          <span key={i}>{part.text}</span>
                        )
                      )}
                    </p>
                  </Link>
                ) : (
                  <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                    {formatEventText(item.event).map((part, i) =>
                      part.bold ? (
                        <span key={i} className="font-bold">
                          {part.text}
                        </span>
                      ) : (
                        <span key={i}>{part.text}</span>
                      )
                    )}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
