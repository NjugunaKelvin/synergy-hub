import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container-fluid">
        <input
          type="search"
          placeholder="Search..."
          className="form-control me-2 w-50"
        />
        <div className="dropdown">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Profile
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu show">
              <a className="dropdown-item" href="#">Settings</a>
              <a className="dropdown-item" href="#">Logout</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;