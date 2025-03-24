import { FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light px-3">
      <span className="navbar-brand">Dashboard</span>
      <div>
        <FaBell size={20} className="me-3" />
        <FaUserCircle size={24} />
      </div>
    </nav>
  );
};

export default Navbar;
