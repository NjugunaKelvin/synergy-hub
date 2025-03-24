import DashboardCard from "../components/DashboardCard";
import KanbanBoard from "../components/KanbanBoard";

const Dashboard = () => {
  return (
    <div>
      <h2 className="mb-4">Welcome to SynergyHub</h2>

      {/* Dashboard Stats Cards */}
      <div className="row">
        <div className="col-md-4">
          <DashboardCard title="Active Projects" value="12" color="primary" />
        </div>
        <div className="col-md-4">
          <DashboardCard title="Tasks Completed" value="87" color="success" />
        </div>
        <div className="col-md-4">
          <DashboardCard title="Pending Approvals" value="5" color="warning" />
        </div>
      </div>

      {/* Kanban Board Section */}
      <h3 className="mt-5">Task Management</h3>
      <KanbanBoard />
    </div>
  );
};

export default Dashboard;
