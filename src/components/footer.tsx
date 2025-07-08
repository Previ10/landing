import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";

const SOCIALS = [
  {
    href: "https://www.instagram.com/nacho_previ/",
    label: "Instagram",
    Icon: FaInstagram,
    color: "text-pink-500 group-hover:text-pink-400",
  },
  {
    href: "https://www.linkedin.com/in/ignacio-previgliano-bbb5a224a",
    label: "LinkedIn",
    Icon: FaLinkedin,
    color: "text-blue-500 group-hover:text-blue-400",
  },
  {
    href: "https://wa.me/5493511234567",
    label: "WhatsApp",
    display: "549 351 123 4567",      
    Icon: FaWhatsapp,
    color: "text-green-500 group-hover:text-green-400",
  },
  {
    href: "ignaprevi@gmail.com",
    label: "E-mail",
    Icon: FaEnvelope,
    color: "text-yellow-400 group-hover:text-yellow-300",
  },
  {
    href: "https://github.com/Previ10",
    label: "GitHub",
    Icon: FaGithub,
    color: "text-gray-400 group-hover:text-gray-300",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto flex flex-col items-center gap-8 px-4">
        {/* Título */}
        <h3 className="text-xl font-semibold">Conectemos en mis redes</h3>

        {/* Enlaces sociales */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6">
          {SOCIALS.map(({ href, label, Icon, color, display }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-sm sm:text-base transition"
            >
              <Icon className={`text-2xl sm:text-3xl ${color}`} />

              {/* Nombre de la red */}
              <span className="font-medium group-hover:underline">
                {label}
              </span>

              {/* URL visible (o display personalizado) */}
              <span className="text-xs sm:text-sm text-gray-400 break-all">
                {display ?? href}
              </span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} Ignacio Previ. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
