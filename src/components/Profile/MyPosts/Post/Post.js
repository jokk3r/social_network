import React from "react";
import style from "./Post.module.scss";

function Post(props) {
  return (
    <div className={style.posts__item}>
      <div className={style.posts__info}>
        <img src={props.img} alt="" />
        <div>
          <p className={style.posts__name}>{props.name}</p>
          <div className={style.posts__message}>{props.message}</div>
        </div>
      </div>
      {/* <div className={style.posts__likes}>
        <span>{props.like} like</span>
      </div> */}
    </div>
  );
}

export default Post;
