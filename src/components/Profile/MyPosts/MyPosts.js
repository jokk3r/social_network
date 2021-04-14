import React from "react";
import style from "./MyPosts.module.scss";
import Post from "./Post/Post";

// let addPostActionCreater = () => {
//   return { type: "ADD-POST" };
// };

// let updateNewPostActionCreater = (text) => {
//   return { type: "UPDATE-NEW-POST-TEXT", newText: text };
// };

function MyPosts(props) {
  let onPostChange = (e) => {
    let text = e.target.value;
    props.onPostChange(text);
  };
  let onAddPost = () => {
    props.addPost();
  };
  return (
    <div className={style.posts__block}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            // ref={newEl}
            value={props.newPostChange}
            onChange={onPostChange}
          />
        </div>
        <div>
          <button onClick={onAddPost}>add post</button>
        </div>
      </div>
      <div className={style.posts}>
        {props.postsData.map((item) => (
          <Post
            message={item.post}
            like={item.likeCount}
            id={item.id}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default MyPosts;
