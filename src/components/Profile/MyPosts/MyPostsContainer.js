import React from "react";
import MyPosts from "./MyPosts";

import {
  updateNewPostActionCreator,
  addPostActionCreator,
} from "../../../redux/profile-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostChange: state.profilePage.newPostChange,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onPostChange: (text) => {
      dispatch(updateNewPostActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
