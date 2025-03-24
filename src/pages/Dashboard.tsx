import DashboardCard from "../components/DashboardCard";
import KanbanBoard from "../components/KanbanBoard";
import avatar from "../assets/avatar.jpg"; // Online image for user profile
import { FaTasks, FaUsers, FaProjectDiagram } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="d-flex align-items-center justify-content-between bg-white p-4 rounded shadow-sm">
        <div>
          <h2>Welcome back, <span className="text-primary">Vin</span> 👋</h2>
          <p>Here’s what’s happening today.</p>
        </div>
        <img src={avatar} alt="User Avatar" className="rounded-circle" width="60" />
      </div>

      {/* Dashboard Stats Cards */}
      <div className="row mt-4">
        <div className="col-md-4">
          <DashboardCard title="Active Projects" value="12" icon={<FaProjectDiagram size={30} />} color="primary" />
        </div>
        <div className="col-md-4">
          <DashboardCard title="Tasks Completed" value="87" icon={<FaTasks size={30} />} color="success" />
        </div>
        <div className="col-md-4">
          <DashboardCard title="Team Members" value="24" icon={<FaUsers size={30} />} color="warning" />
        </div>
      </div>

      {/* Kanban Board */}
      <h3 className="mt-5">Task Management</h3>
      <KanbanBoard />
    </div>
  );
};

export default Dashboard;
