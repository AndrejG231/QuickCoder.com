export type field = "modal" | "home" | "message";

export type animations = {
  [key in field]: boolean;
};

export type action = {
  type: string;
  field: field;
};

export type reducer = {
  (state: animations, action: action): animations;
};
