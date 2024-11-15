import './App.css'
import PortfolioTiles from './component/PortfolioTiles.tsx';
import CalculatorImage from './assets/Calculator.png'
import Tenzies from './assets/Tenzies.png'
import Bubble from "./assets/Bubble.io.png"
import { FaDribbble } from "react-icons/fa";
import { FaSquareBehance } from "react-icons/fa6";

interface CustomStyleType {
  [key: string]: number | string;
}

function App() {
  return (
    <>
      <nav className="Navbar">
        <div className="top-bar">
          <h2 className="text-2xl logo"><a href="#">Portfo<span>lio</span></a></h2>
        </div>
        <ul className="navbar-links">
          <li><a className="links" href="#about">About Us</a></li>
          <li><a className="links" href="#services">Services</a></li>
          <li><a className="links" href="#skills">Skills</a></li>
          <li><a className="links" href="#contact">Contact Us</a></li>
        </ul>
        <a href="mailto:swastikraychoudhuri@gmail.com" className="btn-rgb" aria-label="Contact via email"><span>contact</span></a>
      </nav>

      <div className="hero">
        <div className="bubbles">
          {[10, 14, 18, 15, 18, 11, 18, 19, 13, 12, 15, 17, 12, 17, 14, 19, 12, 16].map(i => (
            <span key={i} style={{ '--i': i } as CustomStyleType}></span>
          ))}
        </div>
        <div className="text-port">
          <h4>Hello, my name is</h4>
          <h1>Swa<span>z</span> </h1>
          <h3>I am a <span>Frontend</span> Web <span>Developer</span> <br /> & <span>Designer</span>.</h3>
        </div>
      </div>

      <div>
        <section className="about" id="about">
          <div className="main">
            <div className="liq">
              <div className="shadow"></div>
              <div className="bowl">
                <div className="liquid"></div>
              </div>
            </div>
            <div className="about-text">
              <h1>About Me</h1>
              <h3>Developer <span>& Designer</span></h3>
              <p>I'm a self-taught, passionate Frontend Developer from India. My journey started at 14 with a dream of building my own video game, which led to my love for coding and design. Over the years, I’ve honed my skills in web development, focusing on building intuitive and responsive applications. While my expertise lies in frontend development, I also work with backend technologies, allowing me to create full-stack solutions. I’m constantly exploring new tools and frameworks to bring creative ideas to life.</p>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <h2>Things I love</h2>
          <div className="box">
            <ServiceCard icon="fa-code" title="Frontend" description="Bring your vision to life with our expert frontend development services. We create responsive, intuitive, and visually appealing interfaces that enhance user engagement. Utilizing the latest technologies, we ensure seamless functionality across all devices, providing an exceptional user experience." />
            <ServiceCard icon="fa-magnifying-glass" title="SEO" description="Elevate your website’s visibility with our expert SEO services. We employ strategic techniques to enhance your search engine rankings, increase organic traffic, and connect you with your target audience effectively." />
            <ServiceCard icon="fa-marker" title="Web Design" description="Create visually stunning and highly functional websites tailored to your brand’s needs. We focus on user experience and aesthetic appeal, ensuring that your online presence captivates visitors and drives engagement." />
          </div>
        </section>

        <section className="skillsets" id="skills">
          <h1>Tech I use</h1>
          <div className="Skillsets">
            <div className="Slide">
              {["fa-css3-alt", "fa-js", "fa-bootstrap", "fa-figma", "fa-react", "fa-npm", "fa-git-alt", "fa-node-js", "fa-python", "fa-github", "fa-linux", "fa-java", "fa-vuejs", "fa-wix", "fa-square-behance", "fa-angular", "fa-flutter"].map(icon => (
                <SkillIcon key={icon} icon={icon} />
              ))}
            </div>
          </div>
        </section>

        <section className="Portfolio">
          <h1>Portfolio</h1>
          <div className="portfolio-slider">
            <PortfolioTiles image={CalculatorImage} description="This is a sleek, responsive calculator built using HTML, CSS, and JavaScript. Designed with a focus on simplicity and usability, the calculator handles basic arithmetic operations like addition, subtraction, multiplication, and division." web="https://swazkit.github.io/Calculator/" git="https://github.com/swazkit/Calculator" />
            <PortfolioTiles image={Tenzies} description='Tenzies is a captivating dice-rolling game that challenges players to score points by forming valid combinations. This interactive web application is built with [insert technologies used' web="https://tenzies-game-delta-seven.vercel.app/" git="https://github.com/swazkit/Tenzies-game" />
            <PortfolioTiles image={Bubble} description="Explore the thrill of space exploration in this interactive canvas game! Navigate through a challenging asteroid field, collecting power-ups while avoiding collisions." web="https://swazkit.github.io/Canvas_game/" git="https://github.com/swazkit/Canvas_game" />
          </div>
        </section>

        <section className="contact" id="contact">
          <h3>Let Me Get You A Beautiful Website</h3>
          <a href="mailto:swastikraychoudhuri@gmail.com" className="btn-rgb" aria-label="Contact via email"><span>Contact</span></a>
        </section>

        <Footer />
      </div>
    </>
  );
}

interface ServiceCardProps {
  icon: string;
  title?: string;
  description?: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <div className="card">
    <i className={`fa-solid ${icon}`}></i>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const SkillIcon = ({ icon }: { icon: string }) => (
  <i className={`fa-brands ${icon}`} aria-hidden="true"></i>
);

const Footer = () => (
  <footer>
    <h3>Swastik Ray Choudhuri</h3>
    <p>I'm currently available for freelance work. You can Email me...</p>
    <div className="social">
      <a href="https://www.linkedin.com/in/swastik-ray-choudhuri/" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
      <a href="https://github.com/swazkit" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
      <a href="mailto:swastikraychoudhuri@gmail.com" aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
      <a href="https://dribbble.com/Swaz002"><FaDribbble/></a>
      <a href="https://www.behance.net/swaz"><FaSquareBehance/></a>
    </div>
    <p className="copyright">© 2024 Swastik Ray Choudhuri - All rights reserved</p>
  </footer>
);

export default App;
