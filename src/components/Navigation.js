import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/">Profil</NavLink>
        </li>
        <li>
          <NavLink to="chat">Chat</NavLink>
        </li>
      </ul>
    </div>
  );
};
