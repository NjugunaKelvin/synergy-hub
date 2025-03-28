import { Link } from "react-router-dom";
import "../styles/Messages.css"; // Import the dark theme styles

const conversations = [
  { id: "1", name: "Alice Johnson", lastMessage: "Hey, how’s the project going?", avatar: "https://randomuser.me/api/portraits/men/36.jpg" },
  { id: "2", name: "Bob Smith", lastMessage: "Can you check the latest commit?", avatar: "https://randomuser.me/api/portraits/men/33.jpg" },
  { id: "3", name: "John Mark", lastMessage: "We need to discuss the deadline.", avatar: "https://randomuser.me/api/portraits/men/32.jpg" }
];

const MessagesPage = () => {
  return (
    <div className="messages-container">
      <h1 className="messages-header">Messages</h1>
      <div className="messages-list">
        {conversations.map((chat) => (
          <Link key={chat.id} to={`/messages/${chat.id}`} className="message-card">
            <img src={chat.avatar} alt={chat.name} className="message-avatar" />
            <div className="message-info">
              <h5 className="message-name">{chat.name}</h5>
              <p className="message-preview">{chat.lastMessage}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MessagesPage;
