import { useState } from 'react';
import { 
  FaCode, 
  FaLayerGroup, 
  FaTools, 
  FaBriefcase, 
  FaGraduationCap, 
  FaChevronDown, 
  FaDownload,
  FaExternalLinkAlt,
} from 'react-icons/fa';

export default function About() {
  // Toggle state for interactive timeline entries
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleTimeline = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Technical Skills Data
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode className="w-5 h-5 text-pearl-aqua-400 light:text-deep-teal-600" />,
      skills: ["React.js", "JavaScript", "TypeScript", "HTML5 / CSS3", "Tailwind CSS", "Vite"]
    },
    {
      title: "UI / UX & Frameworks",
      icon: <FaLayerGroup className="w-5 h-5 text-pearl-aqua-400 light:text-deep-teal-600" />,
      skills: ["Responsive Design", "Mobile-First UX", "CSS Animations", "Component Architecture"]
    },
    {
      title: "Tools & Workflow",
      icon: <FaTools className="w-5 h-5 text-pearl-aqua-400 light:text-deep-teal-600" />,
      skills: ["Git & GitHub", "npm / Node.js", "VS Code", "Chrome DevTools"]
    }
  ];

  // Interactive Timeline Data
  const timelineEvents = [
    {
      type: "work",
      title: "Intern ( Junior Developer )",
      organization: "BH, Inc.",
      date: "Apr 2026 - Sep 2026",
      description: "Developed and maintained full-stack internal web applications.",
      highlights: [
        "Built dynamic user interfaces using React, TypeScript (TSX), and SCSS, backed by Flask REST APIs and PostgreSQL databases",
        "Utilized version control and established GitHub CI/CD pipelines to manage code collaboration",
        "Identified and resolved production bugs, optimized UI/UX elements for visual polish and responsiveness"
      ]
    },
    {
      type: "education",
      title: "Software Engineering",
      organization: "BYU - Idaho",
      date: "2024 - Present",
      description: "",
      highlights: [
      ]
    }
  ];

  return (
   <section className="py-8 space-y-12">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-2 max-w-2xl">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-pale-slate-900 light:text-dark-khaki-100">
            About <span className="glow-text-static">Me</span>
          </h1>
          <p className="text-base sm:text-lg text-pale-slate-400 light:text-deep-teal-400 leading-relaxed">
            I am a student still working on his development skills.
          </p>
        </div>

        {/* Download Resume Button */}
        <a
          href="/resume.pdf"
          download="Josh_Catala_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-dark-khaki-100 bg-pearl-aqua-400 light:bg-deep-teal-600 hover:bg-pearl-aqua-300 light:hover:bg-deep-teal-500 active:scale-95 transition-all shadow-md self-start sm:self-center shrink-0"
        >
          <FaDownload className="w-4 h-4" />
          <span>Download Resume</span>
        </a>
      </div>

      {/* Skills Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight text-pale-slate-900 light:text-dark-khaki-100">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="glow-card">
              <div className="glow-card-inner light:bg-white light:text-dark-khaki-100 h-full">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-deep-teal-200 light:bg-pale-slate-800">
                      {cat.icon}
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-pale-slate-900 light:text-dark-khaki-100">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-deep-teal-200 light:bg-pale-slate-800 text-pearl-aqua-400 light:text-deep-teal-600 border border-deep-teal-300/40 light:border-pale-slate-700/40"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Experience & Education Timeline */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight text-pale-slate-900 light:text-dark-khaki-100">
          Experience & Journey
        </h2>

        <div className="relative border-l-2 border-deep-teal-300 light:border-pale-slate-700 ml-4 sm:ml-6 space-y-8 pl-6 sm:pl-8">
          {timelineEvents.map((event, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div key={idx} className="relative group">
                {/* Icon Marker on the Timeline */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 p-2 rounded-full bg-deep-teal-100 light:bg-pale-slate-900 border-2 border-pearl-aqua-400 light:border-deep-teal-600 text-pearl-aqua-400 light:text-deep-teal-600">
                  {event.type === 'work' ? (
                    <FaBriefcase className="w-3.5 h-3.5" />
                  ) : (
                    <FaGraduationCap className="w-3.5 h-3.5" />
                  )}
                </div>

                {/* Interactive Expandable Card */}
                <div 
                  onClick={() => toggleTimeline(idx)}
                  className="glow-card cursor-pointer transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <div className="glow-card-inner light:bg-white light:text-dark-khaki-100">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-pearl-aqua-400 light:text-deep-teal-600">
                          {event.date}
                        </span>
                        <h3 className="text-lg font-bold tracking-tight text-pale-slate-900 light:text-dark-khaki-100 mt-0.5">
                          {event.title}
                        </h3>
                        <p className="text-sm text-pale-slate-400 light:text-deep-teal-400">
                          {event.organization}
                        </p>
                      </div>

                      {/* Expand Arrow Icon */}
                      <div className={`p-2 rounded-lg bg-deep-teal-200 light:bg-pale-slate-800 text-pale-slate-400 light:text-deep-teal-400 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-pearl-aqua-400 light:text-deep-teal-600' : ''}`}>
                        <FaChevronDown className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Expandable Content Area */}
                    <div className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-deep-teal-300/40 light:border-pale-slate-700/40' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden space-y-3">
                        <p className="text-sm text-pale-slate-400 light:text-deep-teal-400 leading-relaxed">
                          {event.description}
                        </p>
                        
                        <ul className="space-y-1.5 text-xs text-pale-slate-400 light:text-deep-teal-400 list-disc list-inside">
                          {event.highlights.map((h, hIdx) => (
                            <li key={hIdx}>{h}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}