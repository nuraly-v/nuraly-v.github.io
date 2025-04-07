
import { Github, ExternalLink } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "BMW 2024 Causal Machine Learning Hackathon",
      description: "Applied causal inference techniques to optimize manufacturing processes. Improved data quality, engineered features, built ensemble predictive models, and handled class imbalance to enhance defect prediction accuracy.",
      technologies: ["Python", "pandas", "scikit-learn", "XGBoost", "LightGBM", "DoWhy", "matplotlib", "seaborn"],
      githubUrl: "https://github.com/nuraly-v/Scanvengers-BMW-Hackathon",
    },
    {
      title: "JobQuest Application Tracker",
      description: "Full-stack web application to manage and visualize job applications with filtering, status monitoring, and analytics. Implemented dynamic dashboard with Recharts and designed modular UI with shadcn/ui.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "React Router"],
      githubUrl: "https://github.com/nuraly-v/JobQuest",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="section-title" data-animate>My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card group hover:translate-y-[-5px]"
              data-animate
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4 hero-text-gradient">{project.title}</h3>
              
              <p className="text-muted-foreground mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-3 py-1 bg-navy/70 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 mt-auto">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
                
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12" data-animate>
          <p className="text-lg text-muted-foreground mb-6">
            These are just a few examples of my work. Check out my GitHub for more projects!
          </p>
          <a 
            href="https://github.com/nuraly-v" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button-primary inline-flex items-center gap-2"
          >
            <Github className="h-5 w-5" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
