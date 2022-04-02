import React from 'react'
import { Container } from 'react-bootstrap'
import UserNavBar from './UserNavBar'

var curr_user = window.sessionStorage.getItem("CurrUser")
var curr_user_json = JSON.parse(curr_user)

export const Dashboard = () => {
    return (
        <Container>
            <UserNavBar />
            <h1>Welcome user!</h1>
        </Container>
    )
}
