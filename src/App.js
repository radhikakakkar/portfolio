import "./App.css";
import About from "./component/AboutMe/About";
import Contact from "./component/Contact/Contact";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Projects from "./component/Projects/Projects";
import Resume from "./component/Resume/Resume";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <About /> */}
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
