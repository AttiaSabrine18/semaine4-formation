import React, { useState } from 'react';
import { Table, Pagination, Badge, Form, Row, Col , Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown , faFileExcel ,faFilePdf } from '@fortawesome/free-solid-svg-icons';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
const ContactsTable = ({ contacts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const contactsPerPage = 5;
  if (!contacts || contacts.length === 0) {
    return <p>No contacts available.</p>;
  }
  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const filteredContacts = contacts.filter(contact =>
    contact.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (typeof contact.tel === 'string' && contact.tel.includes(searchQuery)) ||
    (contact.tel && typeof contact.tel !== 'string' && String(contact.tel).includes(searchQuery))
  );
  const sortedContacts = filteredContacts.slice().sort((a, b) => {
    if (sortBy === 'nom') {
      return sortOrder === 'asc' ? a.nom.localeCompare(b.nom) : b.nom.localeCompare(a.nom);
    }
    // Add other sorting criteria if needed
    return 0;
  });
  const currentContacts = sortedContacts.slice(indexOfFirstContact, indexOfLastContact);
  const totalPages = Math.ceil(sortedContacts.length / contactsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleSort = (key) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(key);
      setSortOrder('asc');
    }
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset pagination when search query changes
  };
  const highlightText = (text, query) => {
    if (typeof text !== 'string') {
      text = String(text);
    }
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? <strong key={i}>{part}</strong> : part
    );
  };
  const exportToExcel = () => {
    const header = ['Numéro', 'Avatar', 'Nom', 'Téléphone'];
    const data = currentContacts.map((contact, index) => [
      indexOfFirstContact + index + 1,
      contact.avatarUrl || 'https://picsum.photos/200/300',
      contact.nom,
      contact.tel,
    ]);

    const sheet = XLSX.utils.aoa_to_sheet([header, ...data]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, sheet, 'Contacts');

    XLSX.writeFile(wb, 'contacts.xlsx');
  };
  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.text('Liste des contacts', 10, 10);
    doc.autoTable({
      head: [['Numéro', 'Avatar', 'Nom', 'Téléphone']],
      body: currentContacts.map((contact, index) => [
        indexOfFirstContact + index + 1,
        contact.avatarUrl || 'https://picsum.photos/200/300',
        contact.nom,
        contact.tel,
      ]),
    });
    doc.save('contacts.pdf');
  };

  return (
    <>
      <h2 className="text-muted">
        Votre liste des contacts contient{' '}
        <Badge variant="primary">{contacts.length}</Badge> contacts
      </h2>
      <Row className="mb-3">
        <Col sm={12} md={6} className="mx-auto">
          <Form.Control
            type="text"
            placeholder="Rechercher par nom ou téléphone"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Col>
      </Row> 
      <Row>
        <Col>
        <Button variant="success" onClick={exportToExcel} style={{marginBottom : '2%'}}>
      <FontAwesomeIcon icon={faFileExcel}style={{marginRight : '10px'}}/>
        get in Excel file
      </Button>
        </Col>
     <Col>
      <Button variant="danger" onClick={handleExportPDF} className="ml-2">
        <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
        Export to PDF
      </Button>
      </Col>
     
      </Row>
     
      <Table striped bordered hover>
        <thead>
          <tr>
            <th onClick={() => handleSort('numero')}>Numéro</th>
            <th>Avatar</th>
            <th onClick={() => handleSort('nom')}>
              Nom{' '}
              {sortBy === 'nom' && (
                <FontAwesomeIcon icon={sortOrder === 'asc' ? faSortUp : faSortDown} />
              )}
            </th>
            <th onClick={() => handleSort('tel')}>
              Téléphone{' '}
              {sortBy === 'tel' && (
                <FontAwesomeIcon icon={sortOrder === 'asc' ? faSortUp : faSortDown} />
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {currentContacts.map((contact, index) => (
            <tr key={index}>
              <td>{indexOfFirstContact + index + 1}</td>
              <td>
                <img
                  src={contact.avatarUrl || 'https://picsum.photos/200/300'}
                  alt={`Avatar de ${contact.nom}`}
                  width="50"
                  height="50"
                  className="img-thumbnail"
                />
              </td>
              <td>
                {highlightText(contact.nom, searchQuery)}
              </td>
              <td>
                {highlightText(contact.tel, searchQuery)}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </>
  );
};
export default ContactsTable;