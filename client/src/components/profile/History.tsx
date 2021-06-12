import React, { FC, useEffect } from "react";
import { Dispatch } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { useHistory } from "react-router";

import { reduxStore, userPracticeHistory } from "../../types";
import { setProfileHistory } from "../../redux/actions";
import { getProfileHistory } from "../../api";
import {
  HistoryGrid,
  Indexes,
  ItemInfoText,
  ItemList,
  ItemRow,
  Items,
  SummaryLinkButton,
} from "./history/";

const rdxState = (state: reduxStore) => ({
  history: state.profile.history,
  awaitingUpdate: state.profile.awaitingHistoryUpdate,
});

const rdxDispatch = (dispatch: Dispatch) => ({
  updateHistory: (type: "load" | "update", history: userPracticeHistory) =>
    dispatch(setProfileHistory(history, type)),
});

const withRedux = connect(rdxState, rdxDispatch);

type props = ConnectedProps<typeof withRedux>;

const History: FC<props> = ({ awaitingUpdate, history, updateHistory }) => {
  const nav = useHistory();

  useEffect(() => {
    if (!history) {
      getProfileHistory({
        type: "load",
        onError: () => console.log("error"),
        onSuccess: updateHistory,
      });
    } else if (awaitingUpdate) {
      getProfileHistory({
        type: "update",
        onError: () => console.log("error"),
        onSuccess: updateHistory,
        lastDate: history.lastPractices[0].created_at,
      });
    }
  }, [awaitingUpdate, history, updateHistory]);

  if (!history) {
    return <div>Loading...</div>;
  }

  return (
    <HistoryGrid>
      <Items>
        <ItemList>
          {history.lastPractices.map((item, index) => (
            <ItemRow key={index}>
              <ItemInfoText darken>
                {new Date(item.created_at).toLocaleString("uk-en")}
              </ItemInfoText>
              <ItemInfoText>{item.category}</ItemInfoText>
              <ItemInfoText darken>Top 200 English words</ItemInfoText>
              <ItemInfoText>{item.score}</ItemInfoText>
              <ItemInfoText darken>{item.cpm}</ItemInfoText>
              <ItemInfoText>{item.error_rate.toFixed(2)}</ItemInfoText>
              <ItemInfoText darken>{item.length}</ItemInfoText>
              <SummaryLinkButton
                onClick={() => nav.push(`/practice/finished/id=${item.id}/`)}
              />
            </ItemRow>
          ))}
        </ItemList>
      </Items>
      <Indexes>
        <ItemInfoText index darken>
          Time of practice
        </ItemInfoText>
        <ItemInfoText index>Category</ItemInfoText>
        <ItemInfoText index darken>
          Name
        </ItemInfoText>
        <ItemInfoText index>Score</ItemInfoText>
        <ItemInfoText index darken>
          Cpm
        </ItemInfoText>
        <ItemInfoText index>Errors %</ItemInfoText>
        <ItemInfoText index darken>
          Length
        </ItemInfoText>
        <ItemInfoText index>Details</ItemInfoText>
      </Indexes>
    </HistoryGrid>
  );
};

export default withRedux(History);