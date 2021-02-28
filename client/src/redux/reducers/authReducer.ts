import {AuthReducer, UserInfoReducer } from "../../types/redux/AuthT";

export const refreshAuthReducer: AuthReducer = (state = { AuthCount: 0}, action) => {
  switch (action.type) {
    case "auth/refresh":
      return { AuthCount: ++state.AuthCount};
    default:
      return state;
  }
};

export const setUserInfo: UserInfoReducer = (
  state = {
    id: 0,
    username: "",
    email: "",
    language: "",
    keyboard_layout: "",
    color_scheme: "",
    created_at: "0",
  },

  action
) => {
  switch (action.type) {
    case "auth/setUserInfo":
      return {
        ...state,
        username: action.user.username,
      };
    default:
      return state;
  }
};
