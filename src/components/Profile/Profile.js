import React from "react";
import style from "./Profile.module.scss";

import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {
  console.log(props);
  // debugger;
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
