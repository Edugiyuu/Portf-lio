import '../Styles/Projects.css'
interface Project{
        image: string,
        projectLink: string
    }
const Projects = ({ image, projectLink }:Project) => {

 
    return (
      <section id="projects">
        <div className='Project'>
          <img src={image} />
          <a href={projectLink}>Ver Projeto</a>
        </div>
      </section>
    );
  };
  
  export default Projects;