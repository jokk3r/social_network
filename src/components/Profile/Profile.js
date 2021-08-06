import React from "react";
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {
  return (
    <>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </>
  );
}

export default Profile;
