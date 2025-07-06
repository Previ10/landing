const Skills = () => {
  return (
    <section className="py-20 px-4 bg-white text-center text-gray-800">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {["Flutter", "React", "NestJS", "GraphQL", "PostgreSQL", "n8n", "Docker"].map(skill => (
          <span key={skill} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
