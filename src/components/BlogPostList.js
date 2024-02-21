// BlogPostList.js
import React, { useState, useEffect } from 'react';
// installer axios  npm i axios
import axios from 'axios';
import "./contact.css";

const BlogPostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:3002/users/lister');
                setPosts(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des articles:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h2>Liste d'articles de blog</h2>
            <ul>
                {posts && posts.liste && Object.values(posts.liste).map(post => (
                    <li key={post._id}>
                        <h3>{post.name}</h3>
                        <p>{post.tel}</p>
                        <p><img src='https://randomuser.me/api/portraits/men/75.jpg' /></p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BlogPostList;