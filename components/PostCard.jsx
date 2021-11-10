import React from 'react';
import moment from 'moment';
import Link from 'next/link';

function PostCard({ post }) {
  return (
    <div>
      {post.title}
      {post.excerpt}
    </div>
  );
}

export default PostCard;
