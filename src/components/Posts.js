import React from "react";
import { useState } from "react";
import "../styles/posts.css";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost, updatePost } from "../redux/postsSlice";
import "../styles/postCard.css";

function Posts() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [title2, setTitle2] = useState("");
  const [content2, setContent2] = useState("");
  const [edit, setEdit] = useState(false);
  const [titleVerify, setTitleVerify] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const handleTitleChange2 = (e) => {
    setTitle2(e.target.value);
  };

  const handleContentChange2 = (e) => {
    setContent2(e.target.value);
  };

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Title:", title);
    console.log("Content:", content);

    // Dispatch the action
    dispatch(addPost({ title, content }));

    // Clear the form
    setTitle("");
    setContent("");
  };
  const handleSubmitChange = (title) => {
    dispatch(updatePost({ title, content2 }));

    setTitle("");
    setContent("");
    setEdit(false);
  };

  return (
    <div className="post">
      <form onSubmit={handleSubmit} className="post-form">
        {" "}
        {/* Add 'post-form' class */}
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            id="content"
            rows="4"
            value={content}
            onChange={handleContentChange}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <h2>Post List</h2>
      {posts.map((post) => (
        <div className="card post-card" key={post.id}>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
            <div className="btn-group">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setEdit(true);
                  setTitleVerify(post.title);
                }}>
                Edit
              </button>

              <button
                className="btn btn-danger"
                onClick={() => dispatch(deletePost(post.title))}>
                Delete
              </button>
            </div>
            {edit && titleVerify == post.title && (
              <form
                onSubmit={handleSubmitChange(post.title)}
                className="post-form">
                {" "}
                {/* Add 'post-form' class */}
                <div className="form-group">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title2"
                    value={title2}
                    onChange={handleTitleChange2}
                  />
                  <label htmlFor="content" className="form-label">
                    Content
                  </label>
                  <textarea
                    className="form-control"
                    id="content2"
                    rows="4"
                    value={content2}
                    onChange={handleContentChange2}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
