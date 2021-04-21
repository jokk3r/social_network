const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

const initialState = {
  users: [
    // {
    //   id: 1,
    //   photos: {
    //     small:
    //       "https://www.gannett-cdn.com/presto/2020/04/18/USAT/f5e5f735-2eff-426c-a783-baca6d2872ab-05.JPG?crop=984,1012,x0,y0&width=1588",
    //   },
    //   followed: true,
    //   fullName: "Michael Jordan",
    //   status: "Time to play",
    //   location: { city: "Chicago", country: "USA" },
    // },
    // {
    //   id: 2,
    //   photos: {
    //     small:
    //       "https://vignette.wikia.nocookie.net/p__/images/0/0d/2763428-Niko-Bellic.jpg/revision/latest/top-crop/width/360/height/450?cb=20130309215013&path-prefix=protagonist",
    //   },
    //   followed: false,
    //   fullName: "Niko Bellic",
    //   status: "I'm ready to go",
    //   location: { city: "Liberty City", country: "USA" },
    // },
    // {
    //   id: 3,
    //   photos: {
    //     small:
    //       "https://i.pinimg.com/originals/13/8b/31/138b31858be04ab0375e6258173dbb1c.jpg",
    //   },
    //   followed: true,
    //   fullName: "Vito Corleone",
    //   status: "My family is everything to me",
    //   location: { city: "New York", country: "USA" },
    // },
    // {
    //   id: 4,
    //   photos: {
    //     small:
    //       "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Tsiolkovsky.jpg/220px-Tsiolkovsky.jpg",
    //   },
    //   followed: false,
    //   fullName: "Konstantin Tsiolkovsky",
    //   status:
    //     "Earth is the cradle of mankind; but one cannot live one's whole life in a cradle",
    //   location: { city: "Kaluga", country: "Russia" },
    // },
  ],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...action.users] };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.count };

    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCountAC = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export default usersReducer;
