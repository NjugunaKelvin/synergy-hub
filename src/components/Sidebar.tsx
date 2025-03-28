import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaProjectDiagram, FaUsers, FaEnvelope, FaCog, FaBars, FaTimes } from "react-icons/fa";
import "../styles/sidebar.css"; // Import the new refined styles

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      <div className="hamburger-menu" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2 className="sidebar-title">SynergyHub</h2>
        <ul>
          <li><Link to="/" onClick={() => setIsOpen(false)}><FaHome /> Dashboard</Link></li>
          <li><Link to="/projects" onClick={() => setIsOpen(false)}><FaProjectDiagram /> Projects</Link></li>
          <li><Link to="/teams" onClick={() => setIsOpen(false)}><FaUsers /> Teams</Link></li>
          <li><Link to="/messages" onClick={() => setIsOpen(false)}><FaEnvelope /> Messages</Link></li>
          <li><Link to="/settings" onClick={() => setIsOpen(false)}><FaCog /> Settings</Link></li>
        </ul>
      </div>

      {/* Overlay for Sidebar (Closes on Click) */}
      {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default Sidebar;
