const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE_BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let uid = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
const initialState = {
  dialogsData: [
    { id: 1, name: "Nik" },
    { id: 2, name: "Peter" },
    { id: 3, name: "Luci" },
    { id: 4, name: "Alex" },
    { id: 5, name: "Georg" },
    { id: 6, name: "Elias" },
  ],
  messagesData: [
    { id: 1, message: "hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "blabla" },
    { id: 4, message: "some else" },
    { id: 5, message: "yo" },
    { id: 6, message: "hey" },
  ],
  newMessageBody: "",
};
const dialogsReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messagesData: [...state.messagesData, { id: uid(), message: body }],
      };

    default:
      return state;
  }
};
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
export default dialogsReducer;
