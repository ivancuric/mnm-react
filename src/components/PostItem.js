import React from 'react';
import { Link } from 'react-router-dom';

function PostItem({ post }) {
  return (
    <article>
      <Link to={'post/' + post.id}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.userName}</p>
    </article>
  );
}

export default PostItem;
