// src/App.tsx
import { Layout, Hero, About, Projects, Skills, Contact } from "./core/imports";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
}

export default App;
