import React from "react";
import axios from "axios";
import style from "./Users.module.scss";
import userDefaultImg from "../img/user.png";
import { NavLink } from "react-router-dom";
import { followUnfollowAPI } from "../../api/api";

function Users(props) {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.slice(0, 10).map((p) => {
          return (
            <span
              className={props.currentPage === p && style.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div className={style.user__img}>
              <NavLink to={"/profile/" + user.id}>
                <img
                  src={
                    user.photos.small != null
                      ? user.photos.small
                      : userDefaultImg
                  }
                  alt=""
                />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.toggleFollowingInProgress(true, user.id);
                    followUnfollowAPI.getUnfollow(user.id).then((response) => {
                      if (response.data.resultCode == 0) {
                        props.unfollow(user.id);
                      }
                    });
                    props.toggleFollowingInProgress(false, user.id);
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.toggleFollowingInProgress(true, user.id);
                    followUnfollowAPI.getFollow(user.id).then((response) => {
                      if (response.data.resultCode == 0) {
                        props.follow(user.id);
                      }
                      props.toggleFollowingInProgress(false, user.id);
                    });
                  }}
                >
                  follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"user.location.country"}</div>
              <div>{"user.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Users;
