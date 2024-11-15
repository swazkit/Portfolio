import { SlGlobe } from "react-icons/sl";
import { IoCodeSlash } from "react-icons/io5";

interface PortfolioTileProps {
    web: string;
    git: string;
    image: string;
    description: string;
  }
  
  const PortfolioTiles = ({ image, description, web, git }: PortfolioTileProps) => (
    <div className="portfolio-tile">
      <img className="portfolio-img" src={image} alt="Portfolio Item" />
      <div className="portfolio-info">
        <p>{description}</p>
        <div className="port-buttons">
          <a href={web}><SlGlobe /></a>
          <a href={git}><IoCodeSlash /></a>      
        </div>
      </div>
    </div>
  );
  
  export default PortfolioTiles;
  