import React from 'react'
import { Container } from 'react-bootstrap'
import NavBar from './AdminNavBar/AdminNavBar'
import { Content } from './AdminContent/Content'

export const Admins = () => {
    return (
        <Container>
            <NavBar/>
            <Content/>
        </Container>
    )
}
