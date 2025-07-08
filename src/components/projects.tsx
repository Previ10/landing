import { ProjectCard } from "../components/project_card";

import cophisecImg   from "../assets/cophisec.png";
import ingenierosImg from "../assets/ingenieros.png";
import laLigaPadel from "../assets/laLiga2.png";
import woki from "../assets/wokI.png";
import n8n from "../assets/n8n.png";
import stacks from "../assets/stacks.png"

const Projects = () => (
  <section
    id="projects"
    className="relative py-20 px-4 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-center"
  >
    {/* ───── Fondo BLUR (pseudo-layer) ───── */}
    <div
      className="absolute inset-0 -z-10 bg-cover bg-center blur-lg opacity-20"
      style={{ backgroundImage: `url(${stacks})` }} // Corregir la sintaxis para usar la ruta de la imagen
    />

    {/* Contenido */}
    <h2 className="text-3xl font-bold mb-10">Algunos de mis proyectos</h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {projects.map((proj) => (
        <ProjectCard key={proj.id} project={proj} />
      ))}
    </div>
  </section>
);

export default Projects;
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;         
}

export const projects: Project[] = [
  {
    id: "cophisec",
    title: "COPHISEC",
    description:
      "Sistema completo de visado profesional con Flutter Web y backend NestJS + GraphQL.",
    image: cophisecImg,
  },
  {
    id: "liga-padel",
    title: "Liga de Pádel",
    description:
      "App para gestión de torneos en tiempo real, desarrollada en Flutter + Firebase. Funciona en iOS y Android",
    image: laLigaPadel,
  },
  {
    id: "Col-ing",
    title: "Colegio de Ingenieros",
    description:
      "Sistema completo de gestion tareas profesionales con Flutter Web y backend NestJS + GraphQL.",
    image:ingenierosImg,
  },
  {
    id: "woki-reserva",
    title: "Woki App",
    description:
       "App para gestión de reservas de restaurantes utilizando geolocalizacion de maps, Flutter + Firebase. Funciona en iOS y Android",
    image:woki,
  },
  {
    id: "n8n-flows",
    title: "n8n workflows",
    description:
       "Automatización de tareas repetitivas con n8n, creando flujos personalizados para optimizar procesos.",
    image:n8n,
  },
];