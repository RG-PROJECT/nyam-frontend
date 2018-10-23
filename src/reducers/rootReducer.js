const initState = {
  posts: [
    { id: 1, title: "this is title~", body: "what what what" },
    { id: 2, title: "222this is title~", body: "how how how" },
    { id: 3, title: "333this is title~", body: "where where where" }
  ],
  todos: []
};

const rootReducer = (state = initState, action) => {
  console.log(state, action);
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      console.log("id", post.id, action.id);
      return post.id !== action.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
