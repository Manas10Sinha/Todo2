import { useContext, useRef } from "react";
import { PostList as PostListData } from "../Store/post-list-store";
import sound2 from "../static/Sound2.wav";

const CreatePost = () => {
  const { addPost } = useContext(PostListData);
  const add_UserId = useRef("");
  const add_PostTitle = useRef("");
  const add_PostContent = useRef("");
  const add_Reactions = useRef("");
  const add_tags = useRef("");

  const handleSubmitPost = (event) => {
    event.preventDefault(); //prevent date from pushing to server
    const UserId = add_UserId.current.value;
    const PostTitle = add_PostTitle.current.value;
    const PostContent = add_PostContent.current.value;
    const Reactions = add_Reactions.current.value;
    const tags = add_tags.current.value.split(" ");
    //const hashtags = add_tags.current.value.split(/(\s+)/); //puts in array and make space elements
    //let tags = hashtags.filter((element) => element.trim() !== "");
    add_UserId.current.value = "";
    add_PostTitle.current.value = "";
    add_PostContent.current.value = "";
    add_Reactions.current.value = "";
    add_tags.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      //POST REQUEST
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: PostTitle,
        body: PostContent,
        reactions: Reactions,
        userId: UserId,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => addPost(post));
  };

  const clickSound = () => {
    const audio = new Audio(sound2); // create Audio element with sound1 file
    audio.play(); // play the audio
  };
  return (
    <form className="create-post" onSubmit={handleSubmitPost}>
      <div className="mb-3">
        <label htmlFor="user-id" className="form-label">
          User Id
        </label>
        <input
          type="text"
          className="form-control"
          id="user-id"
          placeholder="Ex : xyz105"
          ref={add_UserId}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
          ref={add_PostTitle}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          rows="4"
          type="text"
          className="form-control"
          id="body"
          placeholder="Tell us more about it..."
          ref={add_PostContent}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post "
          ref={add_Reactions}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="Enter tags using space"
          ref={add_tags}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={clickSound}>
        Post
      </button>
    </form>
  );
};

export default CreatePost;
