import '../Styles/Home.css';
import FotoPerfil from '../Imgs/Foto de perfil2.png';


const Home = () => {
  const toProjects = () => {
    const projects = document.getElementById('projects');
    if (projects) {
      projects.scrollIntoView();
    }
  };
  const toServices = () => {
    const services = document.getElementById('services');
    if (services) {
      services.scrollIntoView();
    }
  };

  return (
    <section id="home">
      <div className="SobreHome">
        <p>Olá, eu sou um <span style={{color:'#21d421'}}>DEV</span></p>

        <h1>Eu me chamo <span style={{color:'#21d421'}}>Eduardo</span>, mas pode me chamar só de <span style={{color:'#21d421'}}>edu</span> :)</h1>
        <button className='buttonProjects' onClick={toProjects}>Meus Projetos</button>
        <button className='buttonServices' onClick={toServices}>Serviços</button>
      </div>

      <div className="ImgHome">
        <img src={FotoPerfil}/>
      </div>
    </section>
  );
};

export default Home;
