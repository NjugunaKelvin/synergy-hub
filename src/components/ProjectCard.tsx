import { Link } from "react-router-dom";
import "../styles/project_card.css";

const ProjectCard = ({ id, title, description, techStack, status }) => {
  return (
    <div className="project-card">
      {/* Project Header */}
      <div className="project-header">
        <h4 className="project-title">{title}</h4>
        <span className="project-status">{status}</span>
      </div>

      {/* Description */}
      <p className="project-description">{description}</p>

      {/* Tech Stack */}
      <div className="project-tech-stack">
        {techStack.map((tech, index) => (
          <span key={index} className="tech-badge">{tech}</span>
        ))}
      </div>

      {/* View Details Button */}
      <Link to={`/projects/${id}`} className="project-details-btn">
        View Details →
      </Link>
    </div>
  );
};

export default ProjectCard;
