import { Link } from 'react-router-dom';
import { FaArrowRight, FaGithub, FaLinkedin, FaCode, FaMobileAlt, FaBolt } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import Projects from './Projects';

export default function Home() {
  // Highlighted projects preview for the home page
  

  const highlights = [
    {
      icon: <FaMobileAlt className="w-5 h-5 text-pearl-aqua-400 light:text-deep-teal-600" />,
      title: "Mobile-First UX",
      desc: "Designed for touchscreens first, scaling seamlessly to desktop displays."
    },
    {
      icon: <FaCode className="w-5 h-5 text-pearl-aqua-400 light:text-deep-teal-600" />,
      title: "Modern React & Vite",
      desc: "Structured with clean component architecture and lightning-fast HMR builds."
    },
    {
      icon: <FaBolt className="w-5 h-5 text-pearl-aqua-400 light:text-deep-teal-600" />,
      title: "Tailwind v4 Styling",
      desc: "Custom CSS theme palettes with responsive, accessible layout systems."
    }
  ];

  return (
    <div className="py-6 sm:py-10 space-y-16">
      
      {/* Hero Section */}
      <section className="space-y-6">
        
        {/* Status Pill Badge */}
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-deep-teal-200 light:bg-pale-slate-800 border border-pearl-aqua-400/30 light:border-deep-teal-600/30">
          <span className="w-2 h-2 rounded-full bg-pearl-aqua-400 animate-pulse" />
          <span className="text-xs font-semibold tracking-wide text-pearl-aqua-400 light:text-deep-teal-600">
            Open for Developer Opportunities
          </span>
        </div>

        {/* Hero Headline */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-pale-slate-900 light:text-dark-khaki-100 leading-tight">
            Hi, I'm <span className="text-pearl-aqua-400 light:text-deep-teal-600">Josh Catala</span>
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-pale-slate-900 light:text-deep-teal-300">
            Software Engineering Student
          </p>
        </div>

        {/* Short Bio Intro */}
        <p className="max-w-2xl text-base sm:text-lg text-pale-slate-400 light:text-deep-teal-400 leading-relaxed">
          I aim to become a full-stack developer.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
          
          {/* Primary CTA: View Projects */}
          <Link
            to="/about"
            className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-dark-khaki-100 bg-pearl-aqua-400 light:bg-pear-aqua-400 hover:bg-pearl-aqua-300 light:hover:bg-deep-teal-500 active:scale-95 transition-all shadow-lg"
          >
            <span>About Me</span>
            <FaArrowRight className="w-4 h-4" />
          </Link>

          {/* Secondary CTA: Get in Touch */}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-pale-slate-800 light:text-dark-khaki-200 bg-deep-teal-200 light:bg-pale-slate-800 hover:bg-deep-teal-300 light:hover:bg-pale-slate-700 active:scale-95 transition-all border border-deep-teal-300/40 light:border-pale-slate-700/40"
          >
            <span>Get in Touch</span>
          </Link>

          {/* Social Quick-Links */}
          <div className="flex items-center justify-center sm:justify-start space-x-3 pt-2 sm:pt-0 sm:ml-2">
            <a
              href="https://github.com/josh-catala"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-deep-teal-200 light:bg-pale-slate-800 text-pale-slate-400 light:text-deep-teal-400 hover:text-pearl-aqua-400 light:hover:text-deep-teal-600 transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/josh-catala"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-deep-teal-200 light:bg-pale-slate-800 text-pale-slate-400 light:text-deep-teal-400 hover:text-pearl-aqua-400 light:hover:text-deep-teal-600 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-pale-slate-900 light:text-dark-khaki-100">
              Featured Work
            </h2>
            <p className="text-sm text-pale-slate-400 light:text-deep-teal-400 mt-1">
              A highlight from my recent web development projects.
            </p>
          </div>

          <Link
            to="/projects"
            className="text-xs sm:text-sm font-semibold text-pearl-aqua-400 light:text-deep-teal-600 hover:underline inline-flex items-center gap-1"
          >
            <span>View All</span>
            <FaArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="">
          {Projects()}
        </div>
      </section>

    </div>
  );
}