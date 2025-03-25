import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectFilter from "../components/ProjectFilter";

const projects = [
  {
    title: "E-Commerce Website",
    description: "A fully functional e-commerce platform with payment integration.",
    image: "https://source.unsplash.com/400x250/?shopping",
    category: "Web Development",
    liveLink: "https://ecommerce.example.com",
    githubLink: "https://github.com/user/ecommerce",
  },
  {
    title: "Task Management App",
    description: "A Kanban-style task management app with drag-and-drop features.",
    image: "https://source.unsplash.com/400x250/?productivity",
    category: "Web Development",
    liveLink: "https://tasks.example.com",
    githubLink: "https://github.com/user/task-app",
  },
  {
    title: "AI Chatbot",
    description: "A chatbot powered by AI for customer support automation.",
    image: "https://source.unsplash.com/400x250/?chatbot",
    category: "Machine Learning",
    liveLink: "https://chatbot.example.com",
    githubLink: "https://github.com/user/chatbot",
  },
  {
    title: "Weather Forecast App",
    description: "A real-time weather forecast application using APIs.",
    image: "https://images.unsplash.com/photo-1534068731687-d70176c2e7d5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VhdGhlciUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Scientific Computing",
    liveLink: "https://weather.example.com",
    githubLink: "https://github.com/user/weather-app",
  },
  {
    title: "Portfolio Website",
    description: "A sleek personal portfolio website showcasing projects and blogs.",
    image: "https://source.unsplash.com/400x250/?portfolio",
    category: "Web Development",
    liveLink: "https://portfolio.example.com",
    githubLink: "https://github.com/user/portfolio",
  },
  {
    title: "Stock Market Analysis",
    description: "A Python-based stock market prediction system using ML.",
    image: "https://source.unsplash.com/400x250/?stocks",
    category: "Machine Learning",
    liveLink: "https://stocks.example.com",
    githubLink: "https://github.com/user/stocks",
  },
];

const categories = ["All", "Web Development", "Machine Learning", "Scientific Computing"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Our Projects</h2>
      <ProjectFilter categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <div className="row">
        {filteredProjects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
