//App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, Container } from 'react-bootstrap';
import ContactsTable from './components/ContactsTable';

// Importer les packages nécessaires
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Ajouter les icônes à la bibliothèque
library.add(faAddressBook);

function App() {

  const contactsData = [
    { nom: "ABBASSI Kamel", tel: 26388202, avatarUrl: "img/1.jpg" },
    { nom: "Haddad faycel", tel: 9874521, avatarUrl: "img/2.jpg" },
    { nom: "Najeh walid", tel: 65465465, avatarUrl: "img/1.jpg" },
    { nom: "Ben said nabiha", tel: 65465465, avatarUrl: "img/3.jpg" },
    { nom: "ABBASSI Kamel", tel: 26388202, avatarUrl: "img/1.jpg" },
    { nom: "Haddad faycel", tel: 9874521, avatarUrl: "img/2.jpg" },
    { nom: "Najeh walid", tel: 65465465, avatarUrl: "img/1.jpg" },
    { nom: "Ben said nabiha", tel: 65465465, avatarUrl: "img/3.jpg" }
  ];

  return (
    <>
      <div className="App ">
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <FontAwesomeIcon icon={faAddressBook} size="2x" color="white" />&nbsp;  &nbsp;
            <Navbar.Brand href="#home">Contacts Manager</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">V1.0</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <div className='container'>
          <div className='p-4'></div>
          <ContactsTable contacts={contactsData} />
        </div>

      </div>
    </>
  );
}

export default App;
