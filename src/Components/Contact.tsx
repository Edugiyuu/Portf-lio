import GitHub from '../Imgs/GitHub.png';
import LinkedIn from '../Imgs/LinkedIn.png';
import Itch from '../Imgs/ItchIo.png'
import '../Styles/Contact.css'
const Contact = () => {
  return (
    <section id='contact'>
      <h1>Contato</h1>
      <div className='contactIcons'>
        <a href="https://github.com/Edugiyuu" target="_blank">
          <img src={GitHub} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/eduardo-santos-lima-da-paz-4a024125b/" target="_blank">
          <img src={LinkedIn} alt="LinkedIn" />
        </a>
        <a href="https://edu-mayash.itch.io/" target="_blank">
          <img src={Itch} alt="LinkedIn" />
        </a>

      </div>
      <div>
        <footer>Copyright ©2024 Todos os direitos reservados por Edu</footer>
      </div>

    </section>

  );
}

export default Contact;