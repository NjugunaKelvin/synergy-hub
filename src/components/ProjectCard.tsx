import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  techStack: string[];
  team: string[];
  status: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, category, techStack, team, status }) => {
  return (
    <div className="card project-card border-0 shadow-lg">
      <div className="card-body text-light">
        <h5 className="card-title neon-text">{title}</h5>
        <p className="card-text">{description}</p>
        
        <div className="mb-2">
          <span className="badge bg-primary me-2">{category}</span>
          <span className={`badge ${status === "Active" ? "bg-success" : "bg-warning"}`}>{status}</span>
        </div>

        <p className="tech-stack">
          <strong>Tech Stack:</strong> {techStack.join(", ")}
        </p>

        <p className="team-members">
          <strong>Team:</strong> {team.length > 0 ? team.join(", ") : "No members yet"}
        </p>

        <Link to={`/projects/${id}`} className="btn btn-neon">View Details</Link>
      </div>
    </div>
  );
};

export default ProjectCard;
