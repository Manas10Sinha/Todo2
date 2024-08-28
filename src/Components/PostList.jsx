import Post from "./Post";
import { PostList as PostListData } from "../Store/post-list-store";
import { useContext } from "react";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const { postList, Fetching } = useContext(PostListData);

  return (
    <>
      {Fetching && <LoadingSpinner />}
      {!Fetching && postList.length === 0 && <WelcomeMessage />}
      <div className="post-container">
        {!Fetching &&
          postList.map((post, index) => <Post key={index} post={post} />)}
      </div>
    </>
  );
};

export default PostList;
