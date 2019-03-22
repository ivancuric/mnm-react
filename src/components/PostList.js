import { get, set } from 'money-clip';
import React, { useEffect, useState } from 'react';
import { getData } from '../getData';
import { useHello } from '../useHello';
import PostItem from './PostItem';
import Search from './Search';

function PostList({ helloMessage }) {
  const [query, setQuery] = useState('');
  const [posts, setPosts] = useState([]);
  const [fetchedPosts, setFetchedPosts] = useState([]);
  const [cachedPosts, setCachedPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  async function fetchNewPosts() {
    console.log('Fetch new posts');
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
    setFetchedPosts(postsWithUsernames);
  }

  useHello(helloMessage, PostList);

  // Get cached or fetch new
  useEffect(() => {
    (async () => {
      const cachedPosts = await get('posts');
      if (cachedPosts) {
        setCachedPosts(cachedPosts);
      } else {
        fetchNewPosts();
      }
    })();
  }, []);

  // Use cached or fetched posts
  useEffect(() => {
    if (cachedPosts.length) {
      setPosts(cachedPosts);
      return;
    }

    if (fetchedPosts.length) {
      setPosts(fetchedPosts);
      return;
    }
  }, [cachedPosts, fetchedPosts]);

  // Filter posts
  useEffect(() => {
    if (!posts.length) {
      return;
    }

    const filteredPosts = posts.filter(post => post.userName.includes(query));
    setFilteredPosts(filteredPosts);
  }, [query, posts]);

  return (
    <div>
      <h1>Post List</h1>
      <Search query={query} setQuery={setQuery} helloMessage={helloMessage} />
      {filteredPosts.map(post => (
        <PostItem post={post} key={post.id} helloMessage={helloMessage} />
      ))}
    </div>
  );
}

export default PostList;
