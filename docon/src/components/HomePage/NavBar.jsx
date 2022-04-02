import React from 'react'
import { Button } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export default function NavBar() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="/">Doc On</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <button class="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        <a class='text-white' href='/login'>Login</a>
                    </button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
