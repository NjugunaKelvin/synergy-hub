import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import Teams from "../pages/Teams";
import Messages from "../pages/Messages";
import Settings from "../pages/Settings";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;
