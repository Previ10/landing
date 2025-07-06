const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-800 to-purple-900 text-white flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">Ignacio Previ</h1>
      <p className="text-xl md:text-2xl mb-6">Desarrollador Full Stack • Flutter • IA • Automatización</p>
      <a href="#contact" className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition">
        Contactarme
      </a>
    </section>
  );
};

export default Hero;
