import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectFilter from "../components/ProjectFilter";

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
];

const categories = ["All", "Web Development", "Machine Learning"];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="container-fluid bg-dark text-light py-5">
      <div className="container">
        <h2 className="text-center neon-text">🚀 Explore Open Source Projects</h2>
        
        {/* Filter */}
        <ProjectFilter categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        
        {/* Project Grid */}
        <div className="row mt-4">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6 mb-4">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
