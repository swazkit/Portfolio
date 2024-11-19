import { Helmet } from "react-helmet";

function AppHelmet() {
  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>Swaz's Portfolio - Web Developer & Designer</title>
      <meta
        name="description"
        content="Showcasing Swaz's expertise in web development and design. Explore creative projects and get in touch for collaborations."
      />
      <meta name="author" content="Swaz" />
      <meta name="keywords" content="portfolio, web development, design, frontend developer, Swaz, HTML, CSS, JavaScript" />

      {/* Open Graph Metadata */}
      <meta property="og:title" content="Swaz's Portfolio" />
      <meta
        property="og:description"
        content="Explore Swaz's web development and design projects. Contact for collaborations!"
      />
      <meta property="og:image" content="https://portfoliome-pied.vercel.app/src/assets/Thumbnail.png" />
      <meta property="og:type" content="website" />

      {/* Twitter Metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Swaz's Portfolio" />
      <meta
        name="twitter:description"
        content="Discover Swaz's creative web development projects and get inspired!"
      />
      <meta name="twitter:image" content="https://portfoliome-pied.vercel.app/twitter-image.jpg" />
      <meta name="twitter:creator" content="@yourTwitterHandle" />

      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />

      {/* Robots */}
      <meta name="robots" content="index, follow" />

      {/* Canonical Link */}
      <link rel="canonical" href="https://portfoliome-pied.vercel.app/" />

      {/* Preload Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;400;700&display=swap"
        rel="stylesheet"
      />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
}

export default AppHelmet;
