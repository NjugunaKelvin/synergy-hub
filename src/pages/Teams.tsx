import TeamCard from "../components/TeamCard"; // Ensure this file exists in the specified path
// import "../styles/Teams.css"

const teamMembers = [
  {
    name: "Njuguna Kelvin",
    role: "Founder & CEO",
    image: "../src/images/vin.jpg",
    email: "kelvin@example.com",
    linkedin: "https://linkedin.com/in/njugunak",
    twitter: "https://twitter.com/njugunak",
  },
  {
    name: "Ambrose Kariuki",
    role: "Senior Software Developer",
    image: "../src/images/ambrose.jpg",
    email: "alice@example.com",
    linkedin: "https://linkedin.com/in/alicejohnson",
    twitter: "https://twitter.com/alicejohnson",
  },
  {
    name: "Mark Smith",
    role: "Lead Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    email: "mark@example.com",
    linkedin: "https://linkedin.com/in/marksmith",
    twitter: "https://twitter.com/marksmith",
  },
  {
    name: "Sophie Brown",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    email: "sophie@example.com",
    linkedin: "https://linkedin.com/in/sophiebrown",
    twitter: "https://twitter.com/sophiebrown",
  },
];

const Teams = () => {
  return (
    <div className="container mt-5">
      {/* Vision & Mission Section */}
      <section className="text-center mb-5">
        <h1 className="fw-bold text-primary">Welcome to Synergy Hub</h1>
        <p className="fs-5">
          **Revolutionizing the way teams work.**  
          Founded by <strong>Njuguna Kelvin</strong>, Kanban is more than just a task management tool—it's a platform designed to optimize workflows, enhance collaboration, and boost productivity.
        </p>
      </section>

      <section className="row justify-content-center mb-5">
        <div className="col-md-5">
          <div className="card border-0 shadow-sm p-4 h-100">
            <h3 className="text-primary text-center fw-bold">Our Vision</h3>
            <p className="text-muted text-center fs-5">
              To empower teams globally with **intelligent, seamless, and dynamic** workflow solutions that foster innovation and efficiency.
            </p>
          </div>
        </div>
        <div className="col-md-5">
          <div className="card border-0 shadow-sm p-4 h-100">
            <h3 className="text-primary text-center fw-bold">Our Mission</h3>
            <p className="text-muted text-center fs-5">
              To build a **modern, intuitive, and powerful** project management platform that simplifies complex workflows and maximizes team performance.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="text-center mb-5">
        <h2 className="fw-bold text-primary">Core Values</h2>
        <p className="text-muted fs-5">What drives us at Kanban</p>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-3">
              <h4 className="text-success">🔍 Transparency</h4>
              <p className="text-muted">We believe in **open communication** and **clear goals**.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-3">
              <h4 className="text-danger">Innovation</h4>
              <p className="text-muted">We push boundaries to create **cutting-edge** solutions.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-3">
              <h4 className="text-warning">🚀 Growth</h4>
              <p className="text-muted">We prioritize **continuous improvement** and learning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="mb-5">
        <h2 className="text-center fw-bold text-primary">👥 Meet Our Team</h2>
        <p className="text-muted text-center fs-5">The people who make Synergy Hub possible.</p>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-4 mb-4">
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Teams;
