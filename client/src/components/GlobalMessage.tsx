import React, { useCallback, useEffect } from "react";
import { IconContext } from "react-icons";
import { BsFillXSquareFill } from "react-icons/bs";
import { connect } from "react-redux";

import { setGlobalMessage } from "../redux/actions/globalMessageActions";
import {
  ToggleAnimationIn,
  ToggleAnimationOut,
} from "../redux/actions/animationActions";
import { ReduxState } from "../types/redux/ReduxState";

import "./GlobalMessage.scss";

interface globalMessageProps {
  message: string;
  AnimationState: number;
  clearMessage: any;
  AnimeIn: any;
  AnimeOut: any;
}

const rdxState = (state: ReduxState) => {
  return {
    message: state.globalMessage.message,
    AnimationState: state.Animations.GlobalMessage.main,
  };
};
const rdxDispatch = (dispatch: any) => {
  return {
    clearMessage: () => dispatch(setGlobalMessage("")),
    AnimeIn: () => dispatch(ToggleAnimationIn("GlobalMessage")),
    AnimeOut: () => dispatch(ToggleAnimationOut("GlobalMessage")),
  };
};

const GlobalMessage: React.FC<globalMessageProps> = ({
  message,
  clearMessage,
  AnimationState,
  AnimeIn,
  AnimeOut,
}) => {
  const RemoveMessageHandler = useCallback(() => {
    const messageToRemove = message;
    if (messageToRemove === message) {
      AnimeOut();
      setTimeout(() => clearMessage(), 1500);
    }
  }, [AnimeOut, clearMessage, message]);

  useEffect(() => {
    AnimeIn();
    setTimeout(() => RemoveMessageHandler(), 4000);
  }, [AnimeIn, RemoveMessageHandler]);

  if (message === "") {
    return <div />;
  }
  return (
    <div
      className="msg-container"
      style={{ transform: `translateY(${AnimationState}px)` }}
    >
      <IconContext.Provider value={{ className: "msg-close-icon" }}>
        <BsFillXSquareFill onClick={() => RemoveMessageHandler()} />
      </IconContext.Provider>
      <div
        className="msg-text-container"
        style={{ width: message.length * 17.39 }}
      >
        <p className="msg-text">{message}</p>
      </div>
    </div>
  );
};

export default connect(rdxState, rdxDispatch)(GlobalMessage);