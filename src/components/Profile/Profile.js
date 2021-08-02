import React from "react";
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {
  return (
    <>
      <ProfileInfo />
      <MyPostsContainer
      // posts={props.state.postsData}
      // state={props.state.newPostChange}
      // dispatch={props.dispatch}
      />
    </>
  );
}

export default Profile;
