import React, { memo } from 'react';
import PostItem from './PostItem';
import { useHello } from '../useHello';

function PostList({ helloMessage, posts }) {
  useHello(helloMessage, PostList);

  return (
    <section>
      {posts.map(post => (
        <PostItem post={post} key={post.id} helloMessage={helloMessage} />
      ))}
    </section>
  );
}

export default memo(PostList);
