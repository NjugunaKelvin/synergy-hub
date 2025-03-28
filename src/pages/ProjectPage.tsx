import { useParams } from "react-router-dom";
import "../styles/projects.css";


const projects = [
  {
    id: "1",
    title: "Open Source Blog Platform",
    description: "A collaborative blogging platform for developers.",
    category: "Web Development",
    techStack: ["React", "Node.js", "MongoDB"],
    team: ["Alice", "Bob"],
    status: "Active",
  },
  {
    id: "2",
    title: "AI-Powered Resume Builder",
    description: "A resume builder that uses AI to enhance resumes.",
    category: "Machine Learning",
    techStack: ["Python", "Flask", "TensorFlow"],
    team: ["David"],
    status: "Looking for Contributors",
  },
  {
    id: "3",
    title: "Real-Time Chat App",
    description: "A secure, real-time chat application.",
    category: "Web Development",
    techStack: ["Vue", "Firebase"],
    team: [],
    status: "Open for Collaboration",
  },
  {
    id: "4",
    title: "E-Commerce Dashboard",
    description: "A modern admin panel for an e-commerce store.",
    category: "Web Development",
    techStack: ["Next.js", "TailwindCSS", "Prisma"],
    team: ["Eve", "Frank"],
    status: "In Progress",
  },
  {
    id: "5",
    title: "Automated Trading Bot",
    description: "A bot that automates stock and crypto trading.",
    category: "Finance & Trading",
    techStack: ["Python", "Pandas", "Alpaca API"],
    team: ["Grace"],
    status: "Looking for AI Experts",
  },
  {
    id: "6",
    title: "Fitness App",
    description: "A mobile app for tracking workouts and nutrition.",
    category: "Mobile Development",
    techStack: ["Flutter", "Firebase"],
    team: ["Hank", "Ivy"],
    status: "Beta Testing",
  },
  {
    id: "7",
    title: "Smart Home Automation",
    description: "An IoT project for smart home control.",
    category: "IoT & Embedded Systems",
    techStack: ["Arduino", "C++", "Raspberry Pi"],
    team: ["Jake"],
    status: "Prototype Phase",
  },
  {
    id: "8",
    title: "Cybersecurity Monitoring Tool",
    description: "A tool for monitoring and detecting security threats.",
    category: "Cybersecurity",
    techStack: ["Go", "Grafana", "Prometheus"],
    team: ["Liam", "Sophia"],
    status: "In Development",
  },
  {
    id: "9",
    title: "Voice Recognition Assistant",
    description: "A virtual assistant with voice commands.",
    category: "AI & NLP",
    techStack: ["Python", "SpeechRecognition", "OpenAI API"],
    team: ["Mia"],
    status: "Open for Contributions",
  },
  {
    id: "10",
    title: "Online Learning Platform",
    description: "A platform for online courses and live classes.",
    category: "EdTech",
    techStack: ["Django", "React", "PostgreSQL"],
    team: ["Noah", "Olivia"],
    status: "Launching Soon",
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <p className="text-center text-danger">Project not found.</p>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center">{project.title}</h2>
      <p className="text-muted text-center">{project.description}</p>

      <div className="card p-4 shadow-lg">
        <p><strong>Category:</strong> {project.category}</p>
        <p><strong>Tech Stack:</strong> {project.techStack.join(", ")}</p>
        <p><strong>Team:</strong> {project.team.length > 0 ? project.team.join(", ") : "No team yet"}</p>
        <p><strong>Status:</strong> {project.status}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
