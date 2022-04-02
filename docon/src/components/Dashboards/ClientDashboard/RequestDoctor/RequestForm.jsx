import React from 'react'
import { Container } from 'react-bootstrap'
import UserNavBar from '../UserNavBar'
import { Form } from './Form'

export const RequestForm = () => {
    return (
        <Container>
            <UserNavBar />
            <Form/>
        </Container>
    )
}
