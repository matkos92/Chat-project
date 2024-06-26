import { useDispatch, useSelector } from "react-redux";

export const ProfilePage = () => {
  const dispatch = useDispatch();

  const username = useSelector((state) => state.username);

  const onUsernameChange = (e) => {
    dispatch({ type: "CHANGE_USERNAME", payload: e.target.value });
  };

  return (
    <div>
      <h2>Profil</h2>
      <h3>Twój nick to {username}</h3>
      <label>
        Podaj swój nick:
        <input onChange={onUsernameChange} value={username} />
      </label>
    </div>
  );
};
