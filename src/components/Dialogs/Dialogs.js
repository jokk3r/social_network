import React from "react";
import style from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";

function Dialogs(props) {
  console.log(props);

  let state = props.messagesPage;

  let dialogsElements = state.dialogsData.map((item) => (
    <DialogItem name={item.name} id={item.id} key={item.id} />
  ));
  let messageElements = state.messagesData.map((item) => (
    <Message message={item.message} id={item.id} key={item.id} />
  ));

  let onSendMessage = () => {
    props.sendMessage();
  };

  const onNewMessageChange = (e) => {
    let body = e.target.value;
    props.newMessageClick(body);
  };
  if (!props.isAuth) return <Redirect to={"/login"} />;
  return (
    <div className={style.dialogs}>
      <div className={style.dialog__items}>{dialogsElements}</div>
      <div className={style.dialog__messages}>
        <div>{messageElements}</div>
        <div className={style.dialog__newPost}>
          <div>
            <textarea
              name=""
              id=""
              // ref={newEl}
              cols="30"
              rows="10"
              placeholder="enter your message"
              value={state.newMessageBody}
              onChange={onNewMessageChange}
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessage}>send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
