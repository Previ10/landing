import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const navItems = [
  { label: "Inicio",   href: "#hero"     },
  { label: "Sobre mí", href: "#about"    },
  { label: "Proyectos",href: "#projects" },
  { label: "Skills",   href: "#skills"   },
  { label: "Contacto", href: "#contact"  },
];

const Layout = ({ children }: Props) => {
  return (
    <>
      {/* Header / Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 bg-gray-900/80 backdrop-blur">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 text-white">
          <span className="text-lg font-semibold">Ignacio Previ</span>

          <ul className="flex gap-6 text-sm">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="hover:text-blue-400 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Empuja el contenido para que no quede oculto tras el header */}
      <main className="">{children}</main>
    </>
  );
};

export default Layout;
