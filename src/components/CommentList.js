import React from 'react';
import Comment from './Comment';

function CommentList({ comments }) {
  return (
    <div>
      {comments.map(comment => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </div>
  );
}

export default CommentList;
