import NavBar from '../HomePage/NavBar'
import Signup from './Signup'
import React from 'react'
import Container from 'react-bootstrap/Container'

export default function Login() {
    return (
        <Container>
            <NavBar />
            <Signup/>
        </Container>
    )
}