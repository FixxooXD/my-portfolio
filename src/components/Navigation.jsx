import React from "react";
import ThemeToggler from "./ThemeToggler";
import { cn } from "@/lib/utils";
import { useScreenDetector } from "./hooks/useMobile";

const Navigation = () => {
  const NavOptions = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const [openMobileNav, setOpenMobileNav] = React.useState(false);
  const { isMobile } = useScreenDetector();

  return (
    <>
      <header
        className={cn(
          "relative flex fixed top-0 w-full z-50 px-4 py-3 transition-all duration-300 bg-secondary/30 backdrop-blur-md"
        )}
      >
        <span className={cn("text-xl text-heading")}>Raj palmal</span>
        <div
          className={cn(
            "hidden md:flex items-center justify-between gap-4 ml-auto mr-4"
          )}
        >
          {NavOptions.map((option) => (
            <a key={option.id} href={`#${option.id}`}>
              {option.name}
            </a>
          ))}
          <ThemeToggler />
        </div>
        <nav className={cn("md:hidden flex justify-end items-center ml-auto")}>
          <ThemeToggler />
          <div onClick={() => setOpenMobileNav(!openMobileNav)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </nav>

        {/*Todo 
         - Set Active change class color and set active link
         - Add smooth scroll to the sections
         - is someone click outside the mobile menu close it
         */}

        {/* Mobile Navigation Menu */}
        {isMobile && openMobileNav && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg shadow-md py-4 animate-slide-in">
            <div className="flex flex-col items-center gap-4">
              {NavOptions.map((option) => (
                <a
                  key={option.id}
                  href={`#${option.id}`}
                  className="text-lg text-heading"
                  onClick={() => setOpenMobileNav(false)}
                >
                  {option.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navigation;
