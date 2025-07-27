import getChats from "../../backend-interactions/tg/get-chats";
import ChainMessages from "./ChainMessages";
import { useState, useEffect } from "react";

export default function Messages({currentDialog}) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {      
      getChats(currentDialog)
      .then(data => {
        setMessages(data.filter(msg => msg.text && msg.text.trim() !== ""))
      })
      .catch(error => console.error("Error fetching chats:", error));
    }, 2000);

    return () => {
      clearInterval(interval)
      setMessages([])
    }
  }, [currentDialog]);

  return (
    <div style={{ padding: '10px', overflowY: 'scroll', height: '100%', display: 'flex', flexDirection: 'column-reverse' }}>
        {messages.length > 0 ? messages.map(msg => 
          <ChainMessages key={msg.id} name={msg.senderName} image={`http://localhost:8000/logos/${msg.senderId}.jpg`} messages={[msg.text]} />
        ) : <p>Loading...</p>}
    </div>
  );
}
