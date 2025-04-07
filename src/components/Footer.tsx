
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-8 bg-navy-dark border-t border-navy">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Neo. All rights reserved.
          </p>
        </div>
        
        <div className="mt-4 md:mt-0 flex items-center">
          <p className="text-sm text-muted-foreground mr-4">
            Designed & Built with 💙
          </p>
          
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-blue/20 flex items-center justify-center hover:bg-blue/30 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
