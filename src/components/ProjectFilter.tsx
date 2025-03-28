import { useState } from "react";
import "../styles/project-filter.css";

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({
  categories,
  activeCategory,
  setActiveCategory,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="project-filter">
      {/* Desktop Navbar */}
      <div className="filter-menu">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Mobile Dropdown */}
      <div className="filter-dropdown">
        <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
          {activeCategory} ▾
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            {categories.map((category) => (
              <button
                key={category}
                className={`dropdown-item ${activeCategory === category ? "active" : ""}`}
                onClick={() => {
                  setActiveCategory(category);
                  setIsOpen(false);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default ProjectFilter;
