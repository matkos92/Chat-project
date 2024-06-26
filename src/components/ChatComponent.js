import { useEffect, useRef, useState } from "react";
import * as io from "socket.io-client";

export const ChatComponent = ({ username }) => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const connectionChat = useRef();

  useEffect(() => {
    if (!connectionChat.current) {
      connectionChat.current = io.connect("https://chat-server.fbg.pl");
      connectionChat.current.on("chat message", (newMessage) => {
        setMessageList((prev) => [...prev, newMessage]);
      });
    }

    return () => {
      if (connectionChat.current) {
        connectionChat.current.disconnect();
      }
    };
  }, []);

  const onMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    connectionChat.current.emit("chat message", {
      text: message,
      authorId: username,
    });
  };

  return (
    <section>
      <input onChange={onMessageChange} value={message} />
      <button onClick={sendMessage}>Wyślij!</button>
      <ul>
        {messageList.map((el, index) => (
          <li key={index}>
            <b>{el.authorId}:</b>
            {el.text}
          </li>
        ))}
      </ul>
    </section>
  );
};
