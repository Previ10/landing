import type { Project } from "../components/projects";
// src/core/index.ts
export { default as ProjectCard } from "../components/project_card";


type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <article className="bg-gray-900 rounded-xl shadow-md overflow-hidden text-white flex flex-col">
      {/* imagen */}
      <img
        src={project.image}
        alt={project.title}
        className="h-48 w-full object-cover"
      />

      {/* texto */}
      <div className="p-6 flex flex-col gap-3 grow">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-300 flex-1">{project.description}</p>

        <a
          href="#contact"
          className="self-start mt-2 text-sm font-medium text-teal-400 hover:underline"
        >
          Leer más
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
