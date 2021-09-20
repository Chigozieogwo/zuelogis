import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Container, Nav } from 'react-bootstrap'
// import SearchBox from '../components/SearchBox.js'
import { Route } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Logistic</Navbar.Brand>
          </LinkContainer>
          {/* <Route render={({ history }) => <SearchBox history={history} />} /> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link>
                  {' '}
                  <i className="fa fa-shopping-cart"></i> Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/admin/tracklist">
                <Nav.Link>
                  {' '}
                  <i className="fa fa-user"></i> Tracks{' '}
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/admin/tracks/create">
                <Nav.Link>
                  <i className="fa fa-user"></i>Create
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
