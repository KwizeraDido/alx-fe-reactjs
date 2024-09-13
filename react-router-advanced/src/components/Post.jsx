// src/components/Post.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();
  return <h2>Viewing post {id}</h2>;
};

export default Post;
