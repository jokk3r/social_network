import React from "react";
import style from "./ProfileInfo.module.scss";
import ProfileBild from "./../../img/Sena.jpg";
import Photos from "./Photos/Photos";
function ProfileInfo(props) {
  console.log(props);
  return (
    <div>
      <div className={style.description__block}>
        <div className={style.profile__main}>
          <div className={style.profile__img}>
            <img src={ProfileBild} alt="" />
          </div>
          <div className={style.profile__info}>
            <div className={style.profile__nameBlock}>
              <h3 className={style.profile__name}>Jhon Cena</h3>
              <p className={style.profile__status}>#BeHonestToYourself</p>
            </div>
            <div className={style.profile__description}>
              <div className={style.profile__parameter}>
                <p>City</p>
                <p>Age</p>
                <p>place of work</p>
              </div>
              <div className={style.profile__userInfo}>
                <p>WEST NEWBURY</p>
                <p>43</p>
                <p>WWE</p>
              </div>
            </div>
          </div>
        </div>
        <Photos store={props.store} />
      </div>
    </div>
  );
}

export default ProfileInfo;
