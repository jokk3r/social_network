const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let uid = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
const initialState = {
  postsData: [
    { id: 1, post: "hi", likeCount: 12 },
    { id: 2, post: "How are you?", likeCount: 1 },
    { id: 3, post: "hi, what'up?", likeCount: 23 },
    { id: 6, post: "It's a second post", likeCount: 23 },
  ],
  newPostChange: "it something",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostChange: "",
        postsData: [
          ...state.postsData,
          {
            id: uid(),
            post: state.newPostChange,
            likeCount: 0,
          },
        ],
      };
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostChange: action.newText };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
