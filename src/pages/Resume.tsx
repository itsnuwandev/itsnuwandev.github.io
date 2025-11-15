import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import PrintableResume from "@/components/PrintableResume";
import SkillsSection from "@/components/SkillsSection";
import {
  Briefcase,
  GraduationCap,
  Code,
  Award,
  CheckCircle2,
  Brain,
  Cpu,
  Database,
  Globe,
  GitBranch,
  Palette,
  Wrench,
  Target,
  Bot,
} from "lucide-react";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("skills");

  const education = [
    {
      institution:
        "Sri Lanka Institute of Advanced Technological Education (SLIATE), Sri Lanka",
      degree: "Higher National Diploma in Information Technology",
      field: "Information Technology",
      duration: "2024 - 2024",
      gpa: "3.6/4.0",
      location: "Kandy, Sri Lanka",
    },
  ];

  const experience = [
    {
      position: "Software Developer",
      company: "Softmaster Technologies Pvt Ltd",
      duration: "January 2025 - Present",
      description:
        "Developing and maintaining desktop applications using Java, focusing on enterprise-level solutions and user interface design.",
    },
    {
      position: "Software Developer Intern",
      company: "Softmaster Technologies Pvt Ltd",
      duration: "July 2024 - December 2024",
      description:
        "Gained hands-on experience in software development lifecycle and desktop application development using Java technologies.",
      
    },
  ];

  const projects = [
    {
      title: "Test Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      technologies: [
        "Java",
        "Java",
      ],
      duration: "03/2023 - 04/2023",
      type: "Open-source",
      accomplishments: [
        "lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      ],
    },
  ];

  const certifications = [
    {
      name: "test certification",
      issuer: "test",
      date: "December 2024",
      skills: "test, test, test",
      credential: "test",
    },
  ];

  const softSkills = [
    {
      skill: "Problem Solving",
      description: "Analytical approach to complex technical challenges",
    },
    {
      skill: "Communication",
      description: "Clear technical and non-technical communication",
    },
    {
      skill: "Team Collaboration",
      description: "Effective work in cross-functional teams",
    },
    {
      skill: "Adaptability",
      description: "Quick learning of new technologies and methodologies",
    },
    {
      skill: "Time Management",
      description: "Efficient project delivery within deadlines",
    },
    {
      skill: "Critical Thinking",
      description: "Analytical evaluation of solutions and approaches",
    },
  ];

  const resumeHighlights = [
    {
      title: "Full-Stack Developer",
      description:
        "Proficient in both front-end and back-end technologies, creating complete web solutions",
      icon: <Code className="h-8 w-8 text-brand-purple" />,
    },
    {
      title: "Web Developer",
      description:
        "Experienced in building web applications using react framework and plain HTML and CSS",
      icon: <Cpu className="h-8 w-8 text-brand-purple" />,
    },
    {
      title: "Desktop Application Developer",
      description:
        "Experienced in building desktop applications using Java and other technologies",
      icon: <Cpu className="h-8 w-8 text-brand-purple" />,
    },
  ];

  const tabContent = {
    skills: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {resumeHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-lg flex items-start backdrop-blur-md border border-white/10"
            >
              <div className="mr-4 bg-brand-purple/10 p-3 rounded-full">
                {highlight.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-white">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <SkillsSection />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="glass-panel p-6 rounded-lg backdrop-blur-md border border-white/10"
        >
          <h3 className="text-xl font-semibold mb-6 text-white">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {softSkills.map((item, index) => (
              <div key={index} className="bg-secondary/50 p-4 rounded-lg">
                <h4 className="font-medium text-lg mb-1">{item.skill}</h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    ),
    education: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {education.map((edu, index) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div className="flex-1">
                <div className="flex items-start">
                  <div className="bg-brand-purple/10 p-2 rounded-full mr-4 hidden md:block">
                    <GraduationCap className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <div className="text-lg mt-1">{edu.institution}</div>
                    <div className="text-muted-foreground mt-1">
                      {edu.field}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end text-right">
                <div className="px-3 py-1 rounded-full text-sm bg-brand-purple/10 text-brand-purple">
                  {edu.gpa}
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  {edu.duration}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {edu.location}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    experience: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {experience.map((exp, index) => (
          <motion.div
            key={exp.position}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div className="flex-1">
                <div className="flex items-start">
                  <div className="bg-brand-purple/10 p-2 rounded-full mr-4 hidden md:block">
                    <Briefcase className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <div className="text-lg mt-1">{exp.company}</div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground md:text-right">
                {exp.duration}
              </div>
            </div>
            <p className="text-muted-foreground mb-4 pl-0 md:pl-12">
              {exp.description}
            </p>

          </motion.div>
        ))}
      </motion.div>
    ),
    projects: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-xs py-1 px-3 bg-brand-purple/10 text-brand-purple rounded-full">
                  {project.type}
                </span>
                <span className="text-xs text-muted-foreground">
                  {project.duration}
                </span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">{project.description}</p>

            <div className="mb-4">
              <h4 className="font-medium mb-2">Key Accomplishments:</h4>
              <ul className="space-y-2">
                {project.accomplishments.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs py-1 px-3 bg-secondary rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    certifications: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex items-start">
              <div className="bg-brand-purple/10 p-2 rounded-full mr-4 flex-shrink-0">
                <Award className="h-5 w-5 text-brand-purple" />
              </div>
              <div>
                <h3 className="font-semibold">{cert.name}</h3>
                <div className="text-sm text-muted-foreground mb-2">
                  {cert.issuer} • {cert.date}
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {cert.skills.split(", ").map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 bg-secondary inline-block rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {cert.credential && (
                  <div className="text-xs text-muted-foreground">
                    Credential ID: {cert.credential}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
  };

  return (
    <Layout>
      <section className="pt-32 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple mb-4 backdrop-blur-sm border border-brand-purple/20">
              Resume
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <AnimatedText text="Professional Experience" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                I'm an aspiring developer specializing in web development and desktop applications development. My goal is to leverage these technologies
                to create innovative solutions for real-world problems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-12"
          >
            <PrintableResume />
          </motion.div>

          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                {
                  id: "skills",
                  icon: <Code className="h-5 w-5" />,
                  label: "Skills",
                },
                {
                  id: "education",
                  icon: <GraduationCap className="h-5 w-5" />,
                  label: "Education",
                },
                {
                  id: "experience",
                  icon: <Briefcase className="h-5 w-5" />,
                  label: "Experience",
                },
                {
                  id: "projects",
                  icon: <Code className="h-5 w-5" />,
                  label: "Projects",
                },
                {
                  id: "certifications",
                  icon: <Award className="h-5 w-5" />,
                  label: "Certifications",
                },
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors backdrop-blur-sm border ${
                    activeTab === tab.id
                      ? "bg-brand-purple text-white border-brand-purple/50"
                      : "bg-secondary/20 text-muted-foreground hover:bg-secondary/40 border-white/10"
                  }`}
                >
                  {tab.icon}
                  <span className="ml-2">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="min-h-[400px]">
            {tabContent[activeTab as keyof typeof tabContent]}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
