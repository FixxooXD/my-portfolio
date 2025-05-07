import React from "react";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  const skills = [
    "ReactJS",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "AWS",
    "Azure",
    "TailwindCSS",
    "Docker",
  ];

  return (
    <>
      <section
        id="about"
        className="py-16 sm:py-24 bg-secondary/30 dark:bg-secondary/10"
      >
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl mb-4 font-heading font-bold leading-tight">
              About Me
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
          </div>

          <div className="pl-4 text-pretty grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={cn(
                "space-y-6",
                "animate-fade-in [animation-delay:200ms]",
                "font-sans"
              )}
            >
              <p className="text-lg">
                I'm passionate about building innovative digital solutions. With
                experience spanning front-end and back-end technologies, I love
                crafting efficient, intuitive applications that solve real-world
                problems.
              </p>
              <p className="text-lg">
                My journey in tech has allowed me to work with diverse teams and
                projects, from startup MVPs to enterprise systems. I'm
                constantly learning new technologies and methodologies to
                enhance my skillset.
              </p>
              <p className="text-lg">
                When not coding, you can find me exploring new tech,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>

            <div
              className={cn(
                "space-y-8",
                "animate-fade-in [animation-delay:400ms]",
                "font-sans"
              )}
            >
              <div>
                <h3 className="heading text-xl mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary dark:bg-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-4">
                <h3 className="heading text-xl mb-4">Areas of Interest</h3>
                <ul className="space-y-2 list-disc">
                  <li>Frontend Architecture</li>
                  <li>Cloud Infrastructure</li>
                  <li>Performance Optimization</li>
                  <li>UI/UX Design</li>
                  <li>Serverless Applications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
