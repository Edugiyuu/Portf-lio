import '../Styles/Home.css';
import FotoPerfil from '../Imgs/Foto de perfil.jpeg';

const Home = () => {
  const toProjects = () => {
    const projects = document.getElementById('projects');
    if (projects) {
      projects.scrollIntoView();
    }
  };

  return (
    <section id="home">
      <div className="SobreHome">
        <p>Olá</p>
        {/* <h1>Eu me chamo Eduardo, mas pode me chamar só de edu</h1> */}
        <h1>Eu me chamo <span style={{color:'#21d421'}}>Eduardo</span>, mas pode me chamar só de <span style={{color:'#21d421'}}>edu</span> :)</h1>
        <button onClick={toProjects}>Meus Projetos</button>
      </div>

      <div className="ImgHome">
        <img src={FotoPerfil}/>
      </div>
    </section>
  );
};

export default Home;
