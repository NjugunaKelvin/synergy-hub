import { FaTasks, FaUsers, FaProjectDiagram, FaCode } from "react-icons/fa";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";
import avatar from "../assets/avatar.jpeg"; // User profile image

const Dashboard = () => {
  const languages = [
    { id: "JavaScript", label: "JavaScript", value: 45, color: "#F7DF1E" },
    { id: "TypeScript", label: "TypeScript", value: 30, color: "#3178C6" },
    { id: "Python", label: "Python", value: 25, color: "#306998" },
  ];

  const contributions = [
    { day: "Mon", contributions: 12 },
    { day: "Tue", contributions: 18 },
    { day: "Wed", contributions: 5 },
    { day: "Thu", contributions: 23 },
    { day: "Fri", contributions: 14 },
    { day: "Sat", contributions: 20 },
    { day: "Sun", contributions: 8 },
  ];

  return (
    <div className="container">
      {/* Hero Section */}
      <div className="d-flex align-items-center justify-content-between bg-dark p-4 rounded shadow">
        <div>
          <h2 className="text-light">Welcome back, <span className="text-primary">Vin</span> 👋</h2>
          <p className="text-muted">Here’s what’s happening today.</p>
        </div>
        <img src={avatar} alt="User Avatar" className="rounded-circle" width="60" />
      </div>

      {/* Dashboard Stats Cards */}
      <div className="row mt-4">
        <div className="col-md-3">
          <div className="card bg-primary text-white p-3">
            <FaProjectDiagram size={30} />
            <h5 className="mt-2">Active Projects</h5>
            <h3>12</h3>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-success text-white p-3">
            <FaTasks size={30} />
            <h5 className="mt-2">Tasks Completed</h5>
            <h3>87</h3>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-warning text-dark p-3">
            <FaUsers size={30} />
            <h5 className="mt-2">Team Members</h5>
            <h3>24</h3>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-info text-dark p-3">
            <FaCode size={30} />
            <h5 className="mt-2">Commits This Week</h5>
            <h3>42</h3>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="row mt-4">
        {/* Most Used Languages */}
        <div className="col-md-6">
          <div className="card bg-dark p-3">
            <h4 className="text-white">Most Used Languages</h4>
            <div style={{ height: "300px" }}>
              <ResponsivePie
                data={languages}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                colors={{ datum: "data.color" }}
                borderWidth={1}
                borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
              />
            </div>
          </div>
        </div>

        {/* Contributions Graph */}
        <div className="col-md-6">
          <div className="card bg-dark p-3">
            <h4 className="text-white">Contributions This Week</h4>
            <div style={{ height: "300px" }}>
              <ResponsiveBar
                data={contributions}
                keys={["contributions"]}
                indexBy="day"
                margin={{ top: 40, right: 20, bottom: 50, left: 40 }}
                colors="#00c896"
                borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                axisBottom={{
                  tickRotation: 0,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Deadlines & Activity */}
      <div className="row mt-4">
        {/* Task Deadlines */}
        <div className="col-md-6">
          <div className="card bg-dark p-3">
            <h4 className="text-white">Upcoming Deadlines</h4>
            <ul className="list-group">
              <li className="list-group-item bg-transparent text-white">📌 Finish API Docs - <span className="text-danger">Tomorrow</span></li>
              <li className="list-group-item bg-transparent text-white">🔄 Code Review - <span className="text-warning">In 3 Days</span></li>
              <li className="list-group-item bg-transparent text-white">🚀 Deploy New Feature - <span className="text-success">Next Week</span></li>
            </ul>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="col-md-6">
          <div className="card bg-dark p-3">
            <h4 className="text-white">Recent Activity</h4>
            <ul className="list-group">
              <li className="list-group-item bg-transparent text-white">✅ Vin merged PR #24</li>
              <li className="list-group-item bg-transparent text-white">💬 Alice commented on Task #19</li>
              <li className="list-group-item bg-transparent text-white">📂 Mark uploaded new design files</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
