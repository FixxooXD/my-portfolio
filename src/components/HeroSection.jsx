import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Buttom";

const HeroSection = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex justify-center items-center"
      >
        <div className="section-container">
          <div className="pl-1 sm:pl-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold leading-tight">
                Hi, I'm <span className="text-primary">Raj Palmal</span>
              </h1>
              <div className="flex items-center space-x-2">
                <div className="h-1 w-12 bg-primary rounded-full"></div>
                <p className="text-xl text-foreground/80 font-medium">
                  Fullstack Developer & Tech Enthusiast
                </p>
              </div>
              <p className="text-lg text-muted-foreground max-w-xl">
                I'm passionate about building innovative digital solutions.
                Let's create something amazing together.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  size="lg"
                  className="rounded-full"
                  // onClick={() => {
                  //   const contactSection = document.getElementById("contact");
                  //   if (contactSection) {
                  //     window.scrollTo({
                  //       top: contactSection.offsetTop - 80,
                  //       behavior: "smooth",
                  //     });
                  //   }
                  // }}
                >
                  Get in Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                  // onClick={() => {
                  //   const projectsSection = document.getElementById("projects");
                  //   if (projectsSection) {
                  //     window.scrollTo({
                  //       top: projectsSection.offsetTop - 80,
                  //       behavior: "smooth",
                  //     });
                  //   }
                  // }}
                >
                  View Projects
                </Button>
              </div>
            </div>

            <div
              className={cn(
                "relative flex justify-center items-center",
                "animate-fade-in [animation-delay:300ms]"
              )}
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 blur-2xl animate-pulse-soft"></div>
                <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-background shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="Raj Palmal"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
