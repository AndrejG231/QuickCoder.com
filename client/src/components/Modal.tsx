import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import ArrowButton from "./ArrowButton";

import "./Modal.scss";
import { ReduxState } from "../types/redux";
import { ToggleAnimationIn, ToggleAnimationOut } from "../redux/animations";
import { setConstantValue } from "typescript";

const rdxProps = (state: ReduxState) => {
  return {
    AnimationState: state.Animations.Modal,
  };
};

const rdxDispatch = (dispatch: any) => {
  return {
    AnimeIn: () => dispatch(ToggleAnimationIn("Modal")),
    AnimeOut: () => dispatch(ToggleAnimationOut("Modal")),
  };
};

interface ModalProps {
  children: React.ReactChild | React.ReactChild[] | never[];
  contentClass?: string;
  AnimeIn: any;
  AnimeOut: any;
  AnimationState: any;
}

const Modal: React.FC<ModalProps> = ({
  children,
  contentClass,
  AnimeIn,
  AnimeOut,
  AnimationState,
}) => {
  const navigation = useHistory();

  const [active, setActive] = useState(true);

  useEffect(() => {
    if (active) {
      AnimeIn();
      return () => {
        AnimeOut();
      };
    }
  }, []);

  return (
    <div
      className="modal border"
      style={{ transform: `translateX(${AnimationState.main}px)` }}
    >
      <div className={`modal content ${contentClass}`}>{children}</div>
      <ArrowButton
        className="back-button"
        bodyWidth="90px"
        variant="right"
        onClick={() => {
          if (active) {
            setActive(false)
            AnimeOut();
            setTimeout(() => navigation.push("/home/"), 500);
          }
        }}
      >
        Back
      </ArrowButton>
    </div>
  );
};

export default connect(rdxProps, rdxDispatch)(Modal);
