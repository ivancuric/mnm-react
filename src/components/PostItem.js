import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../getData';
import { useHello } from '../useHello';
import CommentList from './CommentList';
import styles from './PostItem.module.css';

function PostItem({ post, helloMessage }) {
  const [comments, setComments] = useState([]);
  const [commentUrl, setCommentUrl] = useState('');

  useHello(helloMessage, PostItem);

  useEffect(() => {
    async function fetchComments() {
      const comments = await getData(commentUrl);
      setComments(comments.data);
    }

    if (commentUrl) {
      fetchComments();
    }
  }, [commentUrl]);

  return (
    <article className={styles.article}>
      <Link to={'post/' + post.id}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.userName}</p>
      <button onClick={() => setCommentUrl(`/posts/${post.id}/comments`)}>
        Get comments
      </button>
      {comments && (
        <CommentList comments={comments} helloMessage={helloMessage} />
      )}
    </article>
  );
}

export default PostItem;
