import React, { useState } from "react";

import './Blog.css'

const Blog = () => {
    // State to store blog posts
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("");
    const [comment, setComment] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && comment) {
            const newPost = { id: Date.now(), title, comment };
            setPosts([newPost, ...posts]); // Add the new post to the top of the list
            setTitle(""); // Clear the input fields
            setComment("");
        }
    };

    // Handle post deletion
    const handleDelete = (id) => {
        setPosts(posts.filter((post) => post.id !== id));
    };

    return (
        <div className="blog-container">
            <h1>Blog</h1>
            <form onSubmit={handleSubmit} className="blog-form">
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter title"
                    required
                />
                <label htmlFor="comment">Comment:</label>
                <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Enter comment"
                    required
                />
                <button type="submit">Add Blog Post</button>
            </form>
            <div className="blog-posts">
                <h2>Posts</h2>
                {posts.length === 0 ? (
                    <p>No posts yet. Add a post!</p>
                ) : (
                    posts.map((post) => (
                        <div key={post.id} className="blog-post">
                            <h3>{post.title}</h3>
                            <p>{post.comment}</p>
                            <button
                                className="delete-button"
                                onClick={() => handleDelete(post.id)}
                            >
                                Delete
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Blog;
