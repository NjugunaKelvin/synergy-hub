interface DashboardCardProps {
    title: string;
    value: string;
    color: string;
  }
  
  const DashboardCard = ({ title, value, color }: DashboardCardProps) => {
    return (
      <div className={`card text-white bg-${color} mb-3`}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h2 className="card-text">{value}</h2>
        </div>
      </div>
    );
  };
  
  export default DashboardCard;
  