import { useState } from "react";
import KanbanBoard from "../components/KanbanBoard";
import "../styles/dashboard.css";

const projects = [
  { id: "1", name: "Website Redesign" },
  { id: "2", name: "AI Chatbot" },
  { id: "3", name: "Marketing Strategy" },
  { id: "4", name: "Mobile App Development" },
  { id: "5", name: "Cloud Migration" },
  { id: "6", name: "E-commerce Optimization" },
];

const Dashboard = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h3>Projects</h3>
        <ul>
          {projects.map((project) => (
            <li
              key={project.id}
              className={activeProject.id === project.id ? "active" : ""}
              onClick={() => setActiveProject(project)}
            >
              {project.name}
            </li>
          ))}
        </ul>
      </aside>

      <main className="kanban-container">
        <h2>{activeProject.name}</h2>
        <KanbanBoard projectId={activeProject.id} />
      </main>
    </div>
  );
};

export default Dashboard;
