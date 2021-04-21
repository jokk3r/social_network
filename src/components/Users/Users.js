import React from "react";
import style from "./Users.module.scss";
import * as axios from "axios";
import userDefaultImg from "../img/user.png";
import { render } from "@testing-library/react";

class Users extends React.Component {
  // constructor(props) {
  //   super(props);

  // }
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  // props.setUsers([
  //   {
  //     id: 1,
  //     photoUrl:
  //       "https://www.gannett-cdn.com/presto/2020/04/18/USAT/f5e5f735-2eff-426c-a783-baca6d2872ab-05.JPG?crop=984,1012,x0,y0&width=1588",
  //     followed: true,
  //     fullName: "Michael Jordan",
  //     status: "Time to play",
  //     location: { city: "Chicago", country: "USA" },
  //   },
  //   {
  //     id: 2,
  //     photoUrl:
  //       "https://vignette.wikia.nocookie.net/p__/images/0/0d/2763428-Niko-Bellic.jpg/revision/latest/top-crop/width/360/height/450?cb=20130309215013&path-prefix=protagonist",
  //     followed: false,
  //     fullName: "Niko Bellic",
  //     status: "I'm ready to go",
  //     location: { city: "Liberty City", country: "USA" },
  //   },
  //   {
  //     id: 3,
  //     photoUrl:
  //       "https://i.pinimg.com/originals/13/8b/31/138b31858be04ab0375e6258173dbb1c.jpg",
  //     followed: true,
  //     fullName: "Vito Corleone",
  //     status: "My family is everything to me",
  //     location: { city: "New York", country: "USA" },
  //   },
  //   {
  //     id: 4,
  //     photoUrl:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Tsiolkovsky.jpg/220px-Tsiolkovsky.jpg",
  //     followed: false,
  //     fullName: "Konstantin Tsiolkovsky",
  //     status:
  //       "Earth is the cradle of mankind; but one cannot live one's whole life in a cradle",
  //     location: { city: "Kaluga", country: "Russia" },
  //   },
  // ]);

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

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
                className={this.props.currentPage === p && style.selectedPage}
                onClick={(e) => {
                  this.onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          })}
          {/* <span className={style.selectedPage}>1</span>
          <span className={style.selectedPage}>2</span>
          <span className={style.selectedPage}>3</span>
          <span className={style.selectedPage}>4</span>
          <span className={style.selectedPage}>5</span> */}
        </div>
        {this.props.users.map((user) => (
          <div key={user.id}>
            <span>
              <div className={style.user__img}>
                <img
                  src={
                    user.photos.small != null
                      ? user.photos.small
                      : userDefaultImg
                  }
                  alt=""
                />
              </div>
              <div>
                {user.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(user.id);
                    }}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(user.id);
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
}

export default Users;
