import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import {
  About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas,
} from './components';

function App() {
  const [renderComputer, setRenderComputer] = React.useState(true);
  const [renderStars, setRenderStars] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 1200) {
        setRenderComputer(false);
      } else {
        setRenderComputer(true);
      }
      if (scrollPosition > 1800) {
        setRenderStars(true);
      } else {
        setRenderStars(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero renderComputer={renderComputer} />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          {renderStars && <StarsCanvas />}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
