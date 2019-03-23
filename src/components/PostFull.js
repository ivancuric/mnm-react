import { get, set } from 'money-clip';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../getData';
import { useHello } from '../useHello';
import styles from './PostFull.module.scss';

function PostFull({ helloMessage, ...props }) {
  const postId = props.match.params.id;

  useHello(helloMessage, PostFull);

  const [post, setPost] = useState({
    title: '',
    body: '',
  });

  useEffect(() => {
    (async () => {
      const cachedPost = await get(`post_id_${postId}`);

      if (cachedPost) {
        setPost(cachedPost);
        return;
      }

      const post = await getData('posts/' + postId);
      set(`post_id_${postId}`, post.data);
      setPost(post.data);
    })();
  }, []);

  return (
    <article className={styles.article}>
      <Link className={styles.allPosts} to="/app">
        View all posts
      </Link>
      <h1>{post.title}</h1>
      <div className={styles.content}>{post.body}</div>
    </article>
  );
}

export default PostFull;
