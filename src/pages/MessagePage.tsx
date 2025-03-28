import { Link } from "react-router-dom";
import "../styles/Messages.css"; // Import the dark theme styles

const conversations = [
  { id: "1", name: "Alice Johnson", lastMessage: "Hey, how’s the project going?", avatar: "../images/1.jpeg" },
  { id: "2", name: "Bob Smith", lastMessage: "Can you check the latest commit?", avatar: "https://www.google.com/imgres?q=programmer&imgurl=https%3A%2F%2Fwww.uopeople.edu%2Fwp-content%2Fuploads%2Fbb-plugin%2Fcache%2FHow-to-Become-a-Computer-Programmer-and-Which-Degree-do-You-Need-to-Succeed-550x385-landscape-ff99f208be110a39b8b89dc7e81c6e17-n5mwvo4a7kez.jpg&imgrefurl=https%3A%2F%2Fwww.uopeople.edu%2Fblog%2Fhow-to-become-a-computer-programmer%2F&docid=g2zOFD6SQOQyDM&tbnid=zEcLJpx-7Qa3GM&vet=12ahUKEwjK6PzPtayMAxWlcPEDHX2FLssQM3oECBsQAA..i&w=550&h=385&hcb=2&ved=2ahUKEwjK6PzPtayMAxWlcPEDHX2FLssQM3oECBsQAA" },
  { id: "3", name: "John Mark", lastMessage: "We need to discuss the deadline.", avatar: "https://www.google.com/imgres?q=programmer&imgurl=https%3A%2F%2Fres.cloudinary.com%2Fhighereducation%2Fimages%2Fw_1024%2Ch_683%2Cc_scale%2Fv1713549285%2FBestColleges.com%2Fcomputer-programmer-working-at-his-desk%2Fcomputer-programmer-working-at-his-desk-1024x683.jpg&imgrefurl=https%3A%2F%2Fwww.bestcolleges.com%2Fcareers%2Ftechnology%2Fcomputer-programming%2F&docid=ZOQKbADD4pGN2M&tbnid=Ah7kjUFEM02VmM&vet=12ahUKEwjK6PzPtayMAxWlcPEDHX2FLssQM3oECF0QAA..i&w=1024&h=683&hcb=2&ved=2ahUKEwjK6PzPtayMAxWlcPEDHX2FLssQM3oECF0QAA" }
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
