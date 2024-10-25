
import PokeApiImg from '../Imgs/backgrounds/PokeApi.png'
import Project from './Project'
import '../Styles/Projects.css'
import ZeldaApi from '../Imgs/backgrounds/image.png'

const Projects = () => {
  return (
    <section id="projects" >
      <div className='AboutTheProjects'>
        <h1>Projetos</h1>
        <p>Aqui tem alguns dos meus projetos</p>
      </div>

      <div className='AllTheProjects'>

        <Project image={PokeApiImg} projectLink='https://edugiyuu.github.io/Pokemon_API_TypeScript/'></Project>
        <Project image={ZeldaApi} projectLink=''></Project>
      
      </div>

    </section>
  )
}

export default Projects