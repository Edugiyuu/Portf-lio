import FotoPerfil from '../Imgs/user.png';
import '../Styles/About.css';
import ProjectBg from '../Imgs/backgrounds/PersonaGirl.png';

const About = () => {
  return (
    <section id="about">
      <div className="profile-picture">
        <img src={FotoPerfil} alt="Foto de Perfil" />
      </div>
      <div className="AboutMe">
        <img src={ProjectBg} alt="Imagem de Fundo" className="background-img" />
        <div className="about-content">
          <h1>Sobre Mim</h1>
          <h2>"Você só melhora praticando"</h2>
          <p>Nome: <span>Eduardo</span></p>
          <p>Data de nascimento: <span>25/07/2006</span></p>
          <p>Email: <span>edupaz077@gmail.com</span></p>
          <p>Telefone: <span>+55 11 0000-0000</span></p>
        </div>
      </div>
    </section>
  );
}

export default About;
