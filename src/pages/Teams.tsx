import TeamCard from "../components/TeamCard"; // Ensure this file exists in the specified path

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
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
    <div className="container mt-4">
      <h2 className="text-center mb-4">Meet Our Team</h2>
      <div className="row">
        {teamMembers.map((member, index) => (
          <div key={index} className="col-md-4">
            <TeamCard {...member} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
