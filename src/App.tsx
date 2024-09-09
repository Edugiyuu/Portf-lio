import "./App.css";
import NavBar from './Components/NavBar';
import Home from './Components/Home';

import Skills from './Components/Skills';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Services from './Components/Services';
const App = () => {

  return (
    <div >
      <NavBar></NavBar>
      <Home></Home>
      <div className='SkillsDiv'>
        
        <About></About>
        <Skills></Skills>
        <Services></Services>
        <Projects></Projects>
        <Contact></Contact>
      </div>
      
      
      {/* <Projects image={PokeApiImg} projectLink='https://edugiyuu.github.io/Pokemon_API_TypeScript/'></Projects> */}
      
    </div>
  
  );
};

export default App;
