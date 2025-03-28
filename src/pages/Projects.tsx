import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectFilter from "../components/ProjectFilter";
import "../styles/projects.css";

const projects = [
  {
    id: "1",
    title: "Open Source Blog Platform",
    description: "A collaborative blogging platform for developers.",
    category: "Web Development",
    techStack: ["React", "Node.js", "MongoDB"],
    team: ["Alice", "Bob"],
    status: "Active",
  },
  {
    id: "2",
    title: "AI-Powered Resume Builder",
    description: "A resume builder that uses AI to enhance resumes.",
    category: "Machine Learning",
    techStack: ["Python", "Flask", "TensorFlow"],
    team: ["David"],
    status: "Looking for Contributors",
  },
  {
    id: "3",
    title: "Real-Time Chat App",
    description: "A secure, real-time chat application.",
    category: "Web Development",
    techStack: ["Vue", "Firebase"],
    team: [],
    status: "Open for Collaboration",
  },
  {
    id: "4",
    title: "E-Commerce Dashboard",
    description: "A modern admin panel for an e-commerce store.",
    category: "Web Development",
    techStack: ["Next.js", "TailwindCSS", "Prisma"],
    team: ["Eve", "Frank"],
    status: "In Progress",
  },
  {
    id: "5",
    title: "Automated Trading Bot",
    description: "A bot that automates stock and crypto trading.",
    category: "Finance & Trading",
    techStack: ["Python", "Pandas", "Alpaca API"],
    team: ["Grace"],
    status: "Looking for AI Experts",
  },
  {
    id: "6",
    title: "Fitness App",
    description: "A mobile app for tracking workouts and nutrition.",
    category: "Mobile Development",
    techStack: ["Flutter", "Firebase"],
    team: ["Hank", "Ivy"],
    status: "Beta Testing",
  },
  {
    id: "7",
    title: "Smart Home Automation",
    description: "An IoT project for smart home control.",
    category: "IoT & Embedded Systems",
    techStack: ["Arduino", "C++", "Raspberry Pi"],
    team: ["Jake"],
    status: "Prototype Phase",
  },
  {
    id: "8",
    title: "Cybersecurity Monitoring Tool",
    description: "A tool for monitoring and detecting security threats.",
    category: "Cybersecurity",
    techStack: ["Go", "Grafana", "Prometheus"],
    team: ["Liam", "Sophia"],
    status: "In Development",
  },
  {
    id: "9",
    title: "Voice Recognition Assistant",
    description: "A virtual assistant with voice commands.",
    category: "AI & NLP",
    techStack: ["Python", "SpeechRecognition", "OpenAI API"],
    team: ["Mia"],
    status: "Open for Contributions",
  },
  {
    id: "10",
    title: "Online Learning Platform",
    description: "A platform for online courses and live classes.",
    category: "EdTech",
    techStack: ["Django", "React", "PostgreSQL"],
    team: ["Noah", "Olivia"],
    status: "Launching Soon",
  },
];

const categories = [
  "All",
  "Web Development",
  "Machine Learning",
  "Finance & Trading",
  "Mobile Development",
  "IoT & Embedded Systems",
  "Cybersecurity",
  "AI & NLP",
  "EdTech",
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="projects-container">
      <h2 className="title">Explore Projects</h2>
      <ProjectFilter
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <div className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))
        ) : (
          <p className="no-projects">No projects found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
