
import { useEffect, useState } from 'react';

type SkillCategory = {
  title: string;
  skills: { name: string; level: number }[];
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "C++", level: 75 },
        { name: "C", level: 70 },
        { name: "HTML/CSS", level: 85 },
        { name: "Kotlin", level: 65 },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", level: 85 },
        { name: "NumPy", level: 90 },
        { name: "Pandas", level: 90 },
        { name: "Next.js", level: 75 },
        { name: "Django", level: 70 },
        { name: "Scikit-learn", level: 85 },
        { name: "Matplotlib", level: 80 },
      ],
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "PostgreSQL", level: 75 },
        { name: "Firebase", level: 80 },
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 65 },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 md:py-24 bg-navy-dark/50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="section-title" data-animate>My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="glass-card p-6 md:p-8 hover:border-blue-light/30 transition-all duration-300"
              data-animate
            >
              <h3 className="text-xl font-semibold mb-6 text-blue-light">{category.title}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 glass-card p-6 md:p-8" data-animate>
          <h3 className="text-xl font-semibold mb-6 text-blue-light">Other Skills & Tools</h3>
          
          <div className="flex flex-wrap gap-3">
            {["Linux", "Windows", "PyCharm", "IntelliJ IDEA", "Adobe Photoshop", "Microsoft Office", "Canva"].map((tool, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-secondary rounded-full text-sm hover:bg-secondary/80 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
