import FotoPerfil from '../Imgs/Foto de perfil.jpeg';
import '../Styles/About.css';

const About = () => {
  return (
    <section id="about">
      <div className="profile-picture">
        <img src={FotoPerfil} style={{borderRadius:'200px'}} alt="Foto de Perfil" />
      </div>
      <div className="AboutMe">
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
