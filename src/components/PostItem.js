import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../getData';
import CommentList from './CommentList';

function PostItem({ post }) {
  const [comments, setComments] = useState([]);
  const [commentUrl, setCommentUrl] = useState('');

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
    <article>
      <Link to={'post/' + post.id}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.userName}</p>
      <button onClick={() => setCommentUrl(`/posts/${post.id}/comments`)}>
        Get comments
      </button>
      {comments && <CommentList comments={comments} />}
    </article>
  );
}

export default PostItem;
