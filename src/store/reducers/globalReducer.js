const initState = {
  username: "Mat",
};

export const chatReducer = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE_USERNAME": {
      return { ...state, username: action.payload };
    }
    default:
      return state;
  }
};
