import Navbar from "./components/navbar/navbar";

import "./styles/app.css";

import Home from "./components/home/home";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Contacts from "./components/contacts/contacts";
import Certificate from "./components/certificate/certificate";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Certificate />
      <Contacts />
    </div>
  );
}

export default App;
