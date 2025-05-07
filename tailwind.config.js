// tailwind.config.js
module.exports = {
  darkMode: ["class"],
    content: [],
    theme: {
      extend: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
            heading: ['Poppins', 'sans-serif'],
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
          'fade-in': 'fade-in 0.3s ease-out',
          'fade-out': 'fade-out 0.3s ease-out',
          'scale-in': 'scale-in 0.2s ease-out',
          'slide-in': 'slide-in 0.4s ease-out',
          'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        }
      },
    },
    plugins: [],
  }
  