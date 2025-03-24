import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  email: string;
  linkedin: string;
  twitter: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, image, email, linkedin, twitter }) => {
  return (
    <div className="card team-card shadow-sm p-3 text-center">
      <img src={image} alt={name} className="rounded-circle team-image mx-auto" />
      <h5 className="mt-3">{name}</h5>
      <p className="text-muted">{role}</p>
      <div className="social-icons d-flex justify-content-center gap-3">
        <a href={`mailto:${email}`} className="text-dark"><FaEnvelope /></a>
        <a href={linkedin} className="text-primary"><FaLinkedin /></a>
        <a href={twitter} className="text-info"><FaTwitter /></a>
      </div>
    </div>
  );
};

export default TeamCard;
