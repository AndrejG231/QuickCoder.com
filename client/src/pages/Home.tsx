import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

//queries
import { GetUserInfo, Logout } from "../graphql/auth";

//Utilities
import guestUser from "../utilites/guestUser";

//Redux
import { setUserInfoAction, logoutAction } from "../redux/actions";
import { ToggleAnimationIn, ToggleAnimationOut } from "../redux/animations";
import { ReduxState } from "../types/redux";

//types
import { UserInfo } from "../types/auth";

//Components
import Header from "../components/home/Header";
import KeyboardBG from "../components/home/KeyboardBG";
import ClippedButton from "../components/home/ClippedButton";
import ArrowButton from "../components/ArrowButton";

//Styles
import "../globalStyles/component.scss";
import "./Home.scss";

//Redux
const rdxState = (state: ReduxState) => {
  return {
    userInfo: state.UserInfo,
    isAuth: state.isAuth,
    AnimationState: state.Animations.HomePage,
  };
};

const rdxDispatch = (dispatch: any) => {
  return {
    setUserInfo: (user: UserInfo) => {
      dispatch(setUserInfoAction(user));
    },
    localLogout: () => {
      dispatch(logoutAction);
    },
    AnimationIn: () => {
      dispatch(ToggleAnimationIn("HomePage"));
    },
    AnimationOut: () => {
      dispatch(ToggleAnimationOut("HomePage"));
    },
  };
};

//

const Home: React.FC<any> = ({
  localLogout,
  userInfo,
  setUserInfo,
  isAuth,
  AnimationState,
  AnimationIn,
  AnimationOut,
}) => {
  const [logout] = Logout();
  const { data, loading, error, refetch } = GetUserInfo();

  const navigation = useHistory();

  useEffect(() => {
    AnimationIn();
    return () => {
      AnimationOut();
    };
  }, []);

  useEffect(() => {
    refetch();
  }, [isAuth]);

  useEffect(() => {
    if (!loading) {
      if (error || data.getSignedUser.user === null) {
        localLogout();
        setUserInfo(guestUser);
      } else {
        setUserInfo(data.getSignedUser.user);
      }
    }
  }, [data, loading, error]);

  return (
    <div className="homeContainer">
      <div
        style={{
          transform: `translateY(-${AnimationState.main}px)`,
        }}
      >
        <Header
          onUserClick={() => {
            navigation.push("/home/profile/");
          }}
          onTitleClick={() => navigation.push("/home/")}
          username={userInfo.username === "" ? "GUEST" : userInfo.username}
        />
      </div>
      <div
        className="flexContainer"
        style={{ transform: `translateX(-${AnimationState.main * 3}px)` }}
      >
        <ClippedButton>Typing test</ClippedButton>
        <ClippedButton>Practice</ClippedButton>
        <ClippedButton>Settings</ClippedButton>
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          width: "100vw",
          transform: `translateX(${AnimationState.main}px)`,
        }}
      >
        {userInfo.username === "GUEST" ? (
          <>
            <ArrowButton
              className="signup button"
              bodyWidth="120px"
              onClick={() => {
                navigation.push("/home/signup/");
              }}
              variant="left"
            >
              Sign Up
            </ArrowButton>
            <ArrowButton
              className="login button"
              bodyWidth="100px"
              onClick={() => {
                navigation.push("/home/login/");
              }}
              variant="left"
            >
              Login
            </ArrowButton>{" "}
          </>
        ) : (
          <ArrowButton
            className="signup button"
            bodyWidth="100px"
            onClick={async () => {
              await logout();
              localLogout();
            }}
            variant="left"
          >
            Logout
          </ArrowButton>
        )}
      </div>
      <div
        style={{
          zIndex: -1,
          position: "absolute",
          bottom: 0,
          right: 0,
          transform: `translateY(${AnimationState.main}px)`,
        }}
      >
        <KeyboardBG className="keyboard-bg" />
      </div>
    </div>
  );
};

export default connect(rdxState, rdxDispatch)(Home);
