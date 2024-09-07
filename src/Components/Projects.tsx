
import PokeApiImg from '../Imgs/backgrounds/PokeApi.png'
import Project from './Project'
import ProjectBg from '../Imgs/backgrounds/Projetos3.png'
import '../Styles/Projects.css'

const Projects = () => {
  return (
    <section id="projects" >
      <div className='AboutTheProjects'>
        <img src={ProjectBg} alt="" />
      </div>

      <div className='AllTheProjects'>

        <Project image={PokeApiImg} projectLink='https://edugiyuu.github.io/Pokemon_API_TypeScript/'></Project>
        <Project image={PokeApiImg} projectLink='https://edugiyuu.github.io/Pokemon_API_TypeScript/'></Project>
        <Project image={PokeApiImg} projectLink='https://edugiyuu.github.io/Pokemon_API_TypeScript/'></Project>
        <Project image={PokeApiImg} projectLink='https://edugiyuu.github.io/Pokemon_API_TypeScript/'></Project>
        <Project image={PokeApiImg} projectLink='https://edugiyuu.github.io/Pokemon_API_TypeScript/'></Project>

      </div>

    </section>
  )
}

export default Projects