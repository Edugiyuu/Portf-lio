
import PokeApiImg from '../Imgs/backgrounds/PokeApi.png'
import Project from './Project'
import '../Styles/Projects.css'

const Projects = () => {
  return (
    <section id="projects" >
      <div className='AboutTheProjects'>
        <h1>Projects</h1>
        <p>Aqui tem alguns dos meus projetos</p>
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