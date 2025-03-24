interface ProjectFilterProps {
    categories: string[];
    activeCategory: string;
    setActiveCategory: (category: string) => void;
  }
  
  const ProjectFilter: React.FC<ProjectFilterProps> = ({ categories, activeCategory, setActiveCategory }) => {
    return (
      <div className="d-flex gap-3 justify-content-center mb-4">
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
  