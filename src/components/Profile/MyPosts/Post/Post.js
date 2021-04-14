import React from "react";
import style from "./Post.module.scss";

function Post(props) {
  return (
    <div className={style.posts__item}>
      <div className={style.posts__info}>
        <img
          src="https://st.depositphotos.com/1779253/5140/v/950/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg"
          alt=""
        />{" "}
        <div>{props.message}</div>
      </div>
      <div className={style.posts__likes}>
        <span>{props.like} like</span>
      </div>
    </div>
  );
}

export default Post;
