import AppRoutes from "./routes/AppRoutes";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 bg-dark text-light p-3">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-md-9 p-4">
          <AppRoutes />
        </div>
      </div>
    </div>
  );
};

export default App;
