
import { User, GraduationCap, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="section-title" data-animate>About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8">
          <div className="lg:col-span-7" data-animate>
            <div className="glass-card p-6 md:p-8 h-full">
              <p className="text-lg mb-6">
                Hello! I'm <span className="text-blue-light">Nuraly Astanakulov</span>, an aspiring Software Engineer and Data Scientist 
                with a passion for building innovative solutions and extracting meaningful insights from data.
              </p>
              
              <p className="text-lg mb-6">
                Currently pursuing my Bachelor's degree in Computer Science with a focus on Data Science,
                I combine technical skills with analytical thinking to tackle challenging problems.
              </p>
              
              <p className="text-lg">
                My journey in technology is driven by curiosity and a desire to create impactful applications
                that solve real-world problems. I'm particularly interested in machine learning, web development,
                and data visualization.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-5" data-animate>
            <div className="glass-card p-6 md:p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <GraduationCap className="mr-3 text-blue-light" />
                Education
              </h3>
              
              <div className="border-l-2 border-blue pl-4 py-1 mb-6">
                <h4 className="text-lg font-medium">B.Sc. Computer Science (Minor in Data Science)</h4>
                <p className="text-muted-foreground">Constructor University</p>
                <p className="flex items-center mt-1 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  Sep 2023 - Aug 2026
                </p>
                <p className="text-muted-foreground mt-1">Bremen, Germany</p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <User className="mr-3 text-blue-light" />
                  Personal Info
                </h3>
                
                <div className="space-y-3">
                  <p><span className="text-blue-light">Location:</span> Bremen, Germany</p>
                  <p><span className="text-blue-light">Email:</span> nuralyastanakulov@gmail.com</p>
                  <p><span className="text-blue-light">Phone:</span> +4915251978198</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
