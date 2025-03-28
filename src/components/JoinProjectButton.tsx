import { useState } from "react";

interface JoinProjectButtonProps {
  projectId: string;
}

const JoinProjectButton: React.FC<JoinProjectButtonProps> = ({ projectId }) => {
  const [joined, setJoined] = useState(false);

  const handleJoin = () => {
    setJoined(true);
    alert(`You've requested to join project: ${projectId}`); // Use projectId here
  };

  return (
    <button
      className={`btn ${joined ? "btn-success" : "btn-outline-primary"}`}
      onClick={handleJoin}
      disabled={joined}
    >
      {joined ? "Request Sent" : "Join Project"}
    </button>
  );
};

export default JoinProjectButton;
