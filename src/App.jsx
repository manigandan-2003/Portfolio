import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import "./styles/App.css";

function App() {

  return (
    <div className="main-container">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;
