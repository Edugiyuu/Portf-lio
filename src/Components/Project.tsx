import '../Styles/Projects.css'
interface Project{
        image: string,
        projectLink: string
    }
const Project = ({ image, projectLink }:Project) => {
    return (
        <div className='Project'>
          <img src={image} />
          <a href={projectLink}>Ver Projeto</a>
        </div>
    );
  };
  
  export default Project;