import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import MessagesPage from "../pages/MessagePage";
import Teams from "../pages/Teams";
// import Messages from "../pages/Messages";
import Settings from "../pages/Settings";
import ProjectPage from "../pages/ProjectPage";
import ChatPage from "../pages/ChatPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/projects/:id" element={<ProjectPage />} />
      <Route path="/messages" element={<MessagesPage />} />
      <Route path="/messages/:id" element={<ChatPage />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;



