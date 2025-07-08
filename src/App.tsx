// src/App.tsx
import { Layout, Hero, About, Projects, Skills, Contact, Footer } from "./core/imports";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;
