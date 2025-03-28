import { Link } from "react-router-dom";
import "../styles/projects.css";


const ProjectCard = ({ id, title, description, techStack, status }) => {
  return (
    <div className="card bg-secondary text-light p-3 shadow">
      <h4 className="text-primary">{title}</h4>
      <p>{description}</p>
      <p><strong>Status:</strong> {status}</p>
      
      {/* Tech Stack */}
      <div className="mb-3">
        {techStack.map((tech, index) => (
          <span key={index} className="badge bg-primary me-1">{tech}</span>
        ))}
      </div>

      {/* View Details Button */}
      <Link to={`/projects/${id}`} className="btn btn-outline-info">
        View Details
      </Link>
    </div>
  );
};

export default ProjectCard;
