
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = [
    "Software Engineer",
    "Data Scientist",
    "Problem Solver",
    "Innovator"
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 80 : 150;
    const deleteSpeed = 50;
    const pauseDelay = 1500;
    
    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (!isDeleting) {
        // Typing
        if (typedText.length < currentPhrase.length) {
          setTypedText(currentPhrase.substring(0, typedText.length + 1));
        } else {
          // Start deleting after pause
          setTimeout(() => setIsDeleting(true), pauseDelay);
          return;
        }
      } else {
        // Deleting
        if (typedText.length > 0) {
          setTypedText(currentPhrase.substring(0, typedText.length - 1));
        } else {
          // Move to next phrase
          setIsDeleting(false);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
          return;
        }
      }
    };
    
    const timer = setTimeout(() => {
      type();
    }, isDeleting ? deleteSpeed : typeSpeed);
    
    return () => clearTimeout(timer);
  }, [typedText, currentPhraseIndex, isDeleting, phrases]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-animate]').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue/20 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-dark/20 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 md:px-8 py-16 flex flex-col items-center justify-center text-center z-10 relative">
        <div className="mb-8" data-animate>
          <p className="text-blue-light font-mono mb-2">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="hero-text-gradient">Nuraly Astanakulov</span>
          </h1>
          <div className="flex items-center justify-center h-10 md:h-14">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-medium text-gray-300">
              I'm <span className="text-blue-light after:content-[''] after:inline-block after:w-0.5 after:h-5 after:bg-blue-light after:ml-1 after:animate-pulse-slow">{typedText}</span>
            </h2>
          </div>
        </div>
        
        <p className="max-w-2xl text-muted-foreground text-lg md:text-xl mb-10 stagger-1" data-animate>
          Aspiring Software Engineer & Data Scientist passionate about building impactful solutions
          and deriving insights from data.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 stagger-2" data-animate>
          <a href="#projects" className="button-primary">
            View My Work
          </a>
          <a href="#contact" className="px-6 py-3 border border-blue hover:bg-secondary text-white rounded-md transition-colors duration-300 font-medium">
            Get In Touch
          </a>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce p-2"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 text-blue" />
      </a>
    </section>
  );
};

export default Hero;
