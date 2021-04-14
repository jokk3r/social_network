import React from "react";
import style from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props) {
  console.log(props);

  let state = props.messagesPage;
  // let newEl = React.createRef();
  const onHandlerChanger = (e) => {
    let body = e.target.value;

    props.newMessageClick(body);
  };
  let onSendMessage = () => {
    props.sendMessage();
  };
  let dialogsElements = state.dialogsData.map((item) => (
    <DialogItem name={item.name} id={item.id} key={item.id} />
  ));
  let messageElements = state.messagesData.map((item) => (
    <Message message={item.message} id={item.id} key={item.id} />
  ));
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
              onChange={onHandlerChanger}
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
