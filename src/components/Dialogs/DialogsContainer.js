import React from "react";
import style from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Dialogs from "./Dialogs";

import { connect } from "react-redux";

import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    newMessageClick: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};

const dialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default dialogsContainer;
