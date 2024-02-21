// src/PostList.js
import React, { useState, useEffect } from 'react';
import { fetchPosts } from './api';
const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [filteredPosts, setFilteredPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const postsData = await fetchPosts();
      setPosts(postsData);
      setFilteredPosts(postsData);
    };
    getPosts();
  }, []);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = posts.filter(post => post.title.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilteredPosts(filtered);
  };
  return (
    <div>
      <h2>Liste des articles</h2>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Rechercher un article" />
      <ul>
        {currentPosts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>Précédent</button>
      <button onClick={handleNextPage} disabled={currentPosts.length < postsPerPage}>Suivant</button>
    </div>
  );
}
export default PostList;