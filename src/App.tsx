import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import "./App.css";
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import PokeApiImg from './Imgs/backgrounds/PokeApi.png'
import Skills from './Components/Skills';
const App = () => {

  return (
    <div>
      <NavBar></NavBar>
      <Home></Home>
      <div className='SkillsDiv'>
        <h1>Skills</h1>
        <Skills></Skills>
      </div>
      
      
      {/* <Projects image={PokeApiImg} projectLink='https://edugiyuu.github.io/Pokemon_API_TypeScript/'></Projects> */}
      
    </div>
  
  );
};

export default App;
