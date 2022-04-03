import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export default function NavBar() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="/dashboard">Doc On</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/request">Request Doctor</Nav.Link>
                    <Nav.Link href="/hospitals">View Hospitals</Nav.Link>
                    <Nav.Link href="/drResponses">Doctor Responses</Nav.Link>
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
