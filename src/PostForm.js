// PostForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from './actions';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      title,
      body,
      userId: 1, // Remplacez par l'ID de l'utilisateur approprié
    };

    // Dispatch de l'action pour créer un nouvel article
    dispatch(createPost(postData));

    // Réinitialiser le formulaire après la création de l'article
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Titre:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Corps:
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
      </label>
      <br />
      <button type="submit">Créer un nouvel article</button>
    </form>
  );
};

export default PostForm;
