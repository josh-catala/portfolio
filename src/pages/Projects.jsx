import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const myProjects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A mobile-first developer portfolio built with React, Vite, and Tailwind CSS.",
      tags: ["React", "Tailwind CSS", "Vite"],
      liveUrl: "https://josh-catala.github.io/portfolio",
      githubUrl: "https://github.com/josh-catala/portfolio"
    },
    {
      id: 2,
      title: "Internship Outcomes",
      description: "A description of some of the work done during my internship at BH, Inc. (NO CODE AVAILABLE)",
      tags: ["React", "TS", "SCSS", "Flask", "PostgreSQL", "Python"],
      liveUrl: "https://josh-catala.github.io/portfolio",
      internalUrl: "/internship",
      githubUrl: "https://github.com/josh-catala/portfolio"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
      {myProjects.map((project) => (
        /* ✅ Pass project explicitly as a prop */
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}