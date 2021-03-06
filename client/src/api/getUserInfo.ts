import { actionResponse, userInfo } from "../types";
import { api } from "../static";

const userInfoQuery = `
  query getSignedUser {
    getSignedUser{
      user {
        id
        username
        email
        language
        keyboard_layout
        created_at
        keyboard_indexes
        keyboard_layout
        keyboard_visuals
        animations
      }
      error {
        success
        info
        message
      }
    }
  }
`;

type userQueryOptions = {
  onSuccess: (user: userInfo) => void;
  onError: () => void;
};

const getUserInfo = async ({ onSuccess, onError }: userQueryOptions) => {
  try {
    const data = await api.post("", {
      query: userInfoQuery,
    });

    const result: { user?: userInfo; error?: actionResponse } =
      data.data.data.getSignedUser;

    if (result.user) {
      onSuccess(result.user);
    } else {
      onError();
    }
  } catch (error) {
    onError();
  }
};

export default getUserInfo;
