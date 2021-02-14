import React from "react";

export type ReactChild = React.ReactChild | React.ReactChild[] | never[];

export type UserInfo = {
  id: number,
  username: string,
  email: string,
  language: string,
  keyboard_layout: string,
  color_scheme: string,
  created_at: string,
};

export type ActionResponse = {
  success: boolean;
  info: string;
  message: string;
  action: string;
};

export type LoginCredentials = {
  identification: string;
  password: string;
};

export type RegisterCredentials = {
  username: string;
  email: string;
  password: string;
};

export type changeKnownPasswordVariables = {
  originalPassword: string;
  newPassword: string;
};

