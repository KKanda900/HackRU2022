import React from 'react'
import { Container } from 'react-bootstrap'
import UserNavBar from './UserNavBar'

export const Dashboard = () => {
    return (
        <Container>
            <UserNavBar />
            <h1>Welcome user!</h1>
        </Container>
    )
}
