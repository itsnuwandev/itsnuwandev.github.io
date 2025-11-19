import { ReactNode, useState, useEffect } from "react";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import ScrollToTop from "./ScrollToTop";
import ParticleBackground from "./ParticleBackground";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-brand-dark relative">
      {/* Global Particle Background - Always present */}
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
      </div>

      <Navbar />
      <main className="flex-grow relative z-10">
        {loading ? (
          <div className="flex items-center justify-center h-screen relative z-20">
            <div className="relative w-24 h-24">
              <motion.div
                className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-t-brand-purple border-r-transparent border-b-transparent border-l-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute top-2 left-2 w-20 h-20 rounded-full border-4 border-l-teal-500 border-r-transparent border-t-transparent border-b-transparent"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="min-h-screen relative z-10"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        )}
      </main>

      <footer className="w-full py-12 border-t border-muted relative z-10 backdrop-blur-md bg-black/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* About Section */}
            <div className="md:col-span-2">
              <div className="text-2xl font-bold text-brand-purple mb-4">
                NB
              </div>
              <p className="text-muted-foreground text-sm max-w-md mb-4">
                Building innovative digital solutions with a focus on clean,
                efficient code and exceptional user experiences.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/itsnuwandev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-brand-purple transition-colors bg-secondary p-2 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/nuwan-bandara-a87300309/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-brand-purple transition-colors bg-secondary p-2 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </motion.a>
                <motion.a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-brand-purple transition-colors bg-secondary p-2 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </motion.a>
                <motion.a
                  href=""
                  className="text-muted-foreground hover:text-brand-purple transition-colors bg-secondary p-2 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </motion.a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-foreground font-semibold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-muted-foreground hover:text-brand-purple transition-colors text-sm"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-muted-foreground hover:text-brand-purple transition-colors text-sm"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    className="text-muted-foreground hover:text-brand-purple transition-colors text-sm"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-muted-foreground hover:text-brand-purple transition-colors text-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-foreground font-semibold mb-4">
                Technologies
              </h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-muted-foreground text-sm">
                    React.js
                  </span>
                </li>
                <li>
                  <span className="text-muted-foreground text-sm">Vue.js</span>
                </li>
                <li>
                  <span className="text-muted-foreground text-sm">Laravel</span>
                </li>
                <li>
                  <span className="text-muted-foreground text-sm">
                    Spring Boot
                  </span>
                </li>
                <li>
                  <span className="text-muted-foreground text-sm">Java</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-muted/20 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-muted-foreground text-sm mb-4 md:mb-0">
                ©{new Date().getFullYear()} itsnuwandev. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a
                  href="/privacy"
                  className="text-muted-foreground hover:text-brand-purple transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="text-muted-foreground hover:text-brand-purple transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
};

export default Layout;
