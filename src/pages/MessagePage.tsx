import { Link } from "react-router-dom";

const conversations = [
  { id: "1", name: "Alice Johnson", lastMessage: "Hey, how’s the project going?", avatar: "/avatars/alice.jpg" },
  { id: "2", name: "Bob Smith", lastMessage: "Can you check the latest commit?", avatar: "/avatars/bob.jpg" },
  { id: "3", name: "Charlie Brown", lastMessage: "We need to discuss the deadline.", avatar: "/avatars/charlie.jpg" }
];

const MessagesPage = () => {
  return (
    <div className="container mt-4 text-white">
      <h1 className="text-center mb-4">Messages</h1>
      <div className="list-group">
        {conversations.map((chat) => (
          <Link key={chat.id} to={`/messages/${chat.id}`} className="list-group-item list-group-item-action d-flex align-items-center bg-dark text-white">
            <img src={chat.avatar} alt={chat.name} className="rounded-circle me-3" width="50" height="50" />
            <div>
              <h5 className="mb-0">{chat.name}</h5>
              <p className="text-muted mb-0">{chat.lastMessage}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MessagesPage;
