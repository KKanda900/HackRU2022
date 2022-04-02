import React from 'react'
import { Button } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import { NavDropdown } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export default function NavBar() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="/">Doc On</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/request">Request Doctor</Nav.Link>
                    <Nav.Link href="#link">View Hospitals</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <button class="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        <a class='text-white' href='/'>Home</a>
                    </button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
