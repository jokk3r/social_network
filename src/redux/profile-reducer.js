import React from "react";
import Comment1 from "./../components/img/Comment1.png";
import Comment2 from "./../components/img/Comment2.png";
import Comment3 from "./../components/img/Comment3.png";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
let uid = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
const initialState = {
  postsData: [
    {
      id: 1,
      post: "Hi, guys!",
      likeCount: 12,
      name: "The Undertaker",
      img: Comment2,
    },
    {
      id: 2,
      post: "Dwayne, you will eat my shit, my leg will be in your ASSHOLE!",
      likeCount: 1,
      name: "Jhon Cena",
      img: Comment3,
    },
    {
      id: 3,
      post:
        "Hey Jhon, kiss my fucking black ass and suck my big cock! I’ll beat you at wrestlmania! So be very carefull, my fist in your ass!",
      likeCount: 23,
      name: "Dwayne Johnson",
      img: Comment1,
    },
  ],

  newPostChange: "Write something...",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostChange: "",
        postsData: [
          ...state.postsData,
          {
            id: uid(),
            post: state.newPostChange,
            likeCount: 0,
            name: "Jhon Cena",
            img: Comment3,
          },
        ],
      };
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostChange: action.newText };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
