// src/App.tsx
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ForumPostForm from "./ForumPostForm";
import ForumPosts from "./ForumPosts";

const App: React.FC = () => {
  const [posts, setPosts] = useState<{ id: number; title: string; content: string }[]>([]);

  const addPost = (title: string, content: string) => {
    const newPost = {
      id: posts.length + 1,
      title,
      content,
    };
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <div className="container">
      <nav>
        <Link to="/">Home</Link> | <Link to="/posts">Forum Posts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ForumPostForm addPost={addPost} />} />
        <Route path="/posts" element={<ForumPosts posts={posts} />} />
      </Routes>
    </div>
  );
};

export default App;
