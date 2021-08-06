import React from "react";
import Comment1 from "./../components/img/Comment1.png";
import Comment2 from "./../components/img/Comment2.png";
import Comment3 from "./../components/img/Comment3.png";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
let uid = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
const initialState = {
  postsData: [
    {
      id: 1,
      post: "Hey Jhon, wanna fight with me? I’ll beat you at wrestlmania! So be carefull!",
      likeCount: 23,
      name: "Dwayne Johnson",
      img: Comment1,
    },
    {
      id: 2,
      post: "Dwayne, you don't stand a chance, we'll see soon who will be on top",
      likeCount: 40,
      name: "Jhon Cena",
      img: Comment3,
    },
    {
      id: 3,
      post: "Hi, guys! I will definitely be!",
      likeCount: 12,
      name: "The Undertaker",
      img: Comment2,
    },
  ],

  newPostChange: "Write something...",
  profile: null,
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
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export default profileReducer;
