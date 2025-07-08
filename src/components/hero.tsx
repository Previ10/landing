import background from "../assets/background.jpg";
import avatar from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 text-center"
    >
      {/* capa 1: imagen de fondo */}
      <img
        src={background}
        alt="background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* capa 2: filtro oscuro + degradado */}
     <div className="absolute inset-0 backdrop-blur-[1px] bg-black/10" />



      {/* capa 3: contenido */}
      <div className="relative z-10 text-white flex flex-col items-center">
        {/* Avatar circular */}
        <img
          src={avatar}
          alt="Ignacio Previgliano"
          className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-white shadow-2xl mb-10"
        />

        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Ignacio Previgliano
        </h1>

        <p className="text-xl md:text-2xl mb-6">
          Desarrollador Full Stack • Flutter • IA • Automatización
        </p>

        <a
          href="#contact"
          className="inline-block bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition"
        >
          Contactarme
        </a>
      </div>
    </section>
  );
};

export default Hero;
