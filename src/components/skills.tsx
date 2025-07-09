// src/components/Skills.tsx
import figmaLogo from "../assets/figma.svg";
import dockerLogo from "../assets/docker.svg";
import reactLogo from "../assets/react.svg";
import postgresLogo from "../assets/postgresql.svg";
import supabaseLogo from "../assets/supabase.svg";
import nodeLogo from "../assets/node.js.svg";
import githubLogo from "../assets/github.svg";
import nestJsLogo from "../assets/nestjs.svg";
import graphQLLogo from "../assets/graphql.svg";
import n8nLogo from "../assets/n8n.svg";
import flutterpng from "../assets/icon_flutter.png";



type Skill = {
  name: string;
  logo: string;
  url: string;
};

const techStack: Skill[] = [
  { name: "Flutter", logo: flutterpng, url: "https://flutter.dev" },
  { name: "React", logo: reactLogo, url: "https://react.dev" },
  { name: "NestJS", logo: nestJsLogo, url: "https://nestjs.com" },
  { name: "GraphQL", logo: graphQLLogo, url: "https://graphql.org" },
  { name: "PostgreSQL", logo: postgresLogo, url: "https://www.postgresql.org" },
  { name: "n8n", logo: n8nLogo, url: "https://n8n.io" },
  { name: "Docker", logo: dockerLogo, url: "https://www.docker.com" },
  { name: "Supabase", logo: supabaseLogo, url: "https://supabase.com" },
  { name: "Node.js", logo: nodeLogo, url: "https://nodejs.org" },
  { name: "GitHub", logo: githubLogo, url: "https://github.com" },
  { name: "Figma", logo: figmaLogo, url: "https://figma.com" },
];

const Skills = () => (
  <section
    id="skills"
    className="py-20 px-4 bg-white dark:bg-gray-900 text-center text-gray-800 dark:text-gray-100"
  >
    <h2 className="text-3xl font-bold mb-10">Skills</h2>

    <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
      {techStack.map(({ name, logo, url }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 px-8 py-4 group"
        >
          <img
            src={logo}
            alt={name}
            className="h-12 w-12"
            loading="lazy"
          />
          <span className="text-2xl font-semibold group-hover:underline">
            {name}
          </span>
        </a>

      ))}
    </div>
  </section>
);

export default Skills;
