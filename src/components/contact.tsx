const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Contacto</h2>
      <p className="mb-4">¿Querés trabajar conmigo o tenés un proyecto?</p>
      <a
        href="mailto:ignacioprevi@gmail.com"
        className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition"
      >
        Enviame un mail
      </a>
    </section>
  );
};

export default Contact;
