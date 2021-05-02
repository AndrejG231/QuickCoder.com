import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadMenu, selectPractice } from "../redux/actions";
import { reduxStore } from "../types";
import { getMenu } from "../api";
import { practiceMenu } from "../types/";
import {
  MenuWrapper,
  PracticesList,
  UserStats,
  PracticeSettings,
} from "../components/practice_menu";

const rdxProps = (state: reduxStore) => {
  return {
    menu: state.practiceMenu,
    selectedPractice: state.practiceSelection.selectedName,
  };
};

const rdxDispatch = (dispatch: any) => {
  return {
    setMenu: (menu: practiceMenu) => dispatch(loadMenu(menu)),
    selectPractice: (practice: string) => dispatch(selectPractice(practice)),
  };
};

interface PracticeMenuProps {
  menu: practiceMenu;
  selectedPractice: string;
  setMenu: (menu: practiceMenu) => void;
  selectPractice: (practice: string) => void;
}

const PracticeMenu: React.FC<PracticeMenuProps> = ({
  menu,
  setMenu,
  selectPractice,
  selectedPractice,
}) => {
  useEffect(() => {
    if (!menu) {
      getMenu({
        onSuccess: (menu) => {
          setMenu(menu);
        },
        onError: () => null,
      });
    }
  }, [menu]);

  if (!menu) {
    return <div>Loading...</div>;
  }

  return (
    <MenuWrapper>
      <PracticesList />
      <UserStats />
      <PracticeSettings />
    </MenuWrapper>
  );
};

export default connect(rdxProps, rdxDispatch)(PracticeMenu);
