import { get, set } from 'money-clip';
import React, { useEffect, useState } from 'react';
import { getData } from '../getData';
import PostItem from './PostItem';
import Search from './Search';

function PostList() {
  const [query, setQuery] = useState('');
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const cachedPosts = await get('posts');

      if (cachedPosts) {
        setPosts(cachedPosts);
        return;
      }

      const posts = await getData('posts');
      const uniqueUserIds = Array.from(
        new Set(posts.data.map(post => post.userId)),
      );

      const users = await Promise.all(
        uniqueUserIds.map(id => getData('users/' + id)),
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

      set('posts', postsWithUsernames);
      setPosts(postsWithUsernames);
    })();
  }, []);

  useEffect(() => {
    const filteredPosts = posts.filter(post => post.userName.includes(query));
    setFilteredPosts(filteredPosts);
  }, [query, posts]);

  return (
    <div>
      <h1>Post List</h1>
      <Search query={query} setQuery={setQuery} />
      {filteredPosts.map(post => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostList;
