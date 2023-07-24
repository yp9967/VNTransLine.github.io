import About from "./components/About";
import Contact from "./components/Contact";
import Vendors from "./components/Vendors";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Clients from "./components/Clients";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Clients />
      <Vendors />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
