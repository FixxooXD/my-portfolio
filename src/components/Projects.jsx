import React from "react";
import { cn } from "../lib/utils";
import { Button } from "./ui/Buttom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/Card";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Quick Convert",
      description:
        "A file converter for Word, Excel, and images to PDF with auto-delete and Docker deployment.",
      techStack: [
        "React",
        "TypeScript",
        "LibreOffice",
        "Node.js",
        "Express",
        "Docker",
      ],
      github: "https://github.com/FixxooXD/Quick-Convert",
      demo: "https://quick-converter-ver-1.onrender.com/",
    },
    {
      id: 2,
      title: "Always On Timer Clock Browser Extension",
      description:
        "A Chrome extension that displays a customizable countdown timer on new tabs.",
      techStack: ["React", "Vite", "Aceternity UI", "Chrome Extension APIs"],
      github: "https://github.com/FixxooXD/Always-On-Timer-chrome-Extension",
      demo: "#",
    },
    {
      id: 3,
      title: "Case Converter",
      description:
        "A text converter for changing case styles with word and character counters.",
      techStack: ["HTML", "Vanilla JS", "Tailwind CSS"],
      github: "https://github.com/FixxooXD/Case-Converter",
      demo: "https://fixxooxd.github.io/Case-Converter/",
    },
  ];

  return (
    <>
      <section id="projects" className="py-16 sm:py-24 px-4  sm:px-10 border">
        <div className="section-container">
          <div className="max-w-xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="heading text-3xl sm:text-4xl mb-4">
              Featured Projects
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
            <p className="mt-4 text-lg text-muted-foreground">
              Here are some of my recent projects that showcase my skills and
              interests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={cn(
                  "overflow-hidden backdrop-blur-sm border border-border/50 transition-all duration-300 hover:shadow-md hover:shadow-primary/5",
                  "animate-fade-in [animation-delay:var(--delay)]"
                )}
                style={{ "--delay": `${(index + 1) * 150}ms` }}
              >
                <CardHeader className="">
                  <CardTitle className="text-lg font-heading">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="tech-stack bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary dark:bg-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
