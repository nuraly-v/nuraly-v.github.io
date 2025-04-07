
  import { useState } from 'react';
  import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
  import { useToast } from '@/components/ui/use-toast';

  const Contact = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        
        setIsSubmitting(false);
      }, 1500);
    };

    return (
      <section id="contact" className="py-20 md:py-24 bg-navy-dark/50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="section-title" data-animate>Get In Touch</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
            <div className="lg:col-span-5" data-animate>
              <div className="glass-card p-6 md:p-8 h-full">
                <h3 className="text-2xl font-semibold mb-6 hero-text-gradient">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-blue-light mt-1 mr-4" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a 
                        href="mailto:nuralyastanakulov@gmail.com" 
                        className="text-muted-foreground hover:text-blue-light transition-colors"
                      >
                        nuralyastanakulov@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-blue-light mt-1 mr-4" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <a 
                        href="tel:+4915251978198" 
                        className="text-muted-foreground hover:text-blue-light transition-colors"
                      >
                        +49 15251 978198
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-light mt-1 mr-4" />
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-muted-foreground">
                        Bremen, Germany
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h4 className="font-medium mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/nuraly-v" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-navy flex items-center justify-center hover:bg-blue/20 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/nuraly-v/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-navy flex items-center justify-center hover:bg-blue/20 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7" data-animate>
              <div className="glass-card p-6 md:p-8 h-full">
                <h3 className="text-2xl font-semibold mb-6 hero-text-gradient">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-navy-dark border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-dark transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-navy-dark border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-dark transition-all"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-navy-dark border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-dark transition-all resize-none"
                      placeholder="Your message"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`button-primary w-full flex items-center justify-center gap-2 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Contact;
