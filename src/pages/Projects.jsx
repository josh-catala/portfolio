import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const myProjects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A mobile-first developer portfolio built with React, Vite, and Tailwind CSS.",
      tags: ["React", "Tailwind CSS", "Vite"],
      liveUrl: "https://yourportfolio.com",
      githubUrl: "https://github.com/josh-catala/portfolio"
    }
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