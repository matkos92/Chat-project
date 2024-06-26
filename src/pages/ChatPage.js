import { ChatComponent } from "../components/ChatComponent";
import { useSelector } from "react-redux";

export const ChatPage = () => {
  const username = useSelector((state) => state.username);
  return (
    <div>
      <h2>Chat Page</h2>
      <h3>Aktualnie piszesz jako: {username}</h3>
      <ChatComponent username={username} />
    </div>
  );
};
