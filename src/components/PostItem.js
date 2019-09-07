import React from "react";
import PropTypes from "prop-types";
import "../App.css";

function PostItem({ content, author, date, comments }) {
  return (
    <li>
      <div className="container">
        <div className="headerPost">
          <img className="avatar" src={author.avatar} />
          <div>
            <span>{author.name}</span>
            <br />
            <span className="data">{date}</span>
          </div>
        </div>
        <p>{content}</p>
        <PostComments comments={comments} />
      </div>
    </li>
  );
}

function PostComments({ comments }) {
  return (
    <div>
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img className="avatar" src={comment.author.avatar} />
          <div className="headerComment">
            <span>
              <strong>{comment.author.name}</strong>
            </span>
            <span>{comment.content}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

PostItem.defaultProps = {
  author: {
    name: "anonimo"
  }
};

PostItem.propTypes = {
  content: PropTypes.string
};

export default PostItem;
