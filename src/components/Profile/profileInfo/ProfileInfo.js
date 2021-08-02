import React from "react";
import style from "./ProfileInfo.module.scss";
import Photos from "./Photos/Photos";
import { ProfileInfoData } from "./ProfileInfoData";

function ProfileInfo(props) {
  return (
    <div>
      <div className={style.description__block}>
        <div className={style.profile__main}>
          <div className={style.profile__img}>
            <img src={ProfileInfoData.profileBild} alt="" />
          </div>
          <div className={style.profile__info}>
            <div className={style.profile__nameBlock}>
              <h3 className={style.profile__name}>{ProfileInfoData.name}</h3>
              <p className={style.profile__status}>{ProfileInfoData.status}</p>
            </div>
            <div className={style.profile__description}>
              <div className={style.profile__parameter}>
                <p>City</p>
                <p>Age</p>
                <p>place of work</p>
              </div>
              <div className={style.profile__userInfo}>
                <p>{ProfileInfoData.city}</p>
                <p>{ProfileInfoData.age}</p>
                <p>{ProfileInfoData.placeOfWork}</p>
              </div>
            </div>
          </div>
        </div>
        <Photos store={props.store} photos={ProfileInfoData.photos} />
      </div>
    </div>
  );
}

export default ProfileInfo;
