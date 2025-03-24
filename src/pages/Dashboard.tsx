import { Card } from 'react-bootstrap';

interface DashboardCardProps {
  title: string;
  value: number;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value }) => {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{value}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const Dashboard: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="mb-4">Dashboard</h2>
      <div className="row">
        <div className="col-md-4">
          <DashboardCard title="Active Projects" value={12} />
        </div>
        <div className="col-md-4">
          <DashboardCard title="Team Members" value={25} />
        </div>
        <div className="col-md-4">
          <DashboardCard title="Tasks Completed" value={45} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;