import zxcvbn from "zxcvbn";
import { ActionResponse } from "../types/";
import { generateResponse } from "./";

interface validPassword {
  (password: string, variant?: "new"): false | ActionResponse;
}

const checkPasswordStrength: validPassword = (password, variant) => {
  const action: string =
    variant === "new" ? "changePassword_newPassword" : "register_password";

  const strengthResult = zxcvbn(password);

  if (strengthResult.score < 2) {
    return generateResponse(false, `${action}_weak`);
  }

  return false;
};

export default checkPasswordStrength;
