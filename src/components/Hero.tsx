
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/hero-poster.jpg"
        >
          <source src="/barbershop-hero.mp4" type="video/mp4" />
          <source src="/barbershop-hero.webm" type="video/webm" />
        </video>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-hero-gradient" />
        
        {/* Grain Texture */}
        <div className="grain-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-space font-light text-white mb-6 leading-tight hero-text-shadow">
            Precision Grooming
            <br />
            <span className="font-normal">for the Modern</span>
            <br />
            <span className="italic font-light">Gentleman</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 font-light leading-relaxed hero-text-shadow max-w-2xl mx-auto">
            Walk in with confidence. Leave unforgettable.
          </p>
          
          <Link
            to="/booking"
            className="premium-button text-xl px-12 py-5 shadow-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Book Appointment
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
