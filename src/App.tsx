import "./App.css";
import Navbar from "./components/navbar/navbar";
import About from "./components/pages/about/about";
import Certificates from "./components/pages/certificates/certificates";
import Contacts from "./components/pages/contacts/contacts";
import Home from "./components/pages/home/home";
import Projects from "./components/pages/projects/projects";
import Skills from "./components/pages/skills/skills";

function App() {
  return (
    <div className="application">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Certificates />
      <Contacts />
    </div>
  );
}

export default App;
