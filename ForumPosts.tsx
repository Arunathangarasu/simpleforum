// src/ForumPosts.tsx
import React from "react";

interface Post {
  id: number;
  title: string;
  content: string;
}

interface ForumPostsProps {
  posts: Post[];
}

const ForumPosts: React.FC<ForumPostsProps> = ({ posts }) => {
  return (
    <div>
      <h2>Forum Posts</h2>
      <div className="posts">
        {posts.length === 0 ? (
          <p>No posts available. Create one!</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="post">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ForumPosts;
