import React, { memo } from 'react';
import { useHello } from '../useHello';

function Comment({ comment, helloMessage }) {
  useHello(helloMessage, Comment);

  return (
    <article>
      <div>{comment.email} wrote:</div>
      <div>{comment.body}</div>
    </article>
  );
}

export default memo(Comment);
