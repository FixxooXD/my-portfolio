import React from "react";
import { cn } from "../lib/utils";
import { Button } from "./ui/Buttom";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Linkedin, Github, Twitter } from "lucide-react";
import { toast, Toaster } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = React.useState({});

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e) => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitting(false);
    toast("✅ sucess", {
      description: "Your message has been sent successfully!",
      action: {
        label: "Close",
        onClick: () => toast.dismiss(),
      },
    });
  };

  return (
    <>
      <section id="contact" className="py-16 sm:py-24">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="heading text-3xl sm:text-4xl mb-4">Get In Touch</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a project in mind or want to collaborate? Feel free to reach
              out!
            </p>
          </div>

          <div className="flex flex-col-reverse md:flex-row px-12 justify-around gap-24">
            <div
              className={cn(
                "space-y-8",
                "animate-fade-in [animation-delay:200ms]"
              )}
            >
              <h3 className="text-2xl font-heading font-bold">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-muted-foreground">+91 9668525514</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">
                      rajpalmal40@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">Bangalore, India</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-3">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/raj-palmal-a736ab233/"
                    target="_blank"
                    className="bg-background hover:bg-primary hover:text-primary-foreground p-3 rounded-full border"
                  >
                    <Linkedin />
                  </a>
                  <a
                    href="https://github.com/FixxooXD/"
                    target="_blank"
                    className="bg-background hover:bg-primary hover:text-primary-foreground p-3 rounded-full border"
                  >
                    <Github />
                  </a>
                  <a
                    href="https://x.com/Raj_FixxooXD"
                    target="_blank"
                    className="bg-background hover:bg-primary hover:text-primary-foreground p-3 rounded-full border"
                  >
                    <Twitter />
                  </a>
                </div>
              </div>
            </div>

            <div
              className={cn(
                "bg-card  rounded-lg p-8 shadow-sm",
                "animate-fade-in [animation-delay:400ms]",
                " md:w-[60%] lg:w-[40%]"
              )}
            >
              <h3 className="text-2xl font-heading font-bold mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="I'd like to discuss a project..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
