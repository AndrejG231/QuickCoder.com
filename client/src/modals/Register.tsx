import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Modal from "../components/Modal";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";

import { useRegisterMutation } from "../graphql/auth";

export const Register: React.FC<{}> = () => {
  const nav = useHistory();

  const { mutation, validate } = useRegisterMutation();
  const [register] = mutation;

  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    success: false,
    info: "",
    action: "",
    message: "",
  });

  const FieldErrors = ["username", "password"];

  const handleRegister = async () => {
    const result = await validate(
      register({ variables: { credentials: credentials } })
    );
    
    console.log(result)
    if (!result.success) {
      setErrors(result);
    } else {
      nav.push("/home/login/");
    }
    return;
  };

  return (
    <Modal>
      <InputField
        label="Username"
        name="username"
        value={credentials.username}
        onEvent={(event) =>
          setCredentials({
            ...credentials,
            username: event.target.value,
          })
        }
        error={errors}
      />
      <InputField
        label="Email"
        name="email"
        value={credentials.email}
        onEvent={(event) =>
          setCredentials({
            ...credentials,
            email: event.target.value,
          })
        }
        error={errors}
      />
      <InputField
        label="Password"
        name="password"
        value={credentials.password}
        type="password"
        onEvent={(event) =>
          setCredentials({
            ...credentials,
            password: event.target.value,
          })
        }
        error={errors}
      />
      <SubmitButton
        error={
          FieldErrors.some((err) => err === errors.info.split("_")[1])
            ? ""
            : errors.message
        }
        label="Create Account"
        onEvent={async () => handleRegister()}
      />
    </Modal>
  );
};

export default Register;