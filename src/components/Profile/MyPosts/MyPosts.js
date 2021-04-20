import React from "react";
import style from "./MyPosts.module.scss";
import Post from "./Post/Post";
import Send from "./../../img/Send.png";
// let addPostActionCreater = () => {
//   return { type: "ADD-POST" };
// };

// let updateNewPostActionCreater = (text) => {
//   return { type: "UPDATE-NEW-POST-TEXT", newText: text };
// };

function MyPosts(props) {
  console.log(props);
  let onPostChange = (e) => {
    let text = e.target.value;
    props.onPostChange(text);
  };
  let onAddPost = () => {
    props.addPost();
  };
  console.log(props);
  return (
    <div className={style.posts__block}>
      <div className={style.posts__main}>
        <div className={style.posts__head}>
          <h3 className={style.posts__name}>My posts</h3>
          <p className={style.posts__number}>{props.postsData.length}</p>
        </div>
        <div className={style.posts__input}>
          <input
            className={style.posts__inputt}
            type="text"
            value={props.newPostChange}
            onChange={onPostChange}
          />

          <div className={style.posts__send} onClick={onAddPost}>
            <img src={Send} alt="" />
          </div>
        </div>
        <div className={style.posts}>
          {props.postsData.map((item) => (
            <Post
              message={item.post}
              like={item.likeCount}
              id={item.id}
              key={item.id}
              img={item.img}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyPosts;
