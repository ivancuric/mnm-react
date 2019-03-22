import React from 'react';
import Comment from './Comment';
import { useHello } from '../useHello';

function CommentList({ comments, helloMessage }) {
  useHello(helloMessage, CommentList);

  return (
    <div>
      {comments.map(comment => (
        <Comment
          comment={comment}
          key={comment.id}
          helloMessage={helloMessage}
        />
      ))}
    </div>
  );
}

export default CommentList;
