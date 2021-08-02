import React from "react";
import style from "./Photos.module.scss";

function Photos(props) {
  console.log(props);
  return (
    <div className={style.photos__main}>
      <div className={style.photos__head}>
        <h3 className={style.photos__name}>Photos</h3>
        <p className={style.photos__show}>Show All</p>
      </div>
      <div className={style.photos__images}>
        {props.photos.map((item, index) => {
          return <img src={item} alt="" key={index} />;
        })}
      </div>
    </div>
  );
}

export default Photos;
