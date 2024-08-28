import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList as PostListData } from "../Store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListData);

  return (
    <div className="card  post-card">
      <div className="card-body">
        <br />
        <div className="id">{post.id}</div>
        <button
          type="button"
          className="btn btn-danger position-absolute top-0 start-100 translate-middle"
          onClick={() => deletePost(post.id)}
        >
          <h4>
            <MdDelete />
          </h4>
        </button>
        <span className="badge text-bg-secondary  position-relative user">
          {post.userId}
          <span className="position-absolute top-0 start-100 translate-middle p-2 bg-success border border-light rounded-circle">
            <span className="visually-hidden" />
          </span>
        </span>

        <h5 className="card-title position-relative">{post.title}</h5>

        <p className="card-text">{post.body}</p>

        <div>
          {post.tags.map((tag, index) => (
            <span className="badge text-bg-primary tag" key={index}>
              {tag}
            </span>
          ))}
        </div>
        <div className="alert alert-success alert" role="alert">
          This post is reacted by 1 people
        </div>
      </div>
    </div>
  );
};

export default Post;
