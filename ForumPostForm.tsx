// src/ForumPostForm.tsx
import React, { useState } from "react";

interface ForumPostFormProps {
  addPost: (title: string, content: string) => void;
}

const ForumPostForm: React.FC<ForumPostFormProps> = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addPost(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};

export default ForumPostForm;
