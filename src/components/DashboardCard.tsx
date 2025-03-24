interface DashboardCardProps {
    title: string;
    value: string;
    color: string;
    icon: JSX.Element;
  }
  
  const DashboardCard = ({ title, value, color, icon }: DashboardCardProps) => {
    return (
      <div className={`card text-white bg-${color} mb-3 shadow`}>
        <div className="card-body d-flex align-items-center">
          <div className="me-3">{icon}</div>
          <div>
            <h5 className="card-title">{title}</h5>
            <h2 className="card-text">{value}</h2>
          </div>
        </div>
      </div>
    );
  };
  
  export default DashboardCard;
  