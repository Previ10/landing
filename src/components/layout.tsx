import type { ReactNode } from "react";
import { FaWhatsapp } from "react-icons/fa";  

type Props = { children: ReactNode };

const navItems = [
  { label: "Inicio",    href: "#hero"     },
  { label: "Proyectos", href: "#projects" },
  { label: "Skills",    href: "#skills"   },
  { label: "Contacto",  href: "#contact"  },

];

const Layout = ({ children }: Props) => (
  <>
    {/* Header / Navbar */}
    <header className="fixed inset-x-0 top-0 z-50 bg-gray-900/80 backdrop-blur">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 text-white">
        <span className="text-lg font-semibold">Ignacio Previ</span>

        <ul className="flex gap-6 text-sm">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="hover:text-blue-400 transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>

    {/* Contenido */}
    <main>{children}</main>

    {/* Botón flotante WhatsApp */}
    <a
      href="https://wa.me/543512320184"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat en WhatsApp"
      className="fixed bottom-6 right-6 z-40
                 flex items-center justify-center
                 h-14 w-14 rounded-full
                 bg-green-500 hover:bg-green-600
                 text-white shadow-lg transition"
    >
      {/* Ícono de react-icons */}
      <FaWhatsapp className="h-7 w-7" />
    </a>
  </>
);

export default Layout;
