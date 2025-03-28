interface ProjectFilterProps {
    categories: string[];
    activeCategory: string;
    setActiveCategory: (category: string) => void;
  }
  
  const ProjectFilter: React.FC<ProjectFilterProps> = ({ categories, activeCategory, setActiveCategory }) => {
    return (
      <div className="project-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={`btn ${activeCategory === category ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    );
  };
  
  export default ProjectFilter;
  