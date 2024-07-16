import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <Navbar className="bg-primary p-3">
    <Container>
      <Navbar.Brand>
      <h4 className='text-warning'>
          <FontAwesomeIcon icon={faVideo} fade className='me-3' />
            media Player
      </h4>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header