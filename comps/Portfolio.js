import ProjectCard from "./ProjectCard";
/**
 *
 * @param {Array} Projects like [project, ...]
 * project = {title, description, technologies, page, github, image: {height, width, url)}
 * @returns {JSX} Portfolio component with populated ProjectCard components.
 */
export default function Portfolio({ projects }) {

  return (
    <div id="portfolio" className="container portfolio">
      <h2 className="text-center mb-5">Portfolio Projects</h2>
      <div className="row d-flex justify-content-center align-items-center px-5">
        {projects.map((project, idx) => {
          return <ProjectCard key={idx} project={project} />;
        })}
      </div>
    </div>
  );
}