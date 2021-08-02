import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
} from "../../redux/users-reducer";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
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
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};
// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     },
//   };
// };

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersAPIComponent);
