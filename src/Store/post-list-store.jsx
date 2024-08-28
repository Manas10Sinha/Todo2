import { createContext, useReducer, useState, useEffect } from "react";
import deleteSound from "../static/Sound2.wav";
import { useNavigate } from "react-router-dom";
const Default_Context = {
  //context structure
  postList: [],
  Fetching: false,
  addPost: () => {},
  deletePost: () => {},
  setActiveState: () => {},
  ActiveState: [],
};
export const PostList = createContext(Default_Context);

const postListReducer = (currPostList, action) => {
  let New_Posts = currPostList;
  if (action.type === "Delete_Post") {
    New_Posts = New_Posts.filter((post) => post.id !== action.payload.Post_Id);
  } else if (action.type === "Add_Post") {
    console.log(action.payload);
    New_Posts = [
      action.payload,
      ...currPostList,
      /*{
        id: Date.now(),
        title: action.payload.PostTitle,
        body: action.payload.PostContent,
        reactions: action.payload.Reactions,
        userId: action.payload.UserId,
        tags: action.payload.tags,
      },*/
    ];
  } else if (action.type === "Add_Initail_Posts") {
    New_Posts = action.payload.posts;
  }
  return New_Posts;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [Fetching, setFetching] = useState(false);
  const navigate = useNavigate();
  const [ActiveState, setActiveState] = useState("Home");

  const addPost = (post) => {
    const Add_Action = {
      type: "Add_Post",
      payload: post, //shortcut
    };
    dispatchPostList(Add_Action);
    navigate("/");
    setActiveState("Home");
  };
  const addInitialPosts = (posts) => {
    const Add_ActionInitialPosts = {
      type: "Add_Initail_Posts",
      payload: { posts }, //shortcut
    };

    dispatchPostList(Add_ActionInitialPosts);
  };
  const deletePost = (post_id) => {
    const Delete_Action = {
      type: "Delete_Post",
      payload: { Post_Id: post_id }, //longcut
    };
    const audio = new Audio(deleteSound); // create Audio element with sound1 file
    audio.play(); // play the audio
    dispatchPostList(Delete_Action);
  };

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const singnal = controller.signal;
    fetch("https://dummyjson.com/posts", { singnal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        Fetching,
        deletePost,
        setActiveState,
        ActiveState,
      }}
    >
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
