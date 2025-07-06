const Projects = () => {
  return (
    <section className="py-20 px-4 bg-gray-100 text-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-6">Proyectos</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-2">COPHISEC</h3>
          <p>Sistema completo de visado profesional con Flutter Web y backend en NestJS + GraphQL.</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-2">Liga de Pádel</h3>
          <p>App para gestión de torneos en tiempo real, desarrollada en Flutter + Firebase.</p>
        </div>
        {/* Agregá más */}
      </div>
    </section>
  );
};

export default Projects;
