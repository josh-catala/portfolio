import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({ project = {} }) {
  const {
    title = 'Untitled Project',
    description = 'No description provided.',
    tags = [],
    featured = false,
    githubUrl = '#',
    liveUrl = '#',
  } = project;

  return (
    <article className={`glow-card ${featured ? 'md:col-span-2' : ''}`}>
      {/* Defaults to Dark theme, switches to light:bg-white when .light class is active */}
      <div className="glow-card-inner bg-deep-teal-100 light:bg-white text-pale-slate-900 light:text-deep-teal-100 transition-colors duration-200">
        <div>
          <div className="flex items-center justify-between gap-2 mb-3">
            <h2 className="text-xl font-bold text-pearl-aqua-400 light:text-deep-teal-100">
              {title}
            </h2>
            {featured && (
              <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-pearl-aqua-400/20 text-pearl-aqua-400 light:bg-pearl-aqua-500/20 light:text-deep-teal-400 border border-pearl-aqua-400/30 light:border-pearl-aqua-300">
                Featured
              </span>
            )}
          </div>

          <p className="text-sm text-pale-slate-400 light:text-pale-slate-300 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-6 space-y-4 pt-4 border-t border-deep-teal-300 light:border-pale-slate-700">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-medium rounded-md bg-deep-teal-300/40 light:bg-pale-slate-800 text-pearl-aqua-500 light:text-deep-teal-100 border border-deep-teal-300 light:border-pale-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="min-h-[44px] gap-[10px] px-4 py-2 rounded-lg bg-pearl-aqua-500 light:bg-pearl-aqua-400 text-dark-khaki-100 font-semibold text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-1.5 focus:outline-none"
            >            
              Live Demo
              <FaExternalLinkAlt className="w-4 h-4" />
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="min-h-[44px] gap-[10px] px-4 py-2 rounded-lg bg-deep-teal-300/30 light:bg-pale-slate-800 text-pale-slate-900 light:text-deep-teal-100 border border-deep-teal-300 light:border-pale-slate-700 font-medium text-sm hover:border-pearl-aqua-400 light:hover:border-pearl-aqua-300 transition-colors inline-flex items-center gap-1.5 focus:outline-none "            
            >
              Code
              <FaGithub className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}