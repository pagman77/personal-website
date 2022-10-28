import ProjectCard from "./ProjectCard";

export default function Portfolio({ projects }) {

  return (
    <div id="portfolio" className="container portfolio">
      <h2 className="text-center mb-5">Portfolio Projects</h2>
      <div className="row d-flex justify-content-center align-items-center m-2">
        {projects.map((project, idx) => {
          return <ProjectCard key={idx} project={project} />;
        })}
      </div>
    </div>
  );
}