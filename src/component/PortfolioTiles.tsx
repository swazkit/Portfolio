interface PortfolioTileProps {
    image: string;
    description: string;
  }
  
  const PortfolioTiles = ({ image, description }: PortfolioTileProps) => (
    <div className="portfolio-tile">
      <img className="portfolio-img" src={image} alt="Portfolio Item" />
      <div className="portfolio-info">
        <p>{description}</p>
      </div>
    </div>
  );
  
  export default PortfolioTiles;
  