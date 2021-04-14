import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE_BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

const store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, post: "hi", likeCount: 12 },
        { id: 2, post: "How are you?", likeCount: 1 },
        { id: 3, post: "hi, what'up?", likeCount: 23 },
        { id: 6, post: "It's a second post", likeCount: 23 },
      ],
      newPostChange: "it something",
    },
    messagesPage: {
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
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("changed state");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    // this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
