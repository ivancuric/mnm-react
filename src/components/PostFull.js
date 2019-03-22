import React, { useEffect, useState } from 'react';
import { getData } from '../getData';

function PostFull(props) {
  const postId = props.match.params.id;
  const [post, setData] = useState({
    title: '',
    body: '',
    bodyArray: [],
  });

  useEffect(() => {
    async function fetchData() {
      const post = await getData('posts/' + postId);
      const bodyArray = post.data.body.split('\n');
      setData({ ...post.data, bodyArray });
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
