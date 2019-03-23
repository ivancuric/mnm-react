import React, { memo } from 'react';
import { useHello } from '../useHello';
import styles from './Comment.module.scss';

function Comment({ comment, helloMessage }) {
  useHello(helloMessage, Comment);

  return (
    <article className={styles.comment}>
      <div className={styles.author}>{comment.email} wrote:</div>
      <div className={styles.content}>{comment.body}</div>
    </article>
  );
}

export default memo(Comment);
