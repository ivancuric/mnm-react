import React, { useEffect, useState } from 'react';
import { set, get } from 'money-clip';
import { getData } from '../getData';
import PostItem from './PostItem';

function PostList() {
  const [posts, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const cachedPosts = await get('posts');

      if (cachedPosts) {
        setData(cachedPosts);
        return;
      }

      const posts = await getData('posts');
      const userIds = Array.from(new Set(posts.data.map(post => post.userId)));

      const users = await Promise.all(
        userIds.map(id => getData('users/' + id)),
      );

      const userMap = new Map();

      users.forEach(user => {
        userMap.set(user.data.id, user.data.name);
      });

      const postsWithUsernames = posts.data.map(post => {
        return {
          ...post,
          userName: userMap.get(post.userId),
        };
      });

      // @ts-ignore
      set('posts', postsWithUsernames);
      setData(postsWithUsernames);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Post List</h1>
      {posts.map(post => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostList;