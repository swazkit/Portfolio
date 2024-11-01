import './App.css'

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
        <a href="mailto:swastikraychoudhuri@gmail.com" className="btn-rgb"><span>contact</span></a>
      </nav>
      <div className="hero">
        
        <div className="bubbles">       
        <div className="bubbles">
          <span style={{ '--i': 16 } as CustomStyleType}></span>
          <span style={{ '--i': 14 } as CustomStyleType}></span>
          <span style={{ '--i': 18 } as CustomStyleType}></span>
          <span style={{ '--i': 15 } as CustomStyleType}></span>
          <span style={{ '--i': 18 } as CustomStyleType}></span>
          <span style={{ '--i': 11 } as CustomStyleType}></span>
          <span style={{ '--i': 18 } as CustomStyleType}></span>
          <span style={{ '--i': 19 } as CustomStyleType}></span>
          <span style={{ '--i': 13 } as CustomStyleType}></span>
          <span style={{ '--i': 12 } as CustomStyleType}></span>
          <span style={{ '--i': 15 } as CustomStyleType}></span>
          <span style={{ '--i': 17 } as CustomStyleType}></span>
          <span className="mbub" style={{ '--i': 12 } as CustomStyleType}></span>
          <span className="mbub" style={{ '--i': 17 } as CustomStyleType}></span>
          <span className="mbub" style={{ '--i': 14 } as CustomStyleType}></span>
          <span className="mbub" style={{ '--i': 19 } as CustomStyleType}></span>
          <span className="mbub" style={{ '--i': 12 } as CustomStyleType}></span>
          <span className="mbub" style={{ '--i': 16 } as CustomStyleType}></span>
        </div>
              
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
            <p>I'm a self-taught, passionate Frontend Developer from India. My journey started at 14 with a dream of building my own video game, which led to my love for coding and design. Over the years, I’ve honed my skills in web development, focusing on building intuitive and responsive applications. While my expertise lies in frontend development, I also work with backend technologies, allowing me to create full-stack solutions. I’m constantly exploring new tools and frameworks to bring creative ideas to life</p>
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
    <SkillIcon icon="fa-css3-alt" />
    <SkillIcon icon="fa-js" />
    <SkillIcon icon="fa-bootstrap" />
    <SkillIcon icon="fa-figma" />
    <SkillIcon icon="fa-react" />
    <SkillIcon icon="fa-npm" />
    <SkillIcon icon="fa-git-alt" />
    <SkillIcon icon="fa-node-js" />
    <SkillIcon icon="fa-python" />
    <SkillIcon icon="fa-github" />
    <SkillIcon icon="fa-linux" />
    <SkillIcon icon="fa-java" />
    <SkillIcon icon="fa-vuejs" />
    <SkillIcon icon="fa-wix" />
    <SkillIcon icon="fa-square-behance" />
    <SkillIcon icon="fa-angular" />
    <SkillIcon icon="fa-flutter" />
    
    <SkillIcon icon="fa-css3-alt" />
    <SkillIcon icon="fa-js" />
    <SkillIcon icon="fa-bootstrap" />
    <SkillIcon icon="fa-figma" />
    <SkillIcon icon="fa-react" />
    <SkillIcon icon="fa-npm" />
    <SkillIcon icon="fa-git-alt" />
    <SkillIcon icon="fa-node-js" />
    <SkillIcon icon="fa-python" />
    <SkillIcon icon="fa-github" />
    <SkillIcon icon="fa-linux" />
    <SkillIcon icon="fa-java" />
    <SkillIcon icon="fa-vuejs" />
    <SkillIcon icon="fa-wix" />
    <SkillIcon icon="fa-square-behance" />
    <SkillIcon icon="fa-angular" />
    <SkillIcon icon="fa-flutter" />
  </div>
</div>
        
      </section>

      <section className="Portfolio">
        <h1>Portfolio</h1>
        
      </section>

      <section className="contact" id="contact">
        <h3>Let Me Get You A Beautiful Website</h3>
        <a href="mailto:swastikraychoudhuri@gmail.com" className="btn-rgb"><span>Contact</span></a>
      </section>

      <Footer />
    </div>

    </>
  )
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

const SkillIcon = ({ icon }: ServiceCardProps) => (
  <i className={`fa-brands ${icon}`}></i>
);

const Footer = () => (
  <footer>
    <h3>Swastik Ray Choudhuri</h3>
    <p>I'm currently available for freelance work. You can Email me...</p>
    <div className="social">
      <a href="https://www.linkedin.com/in/swastik-ray-choudhuri/"><i className="fa-brands fa-linkedin-in"></i></a>
      <a href="https://github.com/swazkit"><i className="fa-brands fa-github"></i></a>
      <a href="mailto:swastikraychoudhuri@gmail.com"><i className="fa-solid fa-envelope"></i></a>
    </div>
    <p className="copyright">© 2024 Swastik Ray Choudhuri - All rights reserved</p>
  </footer>
);


export default App
