import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  liveLink: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, category, liveLink, githubLink }) => {
  return (
    <div className="card project-card shadow-sm">
      <img src={image} alt={title} className="card-img-top project-image" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="text-muted">{category}</p>
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-between">
          <a href={liveLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Live Demo <FaExternalLinkAlt />
          </a>
          <a href={githubLink} className="btn btn-dark" target="_blank" rel="noopener noreferrer">
            Code <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
