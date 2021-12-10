import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    addPost({ text });
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Say something...</h3>
      </div>
      <form className="form my-1">
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
          onChange={handleChange}
          value={text}
          required
        ></textarea>
        <input
          type="submit"
          className="btn btn-dark my-1"
          value="Submit"
          onClick={submitForm}
        />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
