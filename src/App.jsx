import Navbar from './Sections/Navbar';
import Hero from './Sections/Hero';
import Feature from './Sections/Feature';
import Trust from './Sections/Trust';
import Testimonial from './Sections/Testimonial';
import Roadmap from './Sections/Roadmap';
import FinalCta from './Sections/FinalCta';
import Footer from './Sections/Footer';

const App = () => {
  return (
    <div className="relative">
      {/* Background Video Container */}
      <div className="fixed inset-0 w-full h-full z-[-1] ">
        <video 
          src="/Videos/cosmic.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Main Content */}
      <Navbar />
      <Hero />
      <Feature />
      <Trust />
      <Testimonial />
      <Roadmap />
      <FinalCta />
      <Footer />
    </div>
  );
};

export default App;
