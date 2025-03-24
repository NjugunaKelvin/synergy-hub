import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

const App = () => {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1">
          <Navbar />
          <div className="container mt-4">
            <AppRoutes />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
