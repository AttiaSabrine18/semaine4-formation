// ArticleListPage.jsx
import React, { useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';

const ArticleListPage = () => {
    const initialArticles = [
        { id: 1, name: 'Article 1', price: 20.99 },
        { id: 2, name: 'Article 2', price: 15.49 },
        // Ajoutez plus d'articles si nécessaire
    ];

    const [articles, setArticles] = useState(initialArticles);
    const [showModal, setShowModal] = useState(false);
    const [newArticle, setNewArticle] = useState({ name: '', price: '' });
    // Pour supprimer un produit
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [articleToDelete, setArticleToDelete] = useState(null);
    const handleOpenDeleteModal = (article) => {
        setArticleToDelete(article);
        setShowDeleteModal(true);
      };

      const handleCloseDeleteModal = () => {
        setArticleToDelete(null);
        setShowDeleteModal(false);
      };

      const handleDeleteArticle = () => {
        const updatedArticles = articles.filter((article) => article.id !== articleToDelete.id);
        setArticles(updatedArticles);
        handleCloseDeleteModal();
      };


    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleAddArticle = () => {
        const id = articles.length + 1;
        const articleToAdd = { id, ...newArticle };
        setArticles([...articles, articleToAdd]);
        handleCloseModal();
    };

    return (
        <div>
            <h1>Liste des Articles</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Prix</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map((article) => (
                        <tr key={article.id}>
                            <td>{article.id}</td>
                            <td>{article.name}</td>
                            <td>{article.price}</td>
                            <td>
                                <Button variant="info" onClick={() => console.log('Modifier', article)}>
                                    Modifier
                                </Button>{' '}
                                <Button variant="danger" onClick={() => handleOpenDeleteModal(article)}>
                                    Supprimer
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Button variant="primary" onClick={handleOpenModal}>
                Ajouter un Article
            </Button>
         {/* Modal pour Ajouter */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter un Article</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Nom de l'Article</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Entrez le nom de l'article"
                                value={newArticle.name}
                                onChange={(e) => setNewArticle({ ...newArticle, name: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group controlId="formPrice">
                            <Form.Label>Prix de l'Article</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Entrez le prix de l'article"
                                value={newArticle.price}
                                onChange={(e) => setNewArticle({ ...newArticle, price: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Annuler
                    </Button>
                    <Button variant="primary" onClick={handleAddArticle}>
                        Ajouter
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal pour supprimer un produit */}
            <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Supprimer un Article</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Êtes-vous sûr de vouloir supprimer l'article "{articleToDelete?.name}" ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDeleteModal}>
                        Annuler
                    </Button>
                    <Button variant="danger" onClick={handleDeleteArticle}>
                        Supprimer
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
};

export default ArticleListPage;
