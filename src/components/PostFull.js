import React, { useEffect, useState } from 'react';
import { set, get } from 'money-clip';
import { getData } from '../getData';

function PostFull(props) {
  const postId = props.match.params.id;
  const [post, setPost] = useState({
    title: '',
    body: '',
    bodyArray: [],
  });

  useEffect(() => {
    async function fetchData() {
      const cachedPost = await get(`post_id_${postId}`);

      if (cachedPost) {
        setPost(cachedPost);
        return;
      }

      const post = await getData('posts/' + postId);
      const bodyArray = post.data.body.split('\n');
      const postWithArray = { ...post.data, bodyArray };
      set(`post_id_${postId}`, postWithArray);
      setPost(postWithArray);
    }
    fetchData();
  }, []);

  return (
    <article>
      <h1>{post.title}</h1>
      {post.bodyArray.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </article>
  );
}

export default PostFull;
