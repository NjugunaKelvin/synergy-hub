import { Link } from "react-router-dom";
import { FaHome, FaProjectDiagram, FaUsers, FaEnvelope, FaCog } from "react-icons/fa";
import "../styles/global.css"; // Import styles (we’ll define them later)

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">SynergyHub</h2>
      <ul>
        <li><Link to="/"><FaHome /> Dashboard</Link></li>
        <li><Link to="/projects"><FaProjectDiagram /> Projects</Link></li>
        <li><Link to="/teams"><FaUsers /> Teams</Link></li>
        <li><Link to="/messages"><FaEnvelope /> Messages</Link></li>
        <li><Link to="/settings"><FaCog /> Settings</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
