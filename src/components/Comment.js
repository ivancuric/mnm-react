import React from 'react';

function Comment({ comment }) {
  return (
    <article>
      <div>{comment.email} wrote:</div>
      <div>{comment.body}</div>
    </article>
  );
}

export default Comment;
