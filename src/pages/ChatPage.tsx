import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/Messages.css";


const chats = {
  "1": { name: "Alice Johnson", messages: ["Hey, how’s the project going?", "It’s looking great!", "Let's have a call soon."], avatar: "/avatars/alice.jpg" },
  "2": { name: "Bob Smith", messages: ["Can you check the latest commit?", "Sure! Reviewing now."], avatar: "/avatars/bob.jpg" },
  "3": { name: "Charlie Brown", messages: ["We need to discuss the deadline.", "I think we should extend by a week."], avatar: "/avatars/charlie.jpg" }
};

const ChatPage = () => {
  const { id } = useParams();
  const chat = chats[id || "1"]; // Default to first chat if ID is missing

  const [messages, setMessages] = useState(chat ? chat.messages : []);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  if (!chat) {
    return <h2 className="text-center text-white">Chat Not Found</h2>;
  }

  return (
    <div className="container mt-5 text-white">
      <div className="d-flex align-items-center mb-3">
        <img src={chat.avatar} alt={chat.name} className="rounded-circle me-2" width="50" height="50" />
        <h1>Chat with {chat.name}</h1>
      </div>

      <div className="chat-box p-3 border rounded bg-dark">
        {messages.map((msg, index) => (
          <div key={index} className={`message p-2 my-2 rounded ${index % 2 === 0 ? "bg-primary text-white" : "bg-secondary text-white"}`}>
            {msg}
          </div>
        ))}
      </div>

      <div className="input-group mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button className="btn btn-success" onClick={sendMessage}>
          Send
        </button>
      </div>

      <Link to="/messages" className="btn btn-secondary mt-3">Back to Messages</Link>
    </div>
  );
};

export default ChatPage;
