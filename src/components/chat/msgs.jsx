import getChats from "../../backend-interactions/tg/get-chats";
import ChainMessages from "./ChainMessages";
import { useState, useEffect } from "react";

export default function Messages({currentDialog}) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getChats(currentDialog)
      .then(data => {
        data.reverse()
        setMessages(data.filter(msg => msg.text && msg.text.trim() !== "" && msg.senderId !== ""))
      })
      .catch(error => console.error("Error fetching chats:", error));
  }, [currentDialog]);

  return (
    <div style={{ padding: '10px', overflowY: 'scroll', height: '100%' }}>
        {messages.map(msg => 
          <ChainMessages key={msg.id} name={msg.senderId.toString()} image={`http://localhost:8000/logos/${msg.senderId}.jpg`} messages={[msg.text]} />
        )}
    </div>
  );
}
