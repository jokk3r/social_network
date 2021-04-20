import React from "react";
import style from "./Photos.module.scss";
import photo1 from "./../../../img/photo1.jpg";
import photo2 from "./../../../img/photo2.jpg";
import photo3 from "./../../../img/photo3.jpg";
import photo4 from "./../../../img/photo4.jpg";
function Photos(props) {
  console.log(props);
  return (
    <div className={style.photos__main}>
      <div className={style.photos__head}>
        <h3 className={style.photos__name}>Photos</h3>
        <p className={style.photos__show}>Show All</p>
      </div>
      <div className={style.photos__images}>
        <img src={photo1} alt="" />
        <img src={photo2} alt="" />
        <img src={photo3} alt="" />
        <img src={photo4} alt="" />
      </div>
    </div>
  );
}

export default Photos;
