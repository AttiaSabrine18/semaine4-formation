import React, { useState, useEffect } from 'react';
import { fetchUsers } from './api';
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const [filteredUsers, setFilteredUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const usersData = await fetchUsers();
      setUsers(usersData);
      setFilteredUsers(usersData);
    };
    getUsers();
  }, []);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = users.filter(user => user.name.toLowerCase().includes(e.target.value.toLowerCase()));
    (contact) =>
      contact.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.tel.toString().includes(searchTerm)
    setFilteredUsers(filtered);
  };
  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Rechercher un utilisateur" />
      <ul>
        {currentUsers.map(user => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Adresse: {user.address.city}, {user.address.street}, {user.address.suite}</p>
            <p>Téléphone: {user.phone}</p>
          </li>
        ))}
      </ul>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>Précédent</button>
      <button onClick={handleNextPage} disabled={currentUsers.length < usersPerPage}>Suivant</button>
    </div>
  );
}
export default UserList;