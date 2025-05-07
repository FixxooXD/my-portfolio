import React from "react";
import { Linkedin, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="py-8 px-4 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground mb-4 md:mb-0">
              © 2025 Raj Palmal. All rights reserved.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://github.com/FixxooXD"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/raj-palmal-a736ab233/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/Raj_FixxooXD"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
