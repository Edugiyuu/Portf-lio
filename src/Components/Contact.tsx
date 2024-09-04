import GitHub from '../Imgs/GitHub.png';
import LinkedIn from '../Imgs/LinkedIn.png';
import '../Styles/Contact.css'
const Contact = () => {
  return (
    <section id='contact'>
      <h1>Contato</h1>
      <div className='contactIcons'>
        <a href="https://github.com/Edugiyuu" target="_blank" rel="noopener noreferrer">
          <img src={GitHub} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/eduardo-santos-lima-da-paz-4a024125b/" target="_blank" rel="noopener noreferrer">
          <img src={LinkedIn} alt="LinkedIn" />
        </a>
      </div>
    </section>
  );
}

export default Contact;