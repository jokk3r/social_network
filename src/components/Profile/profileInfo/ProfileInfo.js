import React from "react";
import style from "./ProfileInfo.module.scss";
import Photos from "./Photos/Photos";
import { ProfileInfoData } from "./ProfileInfoData";
import Preloader from "../../common/preloader/Preloader";
import userDefaultImg from "../../img/user.png";
function ProfileInfo(props) {
  console.log(props);
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={style.description__block}>
        <div className={style.profile__main}>
          <div className={style.profile__img}>
            <img
              src={
                props.profile.photos.large
                  ? props.profile.photos.large
                  : userDefaultImg
              }
              style={{ width: "100%" }}
              alt=""
            />
          </div>
          <div className={style.profile__info}>
            <div className={style.profile__nameBlock}>
              <h3 className={style.profile__name}>{props.profile.fullName}</h3>
              <p className={style.profile__status}>{props.profile.aboutMe}</p>
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
        <div>
          {props.profile.lookingForAJob === true ? (
            <p>I.m looking for a Job</p>
          ) : (
            <p>I.m don't looking for a Job</p>
          )}
          <p>
            Description:{" "}
            {props.profile.lookingForAJobDescription
              ? props.profile.lookingForAJobDescription
              : "missing"}
          </p>
        </div>

        {/* <Photos store={props.store} photos={ProfileInfoData.photos} /> */}
      </div>
    </div>
  );
}

export default ProfileInfo;
