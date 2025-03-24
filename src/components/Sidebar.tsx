import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-light vh-100 position-fixed d-flex flex-column justify-content-between">
      <div>
        <h4 className="text-center py-3">SynergyHub</h4>
        <ul className="nav flex-column px-3">
          <li className="nav-item">
            <Link to="/" className="nav-link">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/teams" className="nav-link">Teams</Link>
          </li>
          <li className="nav-item">
            <Link to="/messages" className="nav-link">Messages</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;