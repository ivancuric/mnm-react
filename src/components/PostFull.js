import { get, set } from 'money-clip';
import React, { useEffect, useState } from 'react';
import { getData } from '../getData';
import { useHello } from '../useHello';

function PostFull({ helloMessage, ...props }) {
  const postId = props.match.params.id;

  useHello(helloMessage, PostFull);

  const [post, setPost] = useState({
    title: '',
    body: '',
    bodyArray: [],
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
    <article>
      <h1>{post.title}</h1>
      {post.body}
    </article>
  );
}

export default PostFull;
