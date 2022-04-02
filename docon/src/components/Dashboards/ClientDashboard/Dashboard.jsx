import React from 'react'
import { Container } from 'react-bootstrap'
import UserNavBar from './UserNavBar'
import Calendar from 'react-calendar'

var curr_user = window.sessionStorage.getItem("CurrUser")
var curr_user_json = JSON.parse(curr_user)

export const Dashboard = () => {
    return (
        <Container>
            <UserNavBar />
            <div class='grid grid-cols-3 pt-10'>
                <div class='col-span-2'>
                    <h3>Overview of 'user'</h3> 
                </div>
                <div>
                    <h3>Appointments</h3>
                    <Calendar />
                </div>
            </div>
        </Container>
    )
}
